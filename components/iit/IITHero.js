'use client'
import { useEffect } from 'react';
import Link from 'next/link';

const IITHero = () => {
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-violet-200/30 to-purple-200/30 blur-3xl animate-float" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-gradient-to-r from-blue-200/30 to-cyan-200/30 blur-3xl animate-float-delayed" />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 text-violet-400 text-3xl animate-float">⚛️</div>
        <div className="absolute bottom-1/3 right-1/4 text-purple-400 text-2xl animate-float-delayed">🧮</div>
        <div className="absolute top-1/3 right-1/3 text-blue-400 text-2xl animate-twinkle">✦</div>
        <div className="absolute bottom-1/4 left-1/3 text-cyan-400 text-xl animate-twinkle-delayed">✦</div>
        
        {/* Formula Elements */}
        <div className="absolute top-20 left-10 text-violet-800/40 text-2xl font-mono rotate-[-15deg] animate-float">E = mc²</div>
        <div className="absolute bottom-32 right-20 text-purple-800/40 text-2xl font-mono rotate-[15deg] animate-float-delayed">F = ma</div>
        <div className="absolute top-40 right-40 text-blue-800/40 text-2xl font-mono rotate-[-5deg] animate-float">∫ dx</div>
        
        {/* Additional Physics/Math Formulas */}
        <div className="absolute top-60 left-1/4 text-indigo-800/40 text-2xl font-mono rotate-[10deg] animate-float-delayed">v = u + at</div>
        <div className="absolute bottom-40 left-1/3 text-violet-800/40 text-2xl font-mono rotate-[-8deg] animate-float">PV = nRT</div>
        <div className="absolute top-1/3 right-1/4 text-purple-800/40 text-2xl font-mono rotate-[12deg] animate-float-delayed">Σ F = 0</div>
      </div>

      {/* Main Content */}
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pt-24 lg:pt-32 pb-12">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 space-y-6 px-4 sm:px-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 text-sm font-medium animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
              Admissions Open 2024-25
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-bold leading-tight animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              Your Journey to{' '}
              <div className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                  IIT Excellence
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
              </div>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              Join the league of extraordinary minds with our expert faculty, structured learning approach, and proven success record.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              <Link href="/contact">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-violet-600 transition-transform duration-300 group-hover:translate-x-full"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    <span>Join Now</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="group px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold border-2 border-transparent hover:border-violet-200 transition-all duration-300">
                  <span className="flex items-center justify-center gap-2">
                    <span>Get Free Counselling</span>
                    <span className="transform group-hover:rotate-45 transition-transform">↗</span>
                  </span>
                </button>
              </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="relative">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">500+</div>
                  <div className="text-gray-600 text-sm">IIT Selections</div>
                </div>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="relative">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">98%</div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="relative">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">15+</div>
                  <div className="text-gray-600 text-sm">Years Legacy</div>
                </div>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="relative">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">50+</div>
                  <div className="text-gray-600 text-sm">Expert Mentors</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop"
                  alt="Students preparing for IIT-JEE"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                
                {/* Floating Achievement Badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl mb-1">🏆</div>
                  <div className="text-sm font-semibold text-gray-900">Top Rated</div>
                  <div className="text-xs text-gray-600">IIT-JEE Coaching</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-violet-200 to-purple-200 rounded-full blur-xl opacity-60 animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-xl opacity-60 animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,146.53,111.31,216.6,92.83,271.15,78.45,326.09,64,383.78,56.44Z" 
            fill="#f8f1ff"
            className="opacity-50"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default IITHero; 