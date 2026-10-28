import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { BrandInterlude } from '../components/sections/BrandInterlude';
import { ServicesSection } from '../components/sections/ServicesSection';
import { GallerySection } from '../components/sections/GallerySection';
import { AboutStorySection } from '../components/sections/AboutStorySection';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { LocationContactSection } from '../components/sections/LocationContactSection';
import { Footer } from '../components/layout/Footer';
import { StickyBookingBar } from '../components/layout/StickyBookingBar';
import { BookingModal } from '../components/services/BookingModal';
import { ServiceItem } from '../data/services';

export const HomePage: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (service?: ServiceItem) => {
    setSelectedService(service || null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-ink flex flex-col font-body selection:bg-purple-electric selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* Animated Brand Marquee Interlude */}
        <BrandInterlude />

        {/* Signature Services & Offerings */}
        <ServicesSection onOpenBooking={(svc) => handleOpenBooking(svc)} />

        {/* Real Work Portfolio Gallery */}
        <GallerySection onOpenBooking={() => handleOpenBooking()} />

        {/* The Space & Master Barber Efi */}
        <AboutStorySection onOpenBooking={() => handleOpenBooking()} />

        {/* 4.9 ★ Customer Reviews & Social Proof */}
        <ReviewsSection />

        {/* Location, Contact & Live Business Info */}
        <LocationContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Booking Bar */}
      <StickyBookingBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedService={selectedService}
      />
    </div>
  );
};
