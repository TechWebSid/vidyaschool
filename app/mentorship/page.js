'use client'
import MentorshipHero from '@/components/mentorship/MentorshipHero';
import CorePillars from '@/components/mentorship/CorePillars';
import CounselingPrograms from '@/components/mentorship/CounselingPrograms';
import SpiritualGrowth from '@/components/mentorship/SpiritualGrowth';
import GlobalCitizens from '@/components/mentorship/GlobalCitizens';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Mentorship() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-pink-50 to-purple-50">
      <Navbar />
      <MentorshipHero />
      <CorePillars />
      <CounselingPrograms />
      <SpiritualGrowth />
      <GlobalCitizens />
      <Footer />
    </div>
  );
}
