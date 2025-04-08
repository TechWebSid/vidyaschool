'use client'
import { useEffect } from 'react';

const ProgramCard = ({ title, items, icon, color }) => (
  <div className="relative group">
    <div className={`absolute -inset-2 ${color} rounded-[2rem] opacity-20 
                    group-hover:opacity-40 group-hover:scale-105 
                    transition-all duration-500 blur-lg`}></div>
    
    <div className="relative bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 
                    transform hover:translate-y-[-8px] transition-all duration-500
                    border-4 border-dashed border-purple-200 shadow-xl h-full">
      <div className="text-4xl mb-6 text-center animate-bounce-slow">{icon}</div>
      <h3 className="text-2xl font-bold text-center mb-6
                     bg-gradient-to-r from-purple-500 to-pink-500 
                     text-transparent bg-clip-text">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-purple-500 mt-1">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const CounselingPrograms = () => {
  const programs = [
    {
      title: "Parent Counseling",
      icon: "👨‍👩‍👧‍👦",
      color: "bg-purple-400",
      items: [
        "Smart parenting techniques in the digital age",
        "Understanding your child's psychology",
        "Developing strong emotional bonds",
        "Practical tools for discipline and motivation"
      ]
    },
    {
      title: "Teacher Development",
      icon: "👩‍🏫",
      color: "bg-pink-400",
      items: [
        "Monthly wellness & mindset development",
        "Pedagogical training sessions",
        "Student-centric strategy building",
        "Collaboration with counselors"
      ]
    },
    {
      title: "Student Counseling",
      icon: "🧑‍🎓",
      color: "bg-orange-400",
      items: [
        "Time management and study skills",
        "Emotional intelligence development",
        "Career guidance and talent identification",
        "Stress relief through yoga and meditation"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {['🎯', '💫', '🌟', '💭'].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-3xl animate-float-slow"
            style={{
              top: `${20 + (i * 25)}%`,
              left: `${5 + (i * 30)}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6
                         bg-gradient-to-r from-purple-500 to-pink-500 
                         text-transparent bg-clip-text">
            Comprehensive Counseling Programs
          </h2>
          <p className="text-xl text-gray-700">
            Building a strong foundation for holistic development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounselingPrograms; 