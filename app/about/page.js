import React from 'react';
import { HeroSection } from './components/HeroSection';
import { VisionMission } from './components/VisionMission';
import { DirectorsSection } from './components/DirectorsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <VisionMission />
      <DirectorsSection />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Footer />  
    </main>
  );
}