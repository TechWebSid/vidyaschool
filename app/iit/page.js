import React from 'react';
// import IITHero from '../../components/iit/IITHero';
import WhyChooseIIT from '../../components/iit/WhyChooseIIT';
import CourseStructure from '../../components/iit/CourseStructure';
import ResultsSection from '../../components/iit/ResultsSection';
import BatchInfo from '../../components/iit/BatchInfo';
import StudyMaterials from '../../components/iit/StudyMaterials';
import AIMentor from '../../components/iit/AIMentor';
// import FAQSection from '../../components/iit/FAQSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import QuestionGenerator from '@/components/iit/QuestionGenerator';

import MHTCETOverview from '@/components/iit/MHTCETOverview';
import MHTCETEligibility from '@/components/iit/MHTCETEligibility';
import MHTCETSyllabus from '@/components/iit/MHTCETSyllabus';
import MHTCETPreparation from '@/components/iit/MHTCETPreparation';

import NEETOverview from '@/components/iit/NEETOverview';
import NEETPattern from '@/components/iit/NEETPattern';
import NEETSyllabus from '@/components/iit/NEETSyllabus';
import NEETStudyPlan from '@/components/iit/NEETStudyPlan';
import ExamHero from '@/components/iit/ExamHero';
import CombinedFAQSection from '@/components/iit/CombinedFAQSection';

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
      {/* <IITHero /> */}
      <ExamHero/>
      <WhyChooseIIT />
      <CourseStructure />
      <ResultsSection />
      <BatchInfo />
      <StudyMaterials />
      <AIMentor />
      <QuestionGenerator/>
      <div className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6
                         bg-gradient-to-r from-green-600 to-blue-600 
                         text-transparent bg-clip-text">
            NEET Preparation
          </h2>
          <p className="text-xl text-gray-700">
            Comprehensive coaching for medical entrance examination
          </p>
        </div>
        <NEETOverview />
        <NEETPattern />
        <NEETSyllabus />
        <NEETStudyPlan />
      </div>

      <div className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6
                         bg-gradient-to-r from-purple-600 to-pink-600 
                         text-transparent bg-clip-text">
            MHT-CET Preparation
          </h2>
          <p className="text-xl text-gray-700">
            Comprehensive coaching for Maharashtra's premier entrance exam
          </p>
        </div>
        <MHTCETOverview />
        <MHTCETEligibility />
        <MHTCETSyllabus />
        <MHTCETPreparation />
      </div>

      {/* <FAQSection /> */}
      <CombinedFAQSection/>
      <Footer />
    </div>
  );
};

export default IITPage;
