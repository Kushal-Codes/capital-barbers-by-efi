export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  founder: {
    name: string;
    role: string;
    bio: string;
  };
  address: {
    street: string;
    city: string;
    postcode: string;
    country: string;
    district: string;
    fullFormatted: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  phone: {
    display: string;
    raw: string;
    international: string;
    telLink: string;
  };
  email: string;
  googleMapsUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  originalWebsiteUrl: string;
  booksyUrl: string;
  ratingSummary: {
    score: number;
    maxScore: number;
    reviewCount: number;
    badgeText: string;
  };
  hours: {
    day: string;
    open: string;
    close: string;
    formatted: string;
  }[];
}

export const businessData: BusinessInfo = {
  name: "Capital Barbers By Efi",
  shortName: "Capital Barbers",
  tagline: "Excellence in Every Detail",
  heroHeadline: "EXCELLENCE IN EVERY DETAIL.\nMANCHESTER'S PREMIER BARBER SHOP.",
  heroSubheadline: "Experience exceptional service, verified 5-star craftsmanship, and seamless online booking right in Manchester.",
  founder: {
    name: "Efi",
    role: "Master Barber & Founder",
    bio: "With years of dedicated craftsmanship and hundreds of loyal clients across Manchester, Efi created Capital Barbers to elevate men's grooming beyond the ordinary. Combining meticulous shear work, razor-sharp skin fades, and traditional Turkish-style hot towel relaxation in a contemporary Manchester setting."
  },
  address: {
    street: "46 George Street",
    city: "Manchester",
    postcode: "M1 4HF",
    country: "United Kingdom",
    district: "Chinatown / Central Manchester",
    fullFormatted: "46 George Street, Manchester, M1 4HF, United Kingdom",
    coordinates: {
      lat: 53.4791388,
      lng: -2.2402386
    }
  },
  phone: {
    display: "07539 635060",
    raw: "07539635060",
    international: "+44 7539 635060",
    telLink: "tel:07539635060"
  },
  email: "capital@eficapitalbarber.com",
  googleMapsUrl: "https://www.google.com/maps/place/Capital+_Barbers+_By+Efi/@53.4791388,-2.2450022,709m/data=!3m1!1e3!4m7!3m6!1s0x487bb1b5a9190589:0xdfedc5d3ddd62ae3!8m2!3d53.4791388!4d-2.2402386",
  instagramUrl: "https://www.instagram.com/capital_barbers_by_efi/",
  instagramHandle: "@capital_barbers_by_efi",
  originalWebsiteUrl: "https://www.eficapitalbarber.com/",
  booksyUrl: "https://booksy.com",
  ratingSummary: {
    score: 4.9,
    maxScore: 5.0,
    reviewCount: 880,
    badgeText: "VERIFIED 4.9 ★ ON GOOGLE REVIEWS"
  },
  hours: [
    { day: "Monday", open: "09:00", close: "23:00", formatted: "9:00 AM – 11:00 PM" },
    { day: "Tuesday", open: "09:00", close: "23:00", formatted: "9:00 AM – 11:00 PM" },
    { day: "Wednesday", open: "09:00", close: "23:00", formatted: "9:00 AM – 11:00 PM" },
    { day: "Thursday", open: "09:00", close: "23:00", formatted: "9:00 AM – 11:00 PM" },
    { day: "Friday", open: "09:00", close: "23:00", formatted: "9:00 AM – 11:00 PM" },
    { day: "Saturday", open: "09:00", close: "23:00", formatted: "9:00 AM – 11:00 PM" },
    { day: "Sunday", open: "09:00", close: "23:00", formatted: "9:00 AM – 11:00 PM" },
  ]
};

/**
 * Returns current status of shop based on London/UK timezone
 */
export function getShopLiveStatus(): { isOpen: boolean; statusText: string; timeDetail: string } {
  try {
    const now = new Date();
    // Format to UK London time
    const ukTimeStr = now.toLocaleTimeString("en-GB", {
      timeZone: "Europe/London",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit"
    });
    const [hourStr, minStr] = ukTimeStr.split(":");
    const currentMinutes = parseInt(hourStr, 10) * 60 + parseInt(minStr, 10);
    
    // 09:00 = 540 mins, 23:00 = 1380 mins
    const openMinutes = 9 * 60;
    const closeMinutes = 23 * 60;

    if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
      return {
        isOpen: true,
        statusText: "OPEN TODAY UNTIL 11:00 PM",
        timeDetail: "Walk-ins & direct bookings welcome"
      };
    } else {
      return {
        isOpen: false,
        statusText: "OPENS TOMORROW AT 9:00 AM",
        timeDetail: "Call or message to secure your slot"
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: "OPEN 7 DAYS · 9:00 AM – 11:00 PM",
      timeDetail: "Late hours in Manchester City Centre"
    };
  }
}
