import React from 'react';

export function VisionMission() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 to-white p-8 shadow-xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-100 rounded-full -mr-20 -mt-20 opacity-50"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                <span className="text-3xl">👁️</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize IIT JEE preparation by making high-quality education accessible to every aspiring student through AI-powered personalized learning experiences.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-white p-8 shadow-xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full -mr-20 -mt-20 opacity-50"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To leverage artificial intelligence and advanced learning analytics to create adaptive learning paths that ensure every student reaches their full potential in IIT JEE preparation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 