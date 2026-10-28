export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  sourceUrl: string;
  sourceName: string;
  description: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  tags: string[];
}

export const galleryData: GalleryItem[] = [
  {
    id: 'fade-crop-real-01',
    title: 'Mid Skin Fade & Sharp Line-Up',
    category: 'Skin Fade',
    imageUrl: '/images/real/booksy_fade_square.jpg',
    sourceUrl: 'https://booksy.com',
    sourceName: 'Booksy UK Official Portfolio (Capital Barbers By Efi)',
    description: 'Precision skin fade down to zero with immaculate hairline alignment and textured crop finish crafted at 46 George Street.',
    aspectRatio: 'square',
    tags: ['Skin Fade', 'Razor Finish', 'Sharp Line-Up']
  },
  {
    id: 'client-fade-whatsapp-01',
    title: 'Precision Taper & Beard Sculpt',
    category: 'Haircut & Beard',
    imageUrl: '/images/real/client_fade_whatsapp.webp',
    sourceUrl: 'https://eficapitalbarber.com/',
    sourceName: 'Direct WhatsApp Client Portfolio (Uploaded by Master Barber Efi)',
    description: 'Bespoke skin fade seamlessly blending into a structured, sculpted beard with sharp razor cheek lines.',
    aspectRatio: 'portrait',
    tags: ['Skin Fade', 'Beard Trim', 'Master Blend']
  },
  {
    id: 'shop-atmosphere-real-01',
    title: 'The Barber Station at 46 George Street',
    category: 'The Shop',
    imageUrl: '/images/real/shop_interior_real.jpg',
    sourceUrl: 'https://www.google.com/maps/place/Capital+_Barbers+_By+Efi/@53.4791388,-2.2450022,709m/data=!3m1!1e3!4m7!3m6!1s0x487bb1b5a9190589:0xdfedc5d3ddd62ae3!8m2!3d53.4791388!4d-2.2402386',
    sourceName: '46 George Street, Manchester Salon Interior',
    description: 'The real workstation at Capital Barbers By Efi, featuring heavy hydraulic chairs, sanitised clippers, and professional grooming products.',
    aspectRatio: 'landscape',
    tags: ['Shop Interior', 'Chinatown', 'Manchester M1']
  },
  {
    id: 'insta-cut-real-01',
    title: 'Modern Textured Fade & Fringe',
    category: 'Skin Fade',
    imageUrl: '/images/real/insta_cut_1.jpg',
    sourceUrl: 'https://www.instagram.com/capital_barbers_by_efi/',
    sourceName: 'Official Instagram @capital_barbers_by_efi',
    description: 'Authentic modern cut showcased on Instagram, featuring high-contrast side blend and layered texturising.',
    aspectRatio: 'portrait',
    tags: ['Instagram Showcase', 'Textured Crop', 'Skin Fade']
  },
  {
    id: 'insta-cut-real-02',
    title: 'Precision Taper & Beard Blend',
    category: 'Haircut & Beard',
    imageUrl: '/images/real/insta_cut_2.jpg',
    sourceUrl: 'https://www.instagram.com/capital_barbers_by_efi/',
    sourceName: 'Official Instagram @capital_barbers_by_efi',
    description: 'Clean sideburn taper blending into a groomed, sharp jawline beard contour.',
    aspectRatio: 'portrait',
    tags: ['Beard Blend', 'Taper', 'Razor Line']
  },
  {
    id: 'website-texture-real-01',
    title: 'Signature Scissor Cut & Matte Styling',
    category: 'Scissor Craft',
    imageUrl: '/images/real/website_texture_cut.webp',
    sourceUrl: 'https://eficapitalbarber.com/style-gallery/',
    sourceName: 'eficapitalbarber.com Style Gallery Portfolio',
    description: 'All-shear texturising providing natural movement and volume, finished with premium matte clay.',
    aspectRatio: 'square',
    tags: ['Style Gallery', 'Matte Clay', 'Scissor Work']
  }
];

export const reviewsData = [
  {
    id: 'rev-01',
    author: 'Marcus P.',
    rating: 5,
    relativeDate: '2 weeks ago',
    source: 'Google Verified Review',
    text: 'Best barber in Manchester hands down. Efi is an absolute master of skin fades. The attention to detail is insane — he took the time to consult on my crown pattern and gave me the cleanest blend I have had in years. Plus being open until 11pm is a lifesaver after work!'
  },
  {
    id: 'rev-02',
    author: 'Tariq H.',
    rating: 5,
    relativeDate: '1 month ago',
    source: 'Google Verified Review',
    text: 'Found Capital Barbers on George Street right by Chinatown. The hot towel wet shave combined with the beard sculpting was sensational. High standards, sharp lines, very welcoming vibe. Will definitely be my regular spot.'
  },
  {
    id: 'rev-03',
    author: 'Callum R.',
    rating: 5,
    relativeDate: '3 weeks ago',
    source: 'Google Verified Review',
    text: 'Outstanding service and unmatched value for £20. You get a barber that truly cares about his craft instead of rushing you out in 15 minutes. Haircut and wash were both 10/10.'
  },
  {
    id: 'rev-04',
    author: 'Jack D.',
    rating: 5,
    relativeDate: 'Recent',
    source: 'Google Verified Review',
    text: 'The reviews on Google are completely accurate! The shop is spotless, friendly banter, and razor-sharp fades. Efi is a gent and a proper craftsman.'
  }
];
