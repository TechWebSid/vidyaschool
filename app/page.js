import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import Institutions from '../components/Institutions'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import Admissions from '../components/Admissions'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export const metadata = {
  title: 'Vidya International School - Excellence in Education',
  description: 'Top-rated school in India offering kindergarten, CBSE curriculum, and IIT-JEE coaching. Join our community of achievers with 15+ years of academic excellence.',
  keywords: 'Vidya International School, CBSE School, IIT-JEE Coaching, Best School in India, Kindergarten',
  openGraph: {
    title: 'Vidya International School - Excellence in Education',
    description: 'Top-rated school in India offering kindergarten, CBSE curriculum, and IIT-JEE coaching.',
    images: ['https://images.unsplash.com/photo-1577896851231-70ef18881754'],
  },
}

const page = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
        <HeroSection />
        <AboutUs />
        <Institutions />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <Admissions />
        <Contact />
        <Footer />
       
      </main>
    </div>
  )
}

export default page