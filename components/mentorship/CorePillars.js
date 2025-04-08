'use client'
import { useEffect } from 'react';

const PillarCard = ({ icon, title, description, color, delay }) => (
  <div 
    className={`pillar-card relative group opacity-0 translate-y-8
                transition-all duration-700 ease-out`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Card Background */}
    <div className={`absolute -inset-2 ${color} rounded-[2rem] opacity-20 
                    group-hover:opacity-40 group-hover:scale-105 
                    transition-all duration-500 blur-lg`}></div>

    <div className="relative bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 
                    transform hover:translate-y-[-8px] hover:rotate-1 
                    transition-all duration-500 border-4 border-dashed border-purple-200 
                    shadow-xl h-full">
      {/* Icon Container */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 
                       rounded-full rotate-6 group-hover:rotate-12 
                       transition-transform duration-500"></div>
        <div className="relative bg-white rounded-full p-4 -rotate-6 
                       group-hover:-rotate-12 transition-transform duration-500">
          <span className="text-4xl block text-center animate-bounce-slow">{icon}</span>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-center mb-4
                     bg-gradient-to-r from-purple-500 to-pink-500 
                     text-transparent bg-clip-text">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  </div>
);

const CorePillars = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.pillar-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Parents",
      description: "Monthly counseling sessions for smart parenting, understanding child psychology, and building strong emotional bonds.",
      color: "bg-purple-400"
    },
    {
      icon: "👩‍🏫",
      title: "Teachers",
      description: "Regular training and wellness workshops to transform educators into mentors and spiritual guides.",
      color: "bg-pink-400"
    },
    {
      icon: "🧑‍🎓",
      title: "Students",
      description: "Comprehensive counseling for academic excellence, emotional intelligence, and spiritual growth.",
      color: "bg-orange-400"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12
                       bg-gradient-to-r from-purple-500 to-pink-500 
                       text-transparent bg-clip-text">
          Our Three Core Pillars
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={index}
              {...pillar}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars; 