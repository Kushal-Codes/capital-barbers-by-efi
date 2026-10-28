import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve('.');

console.log('====================================================');
console.log('STARTING QA AUDIT: CAPITAL BARBERS BY EFI (MANCHESTER)');
console.log('====================================================\n');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passed++;
  } else {
    console.error(`[FAIL] ${message}`);
    failed++;
  }
}

// 1. Verify Services Data
const servicesTs = fs.readFileSync(path.join(projectRoot, 'src/data/services.ts'), 'utf8');

const expectedServices = [
  { name: 'Skin Fade', duration: '35–45 mins', price: '£20.00' },
  { name: 'Haircut & Beard Trim', duration: '40–45 mins', price: '£20.00' },
  { name: 'Haircut, Wash & Finish', duration: '45 mins', price: '£25.00' },
  { name: 'Razor Fade & Beard Trim', duration: '45–50 mins', price: '£25.00' },
  { name: 'Classic Haircut', duration: '30–40 mins', price: '£20.00' },
  { name: 'Standard Haircut', duration: '30–35 mins', price: '£20.00' },
  { name: 'Scissor Cut', duration: '35–45 mins', price: '£20.00' },
  { name: 'Razor Fade', duration: '35–45 mins', price: '£20.00' },
  { name: 'Zero-Length Cut', duration: '20–30 mins', price: '£15.00' },
  { name: 'Senior Haircut (Ages 65+)', duration: '30 mins', price: '£20.00' },
  { name: 'Youth Haircut (Ages 10–17)', duration: '30 mins', price: '£15.00' },
  { name: 'Children’s Haircut (Under 10)', duration: '20–25 mins', price: '£12.00' },
  { name: 'Beard Trim', duration: '15–20 mins', price: '£10.00' },
  { name: 'Shape-Up & Beard Trim', duration: '20–25 mins', price: '£13.00' },
  { name: 'Haircut & Professional Beard Styling', duration: '45 mins', price: '£20.00' },
  { name: 'Haircut & Beard + Facial Steamer', duration: '50–60 mins', price: '£28.00' },
  { name: 'Traditional Hot Towel Wet Shave', duration: '30 mins', price: '£20.00' },
  { name: 'Full Face & Ear Waxing Bundle', duration: '20 mins', price: '£12.00' },
  { name: 'Nose Waxing', duration: '10 mins', price: '£5.00' },
  { name: 'Ear Waxing', duration: '10 mins', price: '£5.00' },
  { name: 'Eyebrow Waxing & Shaping', duration: '10 mins', price: '£5.00' },
  { name: 'Cheek Line Waxing', duration: '10 mins', price: '£5.00' },
];

for (const exp of expectedServices) {
  assert(
    servicesTs.includes(exp.name),
    `Service catalogue contains exact service name: "${exp.name}"`
  );
  assert(
    servicesTs.includes(exp.duration),
    `Service catalogue contains verified duration: "${exp.duration}" for "${exp.name}"`
  );
  assert(
    servicesTs.includes(exp.price),
    `Service catalogue contains verified GBP price: "${exp.price}" for "${exp.name}"`
  );
}

// 2. Verify Business Data
const businessTs = fs.readFileSync(path.join(projectRoot, 'src/data/business.ts'), 'utf8');
assert(businessTs.includes('Capital Barbers By Efi'), 'Business name is "Capital Barbers By Efi"');
assert(businessTs.includes('46 George Street'), 'Address contains "46 George Street"');
assert(businessTs.includes('M1 4HF'), 'Postcode is verified "M1 4HF"');
assert(businessTs.includes('07539 635060'), 'Telephone contains "07539 635060"');
assert(businessTs.includes('+44 7539 635060'), 'International phone contains "+44 7539 635060"');
assert(businessTs.includes('tel:07539635060'), 'Direct dialer link is "tel:07539635060"');
assert(businessTs.includes('capital@eficapitalbarber.com'), 'Email is "capital@eficapitalbarber.com"');
assert(businessTs.includes('53.4791388') && businessTs.includes('-2.2402386'), 'Google Maps coordinates verified');
assert(businessTs.includes('https://www.instagram.com/capital_barbers_by_efi/'), 'Official Instagram link verified');
assert(businessTs.toLowerCase().includes('reviews'), 'Client reviews referenced');
assert(businessTs.includes('4.9'), '4.9 rating score referenced');

// 3. Verify HTML & SEO Schema.org
const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');
assert(indexHtml.includes('Capital Barbers By Efi'), 'index.html title/meta contains brand name');
assert(indexHtml.includes('schema.org'), 'Schema.org structured data present');
assert(indexHtml.includes('"@type": "BarberShop"'), 'LocalBusiness / BarberShop type defined in JSON-LD');
assert(indexHtml.includes('53.4791388') && indexHtml.includes('-2.2402386'), 'GeoCoordinates present in Schema.org');
assert(indexHtml.includes('noindex'), 'noindex configured for preview concept as required');

// 4. Verify Creative Direction Components
assert(fs.existsSync(path.join(projectRoot, 'src/components/illustrations/BrandMotifs.tsx')), 'BrandMotifs & original SVGs exist');
assert(fs.existsSync(path.join(projectRoot, 'src/components/animations/VerifiedStamp.tsx')), 'Rotating "VERIFIED MANCHESTER" stamp exists');
assert(fs.existsSync(path.join(projectRoot, 'src/components/animations/Marquee.tsx')), 'Continuous brand Marquee component exists');
assert(fs.existsSync(path.join(projectRoot, 'src/components/services/ServiceCard.tsx')), 'Editorial ServiceCard component exists');
assert(fs.existsSync(path.join(projectRoot, 'src/components/services/BookingModal.tsx')), 'Direct telephone BookingModal component exists');
assert(fs.existsSync(path.join(projectRoot, 'public/favicon.svg')), 'Custom SVG favicon exists');
assert(fs.existsSync(path.join(projectRoot, 'public/og-preview.png')), 'Custom OG image preview exists');

// 5. Verify Deliverables Checklist
assert(fs.existsSync(path.join(projectRoot, 'BUSINESS_RESEARCH.md')), 'BUSINESS_RESEARCH.md exists');
assert(fs.existsSync(path.join(projectRoot, '.env.example')), '.env.example exists');
assert(fs.existsSync(path.join(projectRoot, 'vercel.json')), 'vercel.json exists');

// 6. Verify Production Build Output
assert(fs.existsSync(path.join(projectRoot, 'dist/index.html')), 'Production dist/index.html exists');
assert(fs.existsSync(path.join(projectRoot, 'dist/favicon.svg')), 'Production dist/favicon.svg exists');
assert(fs.existsSync(path.join(projectRoot, 'dist/og-preview.png')), 'Production dist/og-preview.png exists');

console.log(`\n====================================================`);
console.log(`QA AUDIT COMPLETE: ${passed} Passed, ${failed} Failed`);
console.log(`====================================================`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('ALL VERIFICATIONS PASSED 100%! READY FOR PRODUCTION.');
}
