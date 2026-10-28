import React from 'react';
import { BrandEmblem, RotatingIndustryMotif, HandDrawnUnderline } from '../illustrations/BrandMotifs';
import { VerifiedStamp } from '../animations/VerifiedStamp';
import { getShopLiveStatus } from '../../data/business';
import { Calendar, ArrowDown, MapPin, Star, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const liveStatus = getShopLiveStatus();

  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-12 -left-20 w-80 h-80 rounded-full bg-purple-soft/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-highlight/30 blur-3xl pointer-events-none" />

      {/* Gentle Floating Rotating Industry Motif in top corner */}
      <div className="absolute top-24 right-4 sm:right-12 hidden md:block opacity-75">
        <RotatingIndustryMotif className="w-20 h-20 lg:w-24 lg:h-24" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Verified Location & Live Hours Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-purple-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-deep shadow-brutal-sm">
            <MapPin className="w-3.5 h-3.5 text-purple-electric shrink-0" />
            <span>46 George St, Manchester M1 4HF</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-ink shadow-brutal-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-extrabold text-purple-deep">{liveStatus.statusText}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-soft bg-purple-pale px-3 py-1 text-xs font-semibold text-ink-muted">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span className="font-bold text-ink">4.9 / 5.0</span>
            <span>(Google Reviews)</span>
          </div>
        </div>

        {/* Main Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Bold Editorial Typography (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Brand Emblem Entrance Badge */}
            <div className="flex items-center gap-4">
              <div className="animate-bounce-subtle">
                <BrandEmblem className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xs sm:text-sm font-extrabold tracking-widest uppercase text-purple-electric">
                  Manchester City Centre Grooming
                </span>
                <span className="font-display text-xl sm:text-2xl font-black text-ink uppercase tracking-tight">
                  CAPITAL BARBERS BY EFI
                </span>
              </div>
            </div>

            {/* Oversized Headline */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-ink leading-[1.03] tracking-tight">
              <span className="relative inline-block">
                EXCELLENCE
                <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3" color="#F0ABFC" />
              </span>{' '}
              IN EVERY DETAIL.{' '}
              <span className="block mt-2 text-purple-deep">
                MANCHESTER’S{' '}
                <span className="relative inline-block text-purple-electric">
                  PREMIER
                  <HandDrawnUnderline className="absolute -bottom-1.5 left-0 w-full h-2.5" color="#7C3AED" />
                </span>{' '}
                BARBER SHOP.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-ink-muted leading-relaxed max-w-2xl font-normal">
              Experience exceptional service, verified 5-star craftsmanship, and seamless online booking right in Manchester. Sharp skin fades, precision beard sculpting, and authentic hot towel grooming crafted with obsessive attention to detail.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-ink bg-purple-electric px-8 py-4 font-display text-base sm:text-lg font-extrabold uppercase tracking-wider text-white shadow-brutal transition-all duration-150 hover:bg-purple-deep hover:shadow-none hover:translate-x-1 hover:translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-soft"
              >
                <Calendar className="w-5 h-5 text-highlight transition-transform group-hover:scale-110" />
                <span>BOOK YOUR CHOP</span>
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-white px-7 py-4 font-display text-base font-bold uppercase tracking-wider text-ink shadow-brutal transition-all duration-150 hover:bg-purple-soft hover:shadow-none hover:translate-x-1 hover:translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-soft"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowDown className="w-4 h-4 text-purple-electric" />
              </a>
            </div>

            {/* Verified Highlights Pills */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-purple-soft max-w-xl">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-electric shrink-0" />
                <span className="text-xs font-bold text-ink uppercase tracking-wide">
                  Standard Cuts £20
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-electric shrink-0" />
                <span className="text-xs font-bold text-ink uppercase tracking-wide">
                  Open Till 11:00 PM
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-electric shrink-0" />
                <span className="text-xs font-bold text-ink uppercase tracking-wide">
                  Walk-ins Welcome
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Artwork & Rotating Stamp (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Rotating Circular "VERIFIED MANCHESTER" Stamp */}
              <div className="absolute -top-7 -right-4 sm:-right-8 z-20">
                <VerifiedStamp className="w-28 h-28 sm:w-32 sm:h-32 drop-shadow-md" />
              </div>

              {/* Main Photo Card */}
              <div className="relative rounded-3xl border-2 border-ink bg-white p-3 shadow-brutal-xl overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-purple-soft">
                  <img
                    src="/images/real/hero_cut_real.jpg"
                    alt="Precision skin fade and grooming at Capital Barbers By Efi Manchester"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/70 via-transparent to-transparent pointer-events-none" />

                  {/* Card Bottom Floating Tag */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/30 bg-ink/80 backdrop-blur-md p-3 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-[11px] font-mono text-highlight uppercase tracking-wider">
                          Master Craftsmanship
                        </span>
                        <span className="font-display text-sm font-bold">
                          Skin Fade & Beard Sculpt
                        </span>
                      </div>
                      <span className="font-display text-xl font-extrabold text-white">
                        £20.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Small Accent Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 rounded-2xl border-2 border-ink bg-white p-3.5 shadow-brutal hidden sm:flex items-center gap-3 z-20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-soft border border-ink text-purple-deep font-extrabold font-display">
                  4.9★
                </div>
                <div>
                  <span className="block font-display text-xs font-bold text-ink uppercase">
                    Google Top Rated
                  </span>
                  <span className="text-[11px] text-ink-muted">
                    Verified Client Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
