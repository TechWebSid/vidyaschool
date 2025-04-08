'use client'
import { useEffect } from 'react';

const MHTCETOverview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-30 animate-float-slow"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-pink-200 rounded-full blur-xl opacity-30 animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6
                         bg-gradient-to-r from-purple-600 to-pink-600 
                         text-transparent bg-clip-text">
            MHT-CET Preparation
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your Gateway to Top Engineering & Pharmacy Colleges in Maharashtra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🎓",
              title: "Engineering",
              description: "Comprehensive preparation for B.Tech admissions"
            },
            {
              icon: "💊",
              title: "Pharmacy",
              description: "Expert guidance for B.Pharm aspirants"
            },
            {
              icon: "🎯",
              title: "Success Rate",
              description: "95% students secure admissions in top colleges"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 
                                      shadow-lg hover:shadow-xl transition-shadow duration-300
                                      border-2 border-purple-100">
              <div className="text-4xl mb-4 animate-bounce-slow">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MHTCETOverview; 