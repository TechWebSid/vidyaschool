'use client'
import { useEffect } from 'react';
import Link from 'next/link';

const SchoolHero = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0');
      }, index * 200);
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-[#84FAB0]/10 to-[#8FD3F4]/10 blur-3xl" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-gradient-to-r from-[#8FD3F4]/10 to-[#84FAB0]/10 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pt-24 lg:pt-32 pb-12">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 space-y-6 px-4 sm:px-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              Admissions Open 2024-25
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              Shaping{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Bright Futures
              </span>{' '}
              with Quality Education
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              Experience excellence in education with our CBSE curriculum, expert teachers, and focus on holistic development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Apply for Admission
                </button>
              </Link>
              <button className="px-8 py-4 bg-gray-100 text-gray-800 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                Download Brochure
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-teal-600">30+</div>
                <div className="text-gray-600 text-sm">Years Legacy</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-teal-600">100%</div>
                <div className="text-gray-600 text-sm">Results</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-teal-600">50+</div>
                <div className="text-gray-600 text-sm">Expert Faculty</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-teal-600">1:20</div>
                <div className="text-gray-600 text-sm">Teacher Ratio</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
                alt="Students at Vidya International School"
                className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolHero; 