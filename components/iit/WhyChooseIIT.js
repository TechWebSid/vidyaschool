'use client'
import { useEffect } from 'react';

const FeatureCard = ({ icon, title, description, delay = 0 }) => (
  <div 
    className="group animate-on-mount translate-y-8 opacity-0 transition-all duration-700"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="relative bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full transform group-hover:scale-[1.02] overflow-hidden">
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon Container */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white text-3xl transform group-hover:rotate-6 transition-transform duration-300">
          {icon}
        </div>
        <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 opacity-20 blur-lg group-hover:scale-150 transition-transform duration-300"></div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-700">{description}</p>
      
      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500/0 via-purple-500/20 to-violet-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  </div>
);

const WhyChooseIIT = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach(el => {
      el.classList.add('translate-y-0', 'opacity-100');
    });
  }, []);

  const features = [
    {
      icon: "👨‍🏫",
      title: "Expert IIT Alumni Mentors",
      description: "Learn from experienced IIT graduates who understand the journey and challenges of JEE preparation."
    },
    {
      icon: "🎯",
      title: "Proven Teaching Methods",
      description: "Our unique concept-based approach ensures deep understanding rather than mere memorization."
    },
    {
      icon: "📝",
      title: "Comprehensive Testing",
      description: "Regular mock tests, detailed analysis, and personalized improvement strategies for better results."
    },
    {
      icon: "👥",
      title: "Personalized Attention",
      description: "Small batch sizes ensuring individual attention and doubt resolution for every student."
    },
    {
      icon: "🤖",
      title: "AI-Powered Learning",
      description: "Advanced analytics and adaptive learning technology to identify and improve weak areas."
    },
    {
      icon: "📊",
      title: "Performance Tracking",
      description: "Real-time progress monitoring and detailed reports to keep you on track for success."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f1ff] to-[#fff1f9] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Blobs */}
        <div className="absolute top-0 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-violet-200/30 to-fuchsia-200/30 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-purple-200/30 to-blue-200/30 blur-3xl animate-float-delayed" />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 text-violet-400 text-2xl animate-float">∑</div>
        <div className="absolute bottom-1/3 right-1/4 text-purple-400 text-2xl animate-float-delayed">π</div>
        <div className="absolute top-1/3 right-1/3 text-blue-400 text-2xl animate-twinkle">∞</div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
            Why Choose Our{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                IIT-JEE Program
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg text-gray-700 animate-on-mount opacity-0 translate-y-8 transition-all duration-700 delay-200">
            Experience excellence in IIT-JEE preparation with our comprehensive coaching program designed for success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={300 + index * 100} />
          ))}
        </div>

        {/* Recognition Banner */}
        <div className="mt-16 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
          <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white text-4xl transform group-hover:rotate-12 transition-transform duration-300">
                  🏆
                </div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 opacity-20 blur-lg"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Excellence in IIT-JEE Coaching</h3>
                <p className="text-lg text-gray-700">
                  Ranked among the top 10 IIT-JEE coaching institutes with consistent results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseIIT; 