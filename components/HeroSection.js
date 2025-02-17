'use client'
import { useEffect } from 'react';
import CTAButton from './CTAButton';

const HeroSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0');
      }, index * 200);
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#fff8f0] to-[#fff5f5]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-pink-200/30 to-purple-200/30 blur-3xl animate-float" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-gradient-to-r from-blue-200/30 to-cyan-200/30 blur-3xl animate-float-delayed" />
        
        {/* Stars */}
        <div className="absolute top-1/4 left-1/3 text-yellow-400 text-2xl animate-twinkle">✦</div>
        <div className="absolute bottom-1/3 right-1/4 text-pink-400 text-xl animate-twinkle-delayed">✦</div>
        
        {/* Additional Decorative Elements */}
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-200/20 to-orange-200/20 blur-2xl animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full bg-gradient-to-r from-teal-200/20 to-blue-200/20 blur-2xl animate-float-delayed" />
      </div>

      {/* Main Content */}
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pt-24 lg:pt-32 pb-12">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 space-y-6 px-4 sm:px-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 text-sm font-medium animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
              Excellence in Education
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl text-black sm:text-5xl lg:text-6xl font-bold leading-tight animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                Vidya
              </span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                International
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              Where excellence meets innovation. From nurturing young minds in our kindergarten to preparing future leaders through our CBSE curriculum and IIT-JEE coaching.
            </p>

            <div className="flex flex-col gap-4 animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              <CTAButton 
                href="/preschool" 
                color="kindergarten"
                icon="🎨"
              >
                Discover Vidya Kids
              </CTAButton>
              
              <CTAButton 
                href="/school" 
                color="school"
                icon="📚"
              >
                Explore CBSE Program
              </CTAButton>
              
              <CTAButton 
                href="/iit" 
                color="coaching"
                icon="🎯"
              >
                Join IIT-JEE Academy
              </CTAButton>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">15+</div>
                <div className="text-gray-600 text-sm">Years Legacy</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">5000+</div>
                <div className="text-gray-600 text-sm">Students</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">100+</div>
                <div className="text-gray-600 text-sm">Expert Faculty</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">98%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop"
                alt="Students at Vidya International School"
                className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Floating Achievement Badge */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl mb-1">🏆</div>
                <div className="text-sm font-semibold text-gray-900">Top Rated</div>
                <div className="text-xs text-gray-600">Institution</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,146.53,111.31,216.6,92.83,271.15,78.45,326.09,64,383.78,56.44Z" 
            fill="#fff"
            className="opacity-50"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection; 