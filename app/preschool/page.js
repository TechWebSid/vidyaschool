import React from 'react';
import PreschoolHero from '../../components/preschool/PreschoolHero';
import WhyChoosePreschool from '../../components/preschool/WhyChoosePreschool';
import LearningApproach from '../../components/preschool/LearningApproach';
import Programs from '../../components/preschool/Programs';
import Facilities from '../../components/preschool/Facilities';
import Testimonials from '../../components/preschool/Testimonials';
import AdmissionProcess from '../../components/preschool/AdmissionProcess';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Preschool & Kindergarten | Vidya International School',
  description: 'A fun-filled, nurturing environment for your child\'s first learning steps. Join our creative preschool program with experienced teachers and play-based learning.',
  keywords: 'Preschool, Kindergarten, Early Education, Play-based Learning, Montessori, Child Care',
  openGraph: {
    title: 'Preschool & Kindergarten | Vidya International School',
    description: 'Where little minds grow & shine! Join our creative preschool program.',
    images: ['https://images.unsplash.com/photo-1587654780291-39c9404d746b'],
  },
};

const PreschoolPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff5f7] to-[#fff0f6]">
      <Navbar />
      <PreschoolHero />
      <WhyChoosePreschool />
      <LearningApproach />
      <Programs />
      <Facilities />
      <Testimonials />
      <AdmissionProcess />
      <Footer />
    </div>
  );
};

export default PreschoolPage;
