import React from 'react';
import { BrandEmblem, ManchesterBeeMotif } from '../illustrations/BrandMotifs';
import { businessData } from '../../data/business';
import { Phone, MapPin, Clock, Instagram, ArrowUp, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-ink bg-purple-deep text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BrandEmblem className="w-12 h-12" />
              <div>
                <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-white leading-tight">
                  CAPITAL BARBERS
                </h3>
                <span className="font-display text-xs font-bold text-highlight tracking-widest uppercase">
                  BY EFI · MANCHESTER
                </span>
              </div>
            </div>
            <p className="text-sm text-purple-soft/80 leading-relaxed">
              Excellence in every detail. Manchester's premier destination for precision skin fades, beard sculpting, and authentic hot towel grooming.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-purple-soft font-semibold">
              <ManchesterBeeMotif className="w-5 h-5 text-highlight" />
              <span>Proudly Barbering in Manchester City Centre</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div>
            <h4 className="font-display text-base font-extrabold uppercase tracking-wider text-highlight mb-4 border-b border-purple-electric/40 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-purple-soft/90 font-medium">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Signature Services & Offerings
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  The Space & Master Barber Efi
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  The Proof Is In The Work (Portfolio)
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Google 4.9 ★ Client Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location & Contact Details
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Availability */}
          <div>
            <h4 className="font-display text-base font-extrabold uppercase tracking-wider text-highlight mb-4 border-b border-purple-electric/40 pb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-highlight" />
              <span>Opening Hours</span>
            </h4>
            <div className="space-y-2 text-sm text-purple-soft/90">
              <div className="flex justify-between items-center py-1 border-b border-purple-electric/20">
                <span className="font-semibold text-white">Monday – Sunday</span>
                <span className="font-display font-bold text-highlight">9:00 AM – 11:00 PM</span>
              </div>
              <p className="text-xs text-purple-soft/70 pt-2 leading-relaxed">
                Open 7 days a week with convenient late-evening appointments in Chinatown / Central Manchester.
              </p>
            </div>
          </div>

          {/* Col 4: Location & Direct Contact */}
          <div>
            <h4 className="font-display text-base font-extrabold uppercase tracking-wider text-highlight mb-4 border-b border-purple-electric/40 pb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-highlight" />
              <span>Contact & Visit</span>
            </h4>
            <address className="not-italic space-y-3 text-sm text-purple-soft/90">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                <span>46 George Street, Manchester, M1 4HF, United Kingdom</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-highlight shrink-0" />
                <a
                  href={businessData.phone.telLink}
                  className="font-display font-bold text-white hover:text-highlight transition-colors"
                >
                  {businessData.phone.display}
                </a>
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={businessData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-highlight hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={businessData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-highlight hover:underline"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>{businessData.instagramHandle}</span>
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-electric/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-soft/60">
          <div>
            © {new Date().getFullYear()} Capital Barbers By Efi. All rights reserved. 46 George Street, Manchester M1 4HF.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-lg border border-purple-electric/40 bg-purple-electric/20 px-3 py-1.5 text-xs font-bold text-highlight hover:bg-purple-electric hover:text-white transition-all"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
