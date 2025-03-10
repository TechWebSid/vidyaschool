import React from 'react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="relative bg-[#f0faf9] w-full">
      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* Badge */}
        <div className="inline-block mb-8">
          <span className="bg-teal-100/50 text-teal-800 text-sm font-medium px-4 py-1 rounded-full">
            About Us
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Nurturing </span>
              <span className="text-teal-600">Excellence</span>
              <br />
              <span className="text-gray-900">Through Innovation</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl">
              At Vidya International, we blend traditional wisdom with cutting-edge technology 
              to create an educational experience that prepares students for tomorrow's challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                  Our Programs
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white text-teal-600 px-8 py-3 rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors">
                  Meet Our Team
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
              <div>
                <div className="text-4xl font-bold text-teal-600">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600">5000+</div>
                <div className="text-gray-600">Alumni Network</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600">100+</div>
                <div className="text-gray-600">Expert Mentors</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-transparent rounded-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Modern learning environment with students collaborating"
              className="rounded-3xl shadow-2xl object-cover w-full h-[600px]"
            />
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
               
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:20px_20px] -z-10"></div>
    </div>
  );
}