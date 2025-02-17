import React from 'react';
import SchoolHero from '../../components/school/SchoolHero';
import WhyChooseSchool from '../../components/school/WhyChooseSchool';
import AcademicCurriculum from '../../components/school/AcademicCurriculum';
import AchievementsResults from '../../components/school/AchievementsResults';
import Activities from '../../components/school/Activities';
import Facilities from '../../components/school/Facilities';
import AdmissionProcess from '../../components/school/AdmissionProcess';
import Testimonials from '../../components/school/Testimonials';
import FAQSection from '../../components/school/FAQSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'CBSE School | Vidya International School',
  description: 'Experience excellence in CBSE education with our comprehensive curriculum, expert faculty, and state-of-the-art facilities. Join our legacy of academic success.',
  keywords: 'CBSE School, Best School in India, Primary Education, Secondary Education, Senior Secondary, Quality Education',
  openGraph: {
    title: 'CBSE School | Vidya International School',
    description: 'Join our CBSE school for quality education and holistic development.',
    images: ['https://images.unsplash.com/photo-1577896851231-70ef18881754'],
  },
};

const SchoolPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0fdf9] to-[#f0f9ff]">
      <Navbar />
      <SchoolHero />
      <WhyChooseSchool />
      <AcademicCurriculum />
      <AchievementsResults />
      <Activities />
      <Facilities />
      <AdmissionProcess />
      <Testimonials />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default SchoolPage;
