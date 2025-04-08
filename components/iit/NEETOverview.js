'use client'
import { useEffect } from 'react';

const NEETOverview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Decorative DNA Helix Animation */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-green-200 rounded-full blur-xl opacity-30 animate-float-slow"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-xl opacity-30 animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6
                         bg-gradient-to-r from-green-600 to-blue-600 
                         text-transparent bg-clip-text">
            NEET Preparation
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your Gateway to Top Medical Colleges in India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "👨‍⚕️",
              title: "MBBS",
              description: "Gateway to becoming a medical doctor"
            },
            {
              icon: "🦷",
              title: "BDS",
              description: "Path to dental surgery career"
            },
            {
              icon: "💊",
              title: "BAMS/BHMS",
              description: "Traditional medicine courses"
            },
            {
              icon: "🏆",
              title: "Success Rate",
              description: "90%+ selection in medical colleges"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 
                                      shadow-lg hover:shadow-xl transition-shadow duration-300
                                      border-2 border-green-100">
              <div className="text-4xl mb-4 animate-bounce-slow">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl
                         border-2 border-green-100">
            <h3 className="text-2xl font-bold mb-6 text-center text-green-600">
              Why Choose Our NEET Program?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Expert Faculty from Top Medical Colleges",
                "Regular Mock Tests & Assessments",
                "Personalized Doubt Clearing Sessions",
                "Comprehensive Study Material",
                "Medical Terms & Concepts Training",
                "Previous Year Question Analysis"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NEETOverview; 