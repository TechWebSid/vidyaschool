'use client'
import { useEffect } from 'react';

const MentorshipHero = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach(el => {
      el.classList.remove('opacity-0', 'translate-y-8');
    });
  }, []);

  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        {/* Spiritual Symbols */}
        {['🕉️', '☮️', '🕯️', '🎭', '🧘‍♀️', '📿'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float-slow"
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${5 + (i * 15)}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {symbol}
          </div>
        ))}

        {/* Glowing Orbs */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-pink-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
            <h1 className="text-5xl md:text-6xl font-bold mb-6
                          bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 
                          text-transparent bg-clip-text">
              Holistic Counseling & Spiritual Growth
            </h1>
            <p className="text-2xl text-gray-700 mb-8">
              Empowering Students, Enlightening Parents, Enabling Teachers
            </p>
          </div>

          <div className="animate-on-mount opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl
                          border-4 border-dashed border-purple-200">
              <p className="text-xl text-gray-700 leading-relaxed">
                At Vidya Education Group, we believe that true success depends on the 
                harmony between three core pillars — students, parents, and teachers. 
                Our comprehensive counseling ecosystem ensures academic excellence, 
                emotional well-being, and moral grounding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipHero; 