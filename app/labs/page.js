'use client'
import LabsHero from '@/components/labs/LabsHero';
import LabsContent from '@/components/labs/LabsContent';
import LabsDetailedContent from '@/components/labs/LabsDetailedContent';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LabsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <LabsHero />
      <LabsContent />
      <LabsDetailedContent />
      <Footer />
    </div>
  );
};

export default LabsPage;
