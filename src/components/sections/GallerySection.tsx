import React, { useState, useEffect } from 'react';
import { galleryData, GalleryItem } from '../../data/gallery';
import { HandDrawnUnderline } from '../illustrations/BrandMotifs';
import { Camera, X, ChevronLeft, ChevronRight, ExternalLink, Calendar, Info } from 'lucide-react';

interface GallerySectionProps {
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') setActiveItem(null);
      if (e.key === 'ArrowRight') {
        const currIdx = galleryData.findIndex((g) => g.id === activeItem.id);
        const nextIdx = (currIdx + 1) % galleryData.length;
        setActiveItem(galleryData[nextIdx]);
      }
      if (e.key === 'ArrowLeft') {
        const currIdx = galleryData.findIndex((g) => g.id === activeItem.id);
        const prevIdx = (currIdx - 1 + galleryData.length) % galleryData.length;
        setActiveItem(galleryData[prevIdx]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem]);

  return (
    <section id="work" className="py-20 sm:py-28 bg-purple-pale/40 border-y-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-purple-deep shadow-brutal-sm mb-4">
            <Camera className="w-3.5 h-3.5 text-purple-electric" />
            <span>Curated Portfolio</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-ink tracking-tight uppercase leading-none">
            THE PROOF IS{' '}
            <span className="relative inline-block text-purple-deep">
              IN THE WORK.
              <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3" color="#7C3AED" />
            </span>
          </h2>

          <p className="mt-4 text-lg text-ink-muted">
            Real craftsmanship from our barber chairs at 46 George Street. Documented cuts, fades, and traditional grooming.
          </p>
        </div>

        {/* Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryData.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border-2 border-ink bg-white p-3 shadow-brutal transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brutal-purple"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveItem(item);
                }
              }}
              aria-label={`View ${item.title}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-purple-soft">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge: Category */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="rounded-full border border-ink bg-highlight px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-ink shadow-brutal-sm">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-display text-lg sm:text-xl font-bold leading-tight drop-shadow-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-purple-soft/90 line-clamp-2 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-[11px] font-mono text-highlight pt-2 border-t border-white/20">
                    <span className="flex items-center gap-1">
                      <Info className="w-3 h-3" /> Click to view details
                    </span>
                    <span className="underline decoration-highlight">Expand ↗</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Source Documentation Note */}
        <div className="mt-12 text-center text-xs text-ink-light flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-purple-electric shrink-0" />
          <span>
            Every portfolio entry is documented from verified business channels and public styling records.
          </span>
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/85 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-brutal-xl grid grid-cols-1 md:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 rounded-full border-2 border-ink bg-white p-2 text-ink hover:bg-highlight transition-colors focus:outline-none focus:ring-2 focus:ring-purple-electric"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Image Container */}
            <div className="md:col-span-7 bg-purple-deep flex items-center justify-center p-2 relative overflow-hidden aspect-square md:aspect-auto">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl"
              />

              {/* Prev / Next controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currIdx = galleryData.findIndex((g) => g.id === activeItem.id);
                  const prevIdx = (currIdx - 1 + galleryData.length) % galleryData.length;
                  setActiveItem(galleryData[prevIdx]);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-ink/70 p-2 text-white hover:bg-purple-electric transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currIdx = galleryData.findIndex((g) => g.id === activeItem.id);
                  const nextIdx = (currIdx + 1) % galleryData.length;
                  setActiveItem(galleryData[nextIdx]);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-ink/70 p-2 text-white hover:bg-purple-electric transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right: Craft Details & Source Documentation */}
            <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white overflow-y-auto">
              <div className="space-y-4">
                <span className="inline-block rounded-full border border-ink bg-purple-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-deep">
                  {activeItem.category}
                </span>

                <h3 className="font-display text-2xl font-bold text-ink leading-tight">
                  {activeItem.title}
                </h3>

                <p className="text-sm text-ink-muted leading-relaxed">
                  {activeItem.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-purple-pale border border-purple-soft px-2.5 py-1 text-xs font-mono text-purple-deep"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Verified Source Documentation */}
                <div className="rounded-xl border border-purple-soft bg-purple-pale/50 p-3.5 text-xs text-ink-muted space-y-1 mt-4">
                  <div className="font-bold text-ink uppercase tracking-wide flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-purple-electric" />
                    <span>Verified Source Reference</span>
                  </div>
                  <p className="text-ink-light">Source: {activeItem.sourceName}</p>
                  <a
                    href={activeItem.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-purple-electric font-semibold hover:underline"
                  >
                    <span>View Public Source Listing</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Lightbox Booking CTA */}
              <div className="pt-6 mt-6 border-t border-purple-soft">
                <button
                  onClick={() => {
                    setActiveItem(null);
                    onOpenBooking();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink bg-purple-electric px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-white shadow-brutal-sm hover:bg-purple-deep transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Service</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
