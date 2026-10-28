export type ServiceCategory = 'all' | 'hair' | 'beard' | 'waxing';

export type ServiceIconType =
  | 'fade'
  | 'scissors'
  | 'beard'
  | 'shave'
  | 'wash'
  | 'wax'
  | 'buzz'
  | 'steam';

export interface ServiceItem {
  id: string;
  name: string;
  duration: string;
  price: number;
  priceFormatted: string;
  category: 'hair' | 'beard' | 'waxing';
  popular?: boolean;
  featured?: boolean;
  description: string;
  includes: string[];
  iconType: ServiceIconType;
}

export const servicesData: ServiceItem[] = [
  // --- HAIRCUTS & FADES ---
  {
    id: 'skin-fade',
    name: 'Skin Fade',
    duration: '35–45 mins',
    price: 20.0,
    priceFormatted: '£20.00',
    category: 'hair',
    popular: true,
    featured: true,
    description: 'Master precision skin fade tailored to your head shape. Seamless foil blend down to skin, scissor texturising on top, and ultra-crisp hairline alignment.',
    includes: ['Consultation', 'Foil & clipper skin taper', 'Top texturising', 'Neck clean & razor outline', 'Matte finish styling'],
    iconType: 'fade'
  },
  {
    id: 'haircut-and-beard',
    name: 'Haircut & Beard Trim',
    duration: '40–45 mins',
    price: 20.0,
    priceFormatted: '£20.00',
    category: 'hair',
    popular: true,
    featured: true,
    description: 'The definitive Manchester transformation. Full custom haircut or taper paired with precision beard sculpting, cheek line razor definition, and beard oil hydration.',
    includes: ['Full bespoke haircut', 'Beard shaping & taper', 'Cheek & neckline definition', 'Barber hot towel finish', 'Premium beard oil'],
    iconType: 'beard'
  },
  {
    id: 'haircut-wash-finish',
    name: 'Haircut, Wash & Finish',
    duration: '45 mins',
    price: 25.0,
    priceFormatted: '£25.00',
    category: 'hair',
    popular: true,
    featured: true,
    description: 'The ultimate refreshing haircut experience. Includes invigorating scalp massage, deep tea tree cleansing wash, precision chop, and styled finish.',
    includes: ['Pre-cut consultation', 'Deep cleansing wash', 'Scalp invigorating massage', 'Precision haircut', 'Blow dry & custom styling'],
    iconType: 'wash'
  },
  {
    id: 'razor-fade-beard',
    name: 'Razor Fade & Beard Trim',
    duration: '45–50 mins',
    price: 25.0,
    priceFormatted: '£25.00',
    category: 'hair',
    popular: false,
    featured: true,
    description: 'Cut-throat straight razor skin fade with master beard sculpting. Delivers unmatched sharpness, geometric line work, and long-lasting definition.',
    includes: ['Straight-razor skin fade', 'Precision beard shaping', 'Razor cheek & neck line-up', 'Soothing balm application', 'Styling product'],
    iconType: 'shave'
  },
  {
    id: 'classic-haircut',
    name: 'Classic Haircut',
    duration: '30–40 mins',
    price: 20.0,
    priceFormatted: '£20.00',
    category: 'hair',
    popular: false,
    description: 'Timeless scissor and clipper silhouette. Perfect for business cuts, classic pompadours, side partings, or natural layered flows.',
    includes: ['Full scissor & clipper taper', 'Neckline clean & taper', 'Sideburn grooming', 'Texture styling'],
    iconType: 'scissors'
  },
  {
    id: 'standard-haircut',
    name: 'Standard Haircut',
    duration: '30–35 mins',
    price: 20.0,
    priceFormatted: '£20.00',
    category: 'hair',
    popular: false,
    description: 'Everyday upkeep to keep you looking sharp. Clipper sides, scissor top, clean perimeter lines, and natural product finish.',
    includes: ['Clipper & scissor work', 'Perimeter detailing', 'Neck shave', 'Style finish'],
    iconType: 'scissors'
  },
  {
    id: 'scissor-cut',
    name: 'Scissor Cut',
    duration: '35–45 mins',
    price: 20.0,
    priceFormatted: '£20.00',
    category: 'hair',
    popular: false,
    description: '100% shear craftsmanship. Ideal for medium to long hair, textured crops, textured mullets, and natural flowing hairstyles.',
    includes: ['Sectioning & shear graduation', 'Weight removal & texturising', 'Blow-dry shape', 'Texturising powder or cream'],
    iconType: 'scissors'
  },
  {
    id: 'razor-fade',
    name: 'Razor Fade',
    duration: '35–45 mins',
    price: 20.0,
    priceFormatted: '£20.00',
    category: 'hair',
    popular: false,
    description: 'Down to the wood. Zero-contrast fade executed with a single-blade straight razor for the smoothest possible skin graduation.',
    includes: ['Cut-throat razor finish', 'Warm pre-shave lather', 'Scissor work on crown', 'Soothing aftershave lotion'],
    iconType: 'shave'
  },
  {
    id: 'zero-length-cut',
    name: 'Zero-Length Cut',
    duration: '20–30 mins',
    price: 15.0,
    priceFormatted: '£15.00',
    category: 'hair',
    popular: false,
    description: 'Uniform all-over buzz down to zero with immaculate hairline lining, temple detailing, and foil finish on the neck.',
    includes: ['All-over clipper buzz', 'Hairline shape-up', 'Nape foil clean', 'Cooling aftershave mist'],
    iconType: 'buzz'
  },
  {
    id: 'senior-haircut',
    name: 'Senior Haircut (Ages 65+)',
    duration: '30 mins',
    price: 20.0,
    priceFormatted: '£20.00',
    category: 'hair',
    popular: false,
    description: 'Gentleman’s classic scissor & comb cut with complimentary eyebrow and ear hair tidy. Traditional grooming at its finest.',
    includes: ['Scissor & comb precision cut', 'Ear & brow tidy', 'Clean neck shave', 'Classic tonic splash'],
    iconType: 'scissors'
  },
  {
    id: 'youth-haircut',
    name: 'Youth Haircut (Ages 10–17)',
    duration: '30 mins',
    price: 15.0,
    priceFormatted: '£15.00',
    category: 'hair',
    popular: false,
    description: 'Sharp, trendy cuts for secondary school and college students. Modern fades, crops, tapers, and textured styling.',
    includes: ['Trend consultation', 'Fade or scissor cut', 'Clean perimeter', 'Matte clay styling'],
    iconType: 'fade'
  },
  {
    id: 'children-haircut',
    name: 'Children’s Haircut (Under 10)',
    duration: '20–25 mins',
    price: 12.0,
    priceFormatted: '£12.00',
    category: 'hair',
    popular: false,
    description: 'Calm, patient, friendly haircut experience for younger boys. Clean cuts and tidy finishes with a smile.',
    includes: ['Gentle scissor/clipper cut', 'Clean neckline', 'Kid-approved hair wax finish'],
    iconType: 'scissors'
  },

  // --- BEARD & SHAVES ---
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    duration: '15–20 mins',
    price: 10.0,
    priceFormatted: '£10.00',
    category: 'beard',
    popular: true,
    description: 'Fast, precise beard de-bulking, symmetrical shaping, and trimmer line-up finished with nourishing scented beard oil.',
    includes: ['Clipper length reduction', 'Moustache shape', 'Jawline outline', 'Conditioning beard oil'],
    iconType: 'beard'
  },
  {
    id: 'shape-up-beard',
    name: 'Shape-Up & Beard Trim',
    duration: '20–25 mins',
    price: 13.0,
    priceFormatted: '£13.00',
    category: 'beard',
    popular: false,
    description: 'Detailed beard sculpting with sharpened cheek lines, sculpted neck boundary, and clean mustache trimming.',
    includes: ['Symmetrical beard taper', 'Razor/foil line-up', 'Upper lip clean', 'Hot towel finish', 'Beard balm'],
    iconType: 'beard'
  },
  {
    id: 'haircut-beard-styling',
    name: 'Haircut & Professional Beard Styling',
    duration: '45 mins',
    price: 20.0,
    priceFormatted: '£20.00',
    category: 'beard',
    popular: false,
    description: 'Complete stylistic overhaul. Haircut plus in-depth beard styling, density grading, and hair-to-beard blend.',
    includes: ['Precision haircut', 'Beard grade & blend', 'Hot styling comb alignment', 'Lotion & serum finish'],
    iconType: 'beard'
  },
  {
    id: 'haircut-beard-steamer',
    name: 'Haircut & Beard + Facial Steamer',
    duration: '50–60 mins',
    price: 28.0,
    priceFormatted: '£28.00',
    category: 'beard',
    popular: true,
    featured: true,
    description: 'The pinnacle luxury service. Warm ionic steam opens pores while Efi sculpts your hair and beard, finishing with cold towel and face refresh.',
    includes: ['Warm ionic steam therapy', 'Full precision haircut', 'Master beard sculpt', 'Straight-razor edge', 'Cold towel closure'],
    iconType: 'steam'
  },
  {
    id: 'hot-towel-shave',
    name: 'Traditional Hot Towel Wet Shave',
    duration: '30 mins',
    price: 20.0,
    priceFormatted: '£20.00',
    category: 'beard',
    popular: true,
    description: 'Authentic Turkish-style straight-razor shave with steaming eucalyptus towels, pre-shave lather, double pass shave, and icy balm closure.',
    includes: ['Pre-shave essential oils', 'Steaming hot towels (x2)', 'Traditional brush lather', 'Cut-throat razor shave', 'Cooling alum & balm'],
    iconType: 'shave'
  },

  // --- WAXING & GROOMING ADD-ONS ---
  {
    id: 'full-face-wax',
    name: 'Full Face & Ear Waxing Bundle',
    duration: '20 mins',
    price: 12.0,
    priceFormatted: '£12.00',
    category: 'waxing',
    popular: true,
    description: 'Complete facial grooming package. Eliminates unwanted nasal, ear, eyebrow, and upper cheek fuzz in one clean, rapid session.',
    includes: ['Nose follicle wax', 'Outer ear tidy', 'Eyebrow shaping', 'Cheek perimeter tidy', 'Soothing aloe gel'],
    iconType: 'wax'
  },
  {
    id: 'nose-waxing',
    name: 'Nose Waxing',
    duration: '10 mins',
    price: 5.0,
    priceFormatted: '£5.00',
    category: 'waxing',
    popular: false,
    description: 'Quick, hygienic hard wax removal of visible nasal hairs. Leaves you breathing fresh with zero strays.',
    includes: ['Warm chamomile wax application', 'Quick extraction', 'Cooling aftercare'],
    iconType: 'wax'
  },
  {
    id: 'ear-waxing',
    name: 'Ear Waxing',
    duration: '10 mins',
    price: 5.0,
    priceFormatted: '£5.00',
    category: 'waxing',
    popular: false,
    description: 'Effective and pain-free waxing of outer ear lobes and tragus area for a pristine gentleman’s finish.',
    includes: ['Outer ear cleaning', 'Gentle warm wax pull', 'Soothing astringent'],
    iconType: 'wax'
  },
  {
    id: 'eyebrow-waxing',
    name: 'Eyebrow Waxing & Shaping',
    duration: '10 mins',
    price: 5.0,
    priceFormatted: '£5.00',
    category: 'waxing',
    popular: false,
    description: 'Discreet brow tidy, clearing the bridge between the brows and framing natural masculine arches.',
    includes: ['Centre brow clearance', 'Arch tidy', 'Trimming stray lengths', 'Aloe vera touch'],
    iconType: 'wax'
  },
  {
    id: 'cheek-line-waxing',
    name: 'Cheek Line Waxing',
    duration: '10 mins',
    price: 5.0,
    priceFormatted: '£5.00',
    category: 'waxing',
    popular: false,
    description: 'Wax definition along the upper cheek line for longer-lasting beard sharpness compared to shaving.',
    includes: ['Beard line mapping', 'Targeted cheek wax', 'Calming moisturizer'],
    iconType: 'wax'
  }
];

export const serviceCategories = [
  { id: 'all', label: 'All Offerings', count: servicesData.length },
  { id: 'hair', label: 'Haircuts & Fades', count: servicesData.filter(s => s.category === 'hair').length },
  { id: 'beard', label: 'Beard & Shaves', count: servicesData.filter(s => s.category === 'beard').length },
  { id: 'waxing', label: 'Grooming & Waxing', count: servicesData.filter(s => s.category === 'waxing').length },
] as const;
