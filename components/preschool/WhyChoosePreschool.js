'use client'
import { useEffect } from 'react';

const FeatureCard = ({ icon, title, description, delay }) => (
  <div 
    className={`bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl 
                transform hover:scale-[1.02] transition-all duration-300
                animate-on-mount translate-y-8 opacity-0`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const WhyChoosePreschool = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach(el => {
      el.classList.add('translate-y-0', 'opacity-100');
    });
  }, []);

  const features = [
    {
      icon: "🎨",
      title: "Creative Learning Activities",
      description: "Engaging art, craft, and hands-on activities that spark imagination and creativity."
    },
    {
      icon: "🎵",
      title: "Music & Dance",
      description: "Early brain development through rhythm, movement, and musical exploration."
    },
    {
      icon: "🧩",
      title: "Montessori Curriculum",
      description: "Child-centered approach combining play-based learning with structured activities."
    },
    {
      icon: "🍎",
      title: "Nutritious Meals",
      description: "Healthy, balanced meals and snacks prepared in our hygienic kitchen."
    },
    {
      icon: "🤗",
      title: "Caring Teachers",
      description: "Experienced educators dedicated to nurturing your child's growth and development."
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating shapes */}
        <div className="absolute top-1/4 right-0 w-24 h-24 bg-yellow-200 rounded-full blur-xl opacity-60 animate-float"></div>
        <div className="absolute bottom-1/3 left-0 w-32 h-32 bg-pink-200 rounded-full blur-xl opacity-60 animate-float-delayed"></div>
        
        {/* Stars */}
        <div className="absolute top-1/3 left-1/4 text-purple-400 text-2xl animate-twinkle">✦</div>
        <div className="absolute bottom-1/4 right-1/3 text-pink-400 text-xl animate-twinkle-delayed">✦</div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6
                         animate-on-mount transform translate-y-8 opacity-0 transition-all duration-700">
            Why Choose Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Preschool?
            </span>
          </h2>
          <p className="text-lg text-gray-700
                       animate-on-mount transform translate-y-8 opacity-0 transition-all duration-700 delay-200">
            A nurturing environment where your child will learn, play, and grow together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>

      {/* Dotted Divider */}
      <div className="absolute bottom-0 left-0 w-full h-4 opacity-30">
        <div className="flex justify-around">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-pink-400"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePreschool; 