import urllib.request
import urllib.parse
import json
import re
import os
import sys

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'Cookie': 'SOCS=CAISNQgDEitib3FfaWRlbnRpdHlmcm9udGVuZHVpc2VydmVyXzIwMjMwNjE4LjA0X3AwGgJlbhiA6_qkBQ; CONSENT=YES+cb.20230531-04-p0.en+FX+999'
}

OUTPUT_DIR = os.path.abspath('./public/images/real')
os.makedirs(OUTPUT_DIR, exist_ok=True)

def fetch_url(url, extra_headers=None):
    hdrs = dict(HEADERS)
    if extra_headers:
        hdrs.update(extra_headers)
    req = urllib.request.Request(url, headers=hdrs)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            final_url = resp.geturl()
            content = resp.read()
            return final_url, content
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None, None

def download_file(url, target_path, min_size=3000):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            if len(data) >= min_size:
                with open(target_path, 'wb') as f:
                    f.write(data)
                print(f"[SUCCESS] Downloaded {os.path.basename(target_path)} ({len(data)} bytes) from {url[:80]}...")
                return True
            else:
                print(f"[SKIP] Data too small ({len(data)} bytes): {url[:80]}")
    except Exception as e:
        print(f"[ERROR] Failed to download {url[:80]}: {e}")
    return False

def crawl_eficapitalbarber():
    print("\n--- 1. Crawling eficapitalbarber.com pages ---")
    urls_to_crawl = [
        "https://eficapitalbarber.com/",
        "https://eficapitalbarber.com/style-gallery/",
        "https://eficapitalbarber.com/services-and-treatments/",
        "https://eficapitalbarber.com/meet-efi/",
        "https://eficapitalbarber.com/hair-and-beard-pricing/",
        "https://eficapitalbarber.com/client-reviews/"
    ]
    found_images = set()
    for u in urls_to_crawl:
        final_url, html_bytes = fetch_url(u)
        if not html_bytes:
            continue
        html = html_bytes.decode('utf-8', errors='ignore')
        
        # Look for image tags or CDN URLs
        matches = re.findall(r'https?://[^\s"\'<>]+\.(?:jpg|jpeg|png|webp)', html, re.IGNORECASE)
        for m in matches:
            if not any(x in m.lower() for x in ['favicon', 'avatar-default', 'analytics', 'pixel', 'logo']):
                found_images.add(m)
        
        # JouwWeb media CDN matches
        jwwb_matches = re.findall(r'https?://primary\.jwwb\.nl/[^\s"\'<>\)]+', html, re.IGNORECASE)
        for m in jwwb_matches:
            if any(ext in m.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp', '/pexels/']):
                found_images.add(m)

    print(f"Found {len(found_images)} candidate images from eficapitalbarber.com")
    downloaded = []
    idx = 1
    for img_url in sorted(found_images):
        ext = 'jpg'
        if '.png' in img_url.lower(): ext = 'png'
        elif '.webp' in img_url.lower(): ext = 'webp'
        elif '.jpeg' in img_url.lower(): ext = 'jpeg'
        
        target = os.path.join(OUTPUT_DIR, f"website_real_{idx}.{ext}")
        if download_file(img_url, target, min_size=5000):
            downloaded.append((f"website_real_{idx}.{ext}", img_url))
            idx += 1
    return downloaded

def crawl_google_maps():
    print("\n--- 2. Crawling Google Maps Place Photos ---")
    # Place ID URL
    url = "https://www.google.com/maps/place/Capital+_Barbers+_By+Efi/@53.4791388,-2.2450022,709m/data=!3m1!1e3!4m7!3m6!1s0x487bb1b5a9190589:0xdfedc5d3ddd62ae3!8m2!3d53.4791388!4d-2.2402386"
    final_url, html_bytes = fetch_url(url)
    if not html_bytes:
        print("Failed to fetch Google Maps page directly.")
        return []
    
    html = html_bytes.decode('utf-8', errors='ignore')
    matches = re.findall(r'https://lh[3-6]\.googleusercontent\.com/p/[A-Za-z0-9_-]+', html)
    unique_lh = list(set(matches))
    print(f"Found {len(unique_lh)} Google Maps photo keys")
    
    downloaded = []
    idx = 1
    for base_url in unique_lh[:10]:
        high_res = f"{base_url}=w1200-h900-k-no"
        target = os.path.join(OUTPUT_DIR, f"gmaps_real_{idx}.jpg")
        if download_file(high_res, target, min_size=5000):
            downloaded.append((f"gmaps_real_{idx}.jpg", base_url))
            idx += 1
    return downloaded

def crawl_booksy():
    print("\n--- 3. Crawling Booksy listing ---")
    search_url = "https://booksy.com/en-gb/s?q=Capital+Barbers+By+Efi+Manchester"
    final_url, html_bytes = fetch_url(search_url)
    if not html_bytes:
        return []
    html = html_bytes.decode('utf-8', errors='ignore')
    # Booksy CDN images
    matches = re.findall(r'https?://[^\s"\'<>]*(?:booksy|cloudfront)[^\s"\'<>]+\.(?:jpg|jpeg|png|webp)', html, re.IGNORECASE)
    print(f"Found {len(matches)} Booksy photo keys")
    downloaded = []
    idx = 1
    for m in list(set(matches))[:12]:
        target = os.path.join(OUTPUT_DIR, f"booksy_real_{idx}.jpg")
        if download_file(m, target, min_size=5000):
            downloaded.append((f"booksy_real_{idx}.jpg", m))
            idx += 1
    return downloaded

if __name__ == '__main__':
    web_imgs = crawl_eficapitalbarber()
    gmaps_imgs = crawl_google_maps()
    booksy_imgs = crawl_booksy()
    
    total = len(web_imgs) + len(gmaps_imgs) + len(booksy_imgs)
    print(f"\n==========================================")
    print(f"CRAWL COMPLETE! Total real images saved: {total}")
    print(f"Output directory: {OUTPUT_DIR}")
    print(f"==========================================")
    
    # Write crawl report manifest
    manifest = {
        'website': web_imgs,
        'google_maps': gmaps_imgs,
        'booksy': booksy_imgs,
    }
    with open(os.path.join(OUTPUT_DIR, 'manifest.json'), 'w') as f:
        json.dump(manifest, f, indent=2)
    print("Saved manifest.json with source mappings.")
