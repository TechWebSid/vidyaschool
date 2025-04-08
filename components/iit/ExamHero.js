'use client'
import { useEffect } from 'react';
import Link from 'next/link';

const ExamHero = () => {
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
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-violet-200/30 to-green-200/30 blur-3xl animate-float" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 blur-3xl animate-float-delayed" />
        
        {/* Floating Elements - Combined symbols for all exams */}
        <div className="absolute top-1/4 left-1/4 text-3xl animate-float">⚛️</div>
        <div className="absolute bottom-1/3 right-1/4 text-2xl animate-float-delayed">🧬</div>
        <div className="absolute top-1/3 right-1/3 text-2xl animate-twinkle">🔬</div>
        <div className="absolute bottom-1/4 left-1/3 text-xl animate-twinkle-delayed">⚕️</div>
        
        {/* Formula Elements - Mixed formulas */}
        <div className="absolute top-20 left-10 text-violet-800/40 text-2xl font-mono rotate-[-15deg] animate-float">E = mc²</div>
        <div className="absolute bottom-32 right-20 text-green-800/40 text-2xl font-mono rotate-[15deg] animate-float-delayed">DNA → RNA</div>
        <div className="absolute top-40 right-40 text-blue-800/40 text-2xl font-mono rotate-[-5deg] animate-float">∫ dx</div>
        <div className="absolute top-60 left-1/4 text-purple-800/40 text-2xl font-mono rotate-[10deg] animate-float-delayed">H₂O</div>
      </div>

      {/* Main Content */}
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pt-24 lg:pt-32 pb-12">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 space-y-6 px-4 sm:px-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-green-100 text-violet-800 text-sm font-medium animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
              Admissions Open 2024-25
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-bold leading-tight animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              Your Path to{' '}
              <div className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-green-600 to-purple-600">
                  Academic Excellence
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-600 via-green-600 to-purple-600 rounded-full"></div>
              </div>
            </h1>

            {/* Exam Types */}
            <div className="flex flex-wrap gap-4 animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              {[
                { name: 'IIT-JEE', icon: '⚛️', color: 'violet' },
                { name: 'NEET', icon: '🧬', color: 'green' },
                { name: 'MHT-CET', icon: '🎯', color: 'purple' }
              ].map((exam) => (
                <div key={exam.name} 
                     className={`flex items-center gap-2 px-4 py-2 rounded-full 
                                bg-${exam.color}-50 text-${exam.color}-600 
                                border border-${exam.color}-200`}>
                  <span>{exam.icon}</span>
                  <span className="font-medium">{exam.name}</span>
                </div>
              ))}
            </div>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              Comprehensive coaching for Engineering, Medical & State-level entrance examinations with expert faculty and proven success record.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
              <Link href="/contact">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 via-green-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden">
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
              <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-green-600">1000+</div>
                <div className="text-gray-600 text-sm">Selections</div>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-purple-600">98%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">15+</div>
                <div className="text-gray-600 text-sm">Years Legacy</div>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">100+</div>
                <div className="text-gray-600 text-sm">Expert Mentors</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Grid */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop"
                  alt="Students preparing"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-violet-600">IIT-JEE</h3>
                  <p className="text-sm text-gray-600">Engineering Dreams</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                  alt="Medical studies"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-green-600">NEET</h3>
                  <p className="text-sm text-gray-600">Medical Aspirations</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
                  alt="State level exam prep"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-purple-600">MHT-CET</h3>
                  <p className="text-sm text-gray-600">State Engineering & Medical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamHero; 