import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9225;
const OUTPUT_DIR = path.resolve('./public/images/real');
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    try {
      const data = await new Promise((resolve, reject) => {
        http.get(`http://127.0.0.1:${PORT}/json`, (res) => {
          let body = '';
          res.on('data', (c) => (body += c));
          res.on('end', () => resolve(JSON.parse(body)));
        }).on('error', reject);
      });
      const page = Array.isArray(data) ? data.find((t) => t.type === 'page') : null;
      if (page && page.webSocketDebuggerUrl) {
        return page.webSocketDebuggerUrl;
      }
    } catch {
      await delay(250);
    }
  }
  throw new Error('Could not connect to Chrome debugging target');
}

class CdpClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 1;
    this.callbacks = new Map();
  }

  async connect() {
    await new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
      this.ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.callbacks.has(msg.id)) {
          const { resolve, reject } = this.callbacks.get(msg.id);
          this.callbacks.delete(msg.id);
          if (msg.error) reject(msg.error);
          else resolve(msg.result);
        }
      };
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    this.ws.close();
  }
}

async function downloadImageFromUrl(url, filename) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Referer': 'https://www.instagram.com/',
      }
    });
    if (!res.ok) return false;
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    if (buffer.length > 5000) {
      const outPath = path.join(OUTPUT_DIR, filename);
      fs.writeFileSync(outPath, buffer);
      console.log(`[SAVED REAL INSTAGRAM PHOTO]: ${filename} (${buffer.length} bytes)`);
      return true;
    }
  } catch (e) {
    console.error(`Error downloading ${url}:`, e.message);
  }
  return false;
}

async function main() {
  console.log('Launching headless Chrome on port', PORT);
  const chrome = spawn(
    CHROME_PATH,
    [
      '--headless',
      '--disable-gpu',
      `--remote-debugging-port=${PORT}`,
      '--user-data-dir=/tmp/chrome-insta-crawl-profile',
      '--window-size=1440,900',
      'about:blank',
    ],
    { stdio: 'ignore' }
  );

  try {
    const wsUrl = await getWsUrl();
    const client = new CdpClient(wsUrl);
    await client.connect();

    await client.send('Page.enable');
    await client.send('Runtime.enable');
    await client.send('Network.enable');

    console.log('\n--- Navigating to Instagram @capital_barbers_by_efi ---');
    await client.send('Page.navigate', {
      url: 'https://www.instagram.com/capital_barbers_by_efi/',
    });
    await delay(6000);

    const instaData = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const results = [];
        const imgs = document.querySelectorAll('article img, main img, div img');
        imgs.forEach(img => {
          if (img.srcset) {
            const parts = img.srcset.split(',').map(s => s.trim().split(' '));
            parts.sort((a, b) => parseInt(b[1] || '0') - parseInt(a[1] || '0'));
            if (parts[0] && parts[0][0]) results.push(parts[0][0]);
          } else if (img.src && !img.src.includes('150x150') && !img.src.includes('static')) {
            results.push(img.src);
          }
        });
        return Array.from(new Set(results));
      })()`,
      returnByValue: true,
    });

    const highResInsta = instaData.result?.value || [];
    console.log(`Found ${highResInsta.length} high-res Instagram photo candidates`);

    let iSaved = 1;
    for (const url of highResInsta) {
      if (url.includes('cdninstagram.com') || url.includes('fbcdn.net')) {
        const ok = await downloadImageFromUrl(url, `insta_real_${iSaved}.jpg`);
        if (ok) {
          iSaved++;
          if (iSaved > 12) break;
        }
      }
    }

    client.close();
  } catch (err) {
    console.error('Error during Instagram crawling:', err);
  } finally {
    try {
      chrome.kill('SIGTERM');
    } catch {}
  }
}

main();
