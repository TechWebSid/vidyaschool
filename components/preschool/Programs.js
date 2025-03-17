'use client'
import { useEffect, useRef } from 'react';

const ProgramCard = ({ icon, title, ageGroup, description, delay, color }) => (
  <div 
    className={`program-card relative group opacity-0 translate-y-8
                transition-all duration-700 ease-out`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Floating Background Elements */}
    <div className={`absolute -inset-4 ${color} rounded-[3rem] opacity-20 
                    group-hover:opacity-40 group-hover:blur-xl transition-all duration-500`}></div>
    
    {/* Main Card */}
    <div className="relative h-full bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 
                    transform hover:translate-y-[-8px] hover:rotate-2 transition-all duration-500
                    border-4 border-dashed border-pink-200 shadow-xl overflow-hidden">
      {/* Decorative Corner Elements */}
      <div className="absolute -top-8 -right-8 w-16 h-16 bg-yellow-200 rounded-full 
                    opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-pink-200 rounded-full 
                    opacity-30 group-hover:scale-150 transition-transform duration-500"></div>

      {/* Icon Container */}
      <div className="relative mb-6">
        <div className="w-20 h-20 mx-auto bg-white rounded-2xl rotate-45 
                       border-4 border-yellow-200 shadow-lg
                       group-hover:rotate-[225deg] transition-transform duration-500">
          <div className="absolute inset-0 flex items-center justify-center -rotate-45
                          group-hover:rotate-[-225deg] transition-transform duration-500">
            <span className="text-5xl">{icon}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="text-2xl font-['Comic_Sans_MS'] font-bold mb-2
                       bg-gradient-to-r from-pink-500 to-purple-500 
                       text-transparent bg-clip-text">{title}</h3>
        <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r 
                       from-pink-200 to-purple-200 text-purple-700 
                       font-semibold mb-4">{ageGroup}</div>
        <p className="text-gray-700">{description}</p>
      </div>

      {/* Interactive Button */}
      <div className="mt-6 text-center">
        <button className="relative px-6 py-2 rounded-full overflow-hidden
                          group-hover:shadow-lg transition-shadow duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 
                          group-hover:animate-shine"></div>
          <span className="relative text-white font-medium">Explore Program ✨</span>
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 -right-2 w-4 h-4 
                      bg-yellow-200 rounded-full opacity-50 animate-float-slow"></div>
      <div className="absolute bottom-1/4 -left-2 w-3 h-3 
                      bg-pink-200 rounded-full opacity-50 animate-float-slow"></div>
    </div>
  </div>
);

const Programs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.program-card');
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

  const programs = [
    {
      icon: "🍼",
      title: "Tiny Explorers",
      ageGroup: "1.5 – 2.5 Years",
      description: "A magical journey of discovery through sensory play and first friendships!",
      color: "bg-pink-400"
    },
    {
      icon: "🎨",
      title: "Creative Cubs",
      ageGroup: "2.5 – 3.5 Years",
      description: "Where imagination soars through art, music, and wonderful adventures!",
      color: "bg-purple-400"
    },
    {
      icon: "📖",
      title: "Wonder Kids",
      ageGroup: "3.5 – 5 Years",
      description: "Preparing for big school with fun learning and exciting discoveries!",
      color: "bg-yellow-400"
    }
  ];

  return (
    <section ref={sectionRef} 
             className="py-20 relative overflow-hidden bg-gradient-to-b from-blue-50 via-pink-50 to-purple-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Rainbow Arc */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200%] h-[300px]
                        bg-gradient-to-r from-red-200 via-yellow-200 to-purple-200
                        opacity-20 rounded-b-[100%]"></div>

        {/* Static Clouds */}
        {[...Array(6)].map((_, i) => (
          <div key={i}
               className="absolute w-24 h-24"
               style={{
                 top: `${20 + (i * 15)}%`,
                 left: `${10 + (i * 15)}%`,
               }}>
            <div className="w-full h-full bg-white rounded-full blur-xl opacity-60 animate-float-slow"
                 style={{ animationDelay: `${i * 2}s` }}></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl font-['Comic_Sans_MS'] font-bold
                          bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500
                          text-transparent bg-clip-text">
              Our Magical Programs
            </h2>
            {/* Decorative Stars */}
            <div className="absolute -top-8 -left-12 text-4xl animate-spin-slow">✨</div>
            <div className="absolute -bottom-4 -right-8 text-3xl animate-spin-slow">✨</div>
          </div>
          <p className="text-2xl text-gray-700">
            Choose the perfect adventure for your little star! 🌟
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              {...program}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>

      {/* Playful Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-24 
                      bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-200 
                      opacity-20"></div>
    </section>
  );
};

export default Programs; 