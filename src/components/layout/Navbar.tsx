import React, { useState, useEffect } from 'react';
import { BrandEmblem } from '../illustrations/BrandMotifs';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { businessData } from '../../data/business';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'The Space / About', href: '#about' },
    { label: 'Our Work', href: '#work' },
    { label: 'Find Us', href: '#location' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b-2 border-ink py-2.5 shadow-sm'
          : 'bg-white py-4 border-b border-purple-soft'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-purple-electric rounded-xl p-1"
            aria-label="Capital Barbers By Efi Home"
          >
            <BrandEmblem className="w-10 h-10 sm:w-11 sm:h-11 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col text-left">
              <span className="font-display font-extrabold text-lg sm:text-xl text-ink tracking-tight uppercase leading-none group-hover:text-purple-deep transition-colors">
                CAPITAL BARBERS
              </span>
              <span className="font-display font-bold text-xs sm:text-sm text-purple-electric tracking-widest uppercase leading-none mt-1">
                BY EFI · MANCHESTER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-display font-bold text-sm tracking-wider uppercase text-ink hover:text-purple-electric transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-electric hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={businessData.phone.telLink}
              className="hidden md:flex items-center gap-2 font-display text-sm font-bold text-ink hover:text-purple-electric transition-colors"
              aria-label={`Call ${businessData.phone.display}`}
            >
              <Phone className="w-4 h-4 text-purple-electric" />
              <span>{businessData.phone.display}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink bg-purple-electric px-5 py-2.5 font-display text-sm font-extrabold uppercase tracking-wider text-white shadow-brutal-sm transition-all duration-150 hover:bg-purple-deep hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-electric"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK YOUR CHOP</span>
            </button>
          </div>

          {/* Mobile Right Action & Hamburger */}
          <div className="flex sm:hidden items-center gap-2.5">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center rounded-xl border-2 border-ink bg-purple-electric px-3 py-1.5 font-display text-xs font-extrabold uppercase tracking-wider text-white shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5"
            >
              BOOK
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-xl border-2 border-ink bg-purple-soft p-2 text-ink focus:outline-none focus:ring-2 focus:ring-purple-electric"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b-2 border-ink bg-white px-5 pt-4 pb-6 shadow-brutal animate-slide-up">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-display text-lg font-bold uppercase tracking-wider text-ink hover:text-purple-electric py-2 border-b border-purple-pale"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href={businessData.phone.telLink}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-ink bg-purple-soft py-3 font-display text-sm font-bold text-ink"
            >
              <Phone className="w-4 h-4 text-purple-deep" />
              <span>Call: {businessData.phone.display}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-ink bg-purple-electric py-3 font-display text-base font-extrabold uppercase tracking-wider text-white shadow-brutal-sm"
            >
              <Calendar className="w-5 h-5" />
              <span>BOOK YOUR CHOP NOW</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
