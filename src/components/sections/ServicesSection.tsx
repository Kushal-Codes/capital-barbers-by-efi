import React, { useState } from 'react';
import { servicesData, serviceCategories, ServiceCategory, ServiceItem } from '../../data/services';
import { ServiceCard } from '../services/ServiceCard';
import { HandDrawnUnderline } from '../illustrations/BrandMotifs';
import { businessData } from '../../data/business';
import { Phone, Sparkles, Scissors, ShieldCheck, ChevronDown, ChevronUp, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (service?: ServiceItem) => void;
}

const INITIAL_VISIBLE_COUNT = 4;
const LOAD_INCREMENT = 4;

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT);

  const filteredServices = selectedCategory === 'all'
    ? servicesData
    : servicesData.filter((s) => s.category === selectedCategory);

  const handleCategoryChange = (catId: ServiceCategory) => {
    setSelectedCategory(catId);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_INCREMENT, filteredServices.length));
  };

  const handleShowAll = () => {
    setVisibleCount(filteredServices.length);
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
    const elem = document.getElementById('services');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayedServices = filteredServices.slice(0, visibleCount);
  const hasMore = visibleCount < filteredServices.length;
  const isExpanded = visibleCount >= filteredServices.length && filteredServices.length > INITIAL_VISIBLE_COUNT;

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-canvas">
      {/* Decorative accent spots */}
      <div className="absolute top-10 right-0 w-72 h-72 rounded-full bg-purple-soft/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 h-72 rounded-full bg-purple-pale/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-purple-soft px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-purple-deep shadow-brutal-sm mb-4">
            <Scissors className="w-3.5 h-3.5 text-purple-electric" />
            <span>Manchester City Centre Price List</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-ink tracking-tight uppercase leading-none">
            SIGNATURE SERVICES{' '}
            <span className="relative inline-block text-purple-deep">
              & OFFERINGS
              <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3" color="#F0ABFC" />
            </span>
          </h2>

          <p className="mt-4 text-lg sm:text-xl font-medium text-ink-muted">
            Pick your service. We’ll take care of the rest.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {serviceCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id as ServiceCategory)}
                className={`flex items-center gap-2 rounded-xl border-2 border-ink px-4 sm:px-5 py-2.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-150 ${
                  isActive
                    ? 'bg-purple-deep text-white shadow-brutal translate-x-0.5 translate-y-0.5'
                    : 'bg-white text-ink shadow-brutal-sm hover:bg-purple-soft/60 hover:-translate-y-0.5'
                }`}
                aria-pressed={isActive}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-extrabold ${
                    isActive ? 'bg-highlight text-ink' : 'bg-purple-soft text-purple-deep'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid (starts with initial 4 offerings) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {displayedServices.map((service) => (
            <div key={service.id} className="animate-fade-in">
              <ServiceCard
                service={service}
                onBook={(svc) => onOpenBooking(svc)}
              />
            </div>
          ))}
        </div>

        {/* Load More / Progressive Expansion Control Bar */}
        {(hasMore || isExpanded) && (
          <div className="mb-16 flex flex-col items-center justify-center gap-4 p-4 rounded-3xl border-2 border-dashed border-purple-electric/40 bg-purple-pale/40 max-w-xl mx-auto">
            {/* Progress indicator */}
            <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-purple-deep">
              <Layers className="w-4 h-4 text-purple-electric" />
              <span>
                Showing {displayedServices.length} of {filteredServices.length} Offerings
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
              {hasMore && (
                <>
                  <button
                    onClick={handleLoadMore}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-purple-electric px-6 py-3.5 font-display text-sm font-extrabold uppercase tracking-wider text-white shadow-brutal transition-all duration-150 hover:bg-purple-deep hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1"
                  >
                    <span>Load More Services (+{Math.min(LOAD_INCREMENT, filteredServices.length - visibleCount)})</span>
                    <ChevronDown className="w-4 h-4 animate-bounce-subtle" />
                  </button>

                  <button
                    onClick={handleShowAll}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-white px-5 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-ink shadow-brutal-sm hover:bg-purple-soft transition-all"
                  >
                    <span>View All ({filteredServices.length})</span>
                  </button>
                </>
              )}

              {isExpanded && (
                <button
                  onClick={handleShowLess}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-white px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-ink shadow-brutal-sm hover:bg-purple-soft transition-all"
                >
                  <span>Show Less (Top {INITIAL_VISIBLE_COUNT})</span>
                  <ChevronUp className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Feature Banner: Direct Booking Guarantee */}
        <div className="rounded-3xl border-2 border-ink bg-gradient-to-r from-purple-deep via-purple-electric to-purple-deep p-6 sm:p-10 text-white shadow-brutal-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-highlight">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Double Booking Guarantee</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold">
                Want immediate confirmation or have a question?
              </h3>
              <p className="text-sm sm:text-base text-purple-soft/90 max-w-xl">
                Appointments are managed directly with master barber Efi to ensure dedicated chair time and zero waiting. Open 7 days a week until 11:00 PM.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={businessData.phone.telLink}
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-white px-6 py-3.5 font-display text-sm font-extrabold uppercase tracking-wider text-ink shadow-brutal-sm hover:bg-highlight hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <Phone className="w-4 h-4 text-purple-deep" />
                <span>Call {businessData.phone.display}</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-highlight px-6 py-3.5 font-display text-sm font-extrabold uppercase tracking-wider text-ink shadow-brutal-sm hover:bg-white hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <Sparkles className="w-4 h-4 text-purple-deep" />
                <span>Book Any Service</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
