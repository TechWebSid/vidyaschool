'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const MaterialCard = ({ title, description, features, icon, category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group animate-on-mount opacity-0 translate-y-8 transition-all duration-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Hover Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-2xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Content */}
        <div className="relative">
          {/* Icon with Category Badge */}
          <div className="relative mb-6 inline-block">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white text-3xl transform group-hover:rotate-6 transition-transform duration-300">
              {icon}
            </div>
            <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-white shadow-md text-sm font-medium text-violet-600">
              {category}
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-700 mb-6">{description}</p>

          {/* Features List */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 transform group-hover:translate-x-2 transition-transform duration-300"
              >
                <span className="text-violet-500 mt-1">✓</span>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Preview Button */}
          <button className="mt-8 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-600 font-semibold hover:from-violet-500 hover:to-purple-500 hover:text-white transition-all duration-300">
            Preview Material
          </button>
        </div>
      </div>
    </div>
  );
};

const StudyMaterials = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0');
      }, index * 200);
    });
  }, []);

  const materials = [
    {
      title: "Comprehensive Study Modules",
      description: "Expertly crafted study materials covering entire JEE syllabus",
      icon: "📚",
      category: "Core",
      features: [
        "Chapter-wise notes and summaries",
        "Detailed theory explanations",
        "Solved examples with steps",
        "Quick revision guides"
      ]
    },
    {
      title: "Practice Question Bank",
      description: "Extensive collection of problems for thorough practice",
      icon: "✏️",
      category: "Practice",
      features: [
        "Topic-wise practice problems",
        "Previous year questions",
        "Difficulty-based segregation",
        "Step-by-step solutions"
      ]
    },
    {
      title: "Digital Learning Resources",
      description: "Interactive digital content for enhanced learning",
      icon: "💻",
      category: "Digital",
      features: [
        "Video lectures and tutorials",
        "Interactive simulations",
        "Virtual lab experiments",
        "Mobile learning app access"
      ]
    },
    {
      title: "Test Series Package",
      description: "Comprehensive assessment and evaluation system",
      icon: "📝",
      category: "Tests",
      features: [
        "Chapter-wise tests",
        "Full-length mock tests",
        "Performance analytics",
        "Detailed solutions"
      ]
    },
    {
      title: "Formula Sheets & Flashcards",
      description: "Quick reference materials for effective revision",
      icon: "🎯",
      category: "Quick Ref",
      features: [
        "Important formulas compilation",
        "Concept flashcards",
        "Tips and tricks cards",
        "Memory aids and mnemonics"
      ]
    },
    {
      title: "Doubt Resolution Guides",
      description: "Comprehensive support for clearing doubts",
      icon: "❓",
      category: "Support",
      features: [
        "Common doubts compilation",
        "Expert solutions",
        "Video explanations",
        "24/7 doubt support"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f1ff] to-[#fff1f9] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-violet-200/30 to-fuchsia-200/30 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-purple-200/30 to-blue-200/30 blur-3xl animate-float-delayed" />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 text-violet-400/20 text-4xl font-mono rotate-12 animate-float">∫</div>
        <div className="absolute bottom-1/3 right-1/4 text-purple-400/20 text-4xl font-mono -rotate-12 animate-float-delayed">Σ</div>
        <div className="absolute top-1/3 right-1/3 text-blue-400/20 text-4xl font-mono rotate-45 animate-twinkle">×</div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                Study Materials
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Access our meticulously crafted study materials designed for JEE success
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {materials.map((material, index) => (
            <MaterialCard key={index} {...material} />
          ))}
        </div>

        {/* Digital Access Banner */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-xl"></div>
          <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white text-3xl">
                  📱
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">24/7 Digital Access</h3>
                  <p className="text-gray-700">Study anytime, anywhere with our digital platform</p>
                </div>
              </div>
              <Link href="/contact">
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-shadow duration-300">
                  Access Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterials; 