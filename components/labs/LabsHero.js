'use client'
import { useEffect } from 'react';

const LabsHero = () => {
  useEffect(() => {
    // Animation logic for elements
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach(el => {
      el.classList.remove('opacity-0', 'translate-y-8');
    });
  }, []);

  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-200 rounded-full blur-xl opacity-30 animate-float-slow"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-pink-200 rounded-full blur-xl opacity-30 animate-float-slow"></div>
        
        {/* Lab-related icons floating */}
        {['🧪', '💻', '🔬', '📊', '🎯', '💡'].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float-slow"
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${5 + (i * 15)}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-mount opacity-0 translate-y-8 transition-all duration-700">
            <h1 className="text-5xl md:text-6xl font-bold mb-6
                          bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                          text-transparent bg-clip-text">
              Skill-Based Education Labs
            </h1>
            <p className="text-2xl text-gray-700 mb-8">
              Empowering the Future as per NEP 2025
            </p>
          </div>

          <div className="animate-on-mount opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl
                          border-4 border-dashed border-pink-200">
              <p className="text-xl text-gray-700 leading-relaxed">
                At Vidya Education Group, we're launching modern Skill-Based Labs 
                to prepare students for the real world, aligning with the guidelines 
                of the National Education Policy 2025 (NEP 2025).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsHero; 