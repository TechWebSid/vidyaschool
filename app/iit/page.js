import React from 'react';
import IITHero from '../../components/iit/IITHero';
import WhyChooseIIT from '../../components/iit/WhyChooseIIT';
import CourseStructure from '../../components/iit/CourseStructure';
import ResultsSection from '../../components/iit/ResultsSection';
import BatchInfo from '../../components/iit/BatchInfo';
import StudyMaterials from '../../components/iit/StudyMaterials';
import AIMentor from '../../components/iit/AIMentor';
import FAQSection from '../../components/iit/FAQSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import QuestionGenerator from '@/components/iit/QuestionGenerator';



export const metadata = {
  title: 'IIT-JEE Coaching | Vidya International School',
  description: 'Premier IIT-JEE coaching with 98% success rate, expert faculty, and comprehensive study materials. Join our 500+ IIT selections legacy.',
  keywords: 'IIT JEE Coaching, JEE Advanced Preparation, Best IIT Coaching, IIT JEE Study Material, JEE Main Coaching',
  openGraph: {
    title: 'IIT-JEE Coaching | Vidya International School',
    description: 'Join our premier IIT-JEE coaching program with proven success rate and expert mentorship.',
    images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'],
  },
};

const IITPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f1ff] to-[#fff1f9]">
        <Navbar />
      <IITHero />
      <WhyChooseIIT />
      <CourseStructure />
      <ResultsSection />
      <BatchInfo />
      <StudyMaterials />
      <AIMentor />
      <QuestionGenerator/>
      <FAQSection />
      <Footer />
    </div>
  );
};

export default IITPage;
