import React from 'react';
import Link from 'next/link';

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Learning",
    description: "Smart question solving and personalized study paths powered by advanced AI algorithms"
  },
  {
    icon: "👨‍🏫",
    title: "Expert IIT-JEE Mentors",
    description: "Learn from experienced faculty members from top IITs"
  },
  {
    icon: "📚",
    title: "Free Study Resources",
    description: "Access comprehensive study materials and practice papers"
  },
  {
    icon: "❓",
    title: "24/7 Doubt Solving",
    description: "Get your doubts cleared instantly through AI and expert mentors"
  },
  {
    icon: "📝",
    title: "AI Question Papers",
    description: "Practice with dynamically generated question papers tailored to your level"
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description: "Monitor your preparation with detailed analytics and insights"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of technology and education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-start">
                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
} 