'use client'
import { useEffect } from 'react';

const SkillCard = ({ icon, title, items }) => (
  <div className="relative group">
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 
                    transform hover:translate-y-[-8px] transition-all duration-500
                    border-2 border-purple-200 shadow-lg">
      <div className="text-3xl mb-4 animate-bounce-slow">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-600">
            <span className="text-purple-500">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const GlobalCitizens = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        {/* World Map Pattern */}
        <div className="absolute inset-0 opacity-5 bg-repeat"
             style={{ backgroundImage: "url('/world-pattern.png')" }}></div>
        
        {/* Floating Globes */}
        {['🌏', '🌍', '🌎'].map((globe, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float-slow"
            style={{
              top: `${20 + (i * 30)}%`,
              left: `${10 + (i * 40)}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {globe}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6
                         bg-gradient-to-r from-purple-500 to-pink-500 
                         text-transparent bg-clip-text">
            Preparing Global Citizens with Indian Roots
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Empowering students to excel globally while staying connected to their cultural heritage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <SkillCard 
            icon="🌟"
            title="Global Competencies"
            items={[
              "Critical Thinking",
              "Cultural Intelligence",
              "Digital Literacy",
              "Global Awareness"
            ]}
          />
          <SkillCard 
            icon="🎯"
            title="Personal Development"
            items={[
              "Leadership Skills",
              "Communication",
              "Emotional Intelligence",
              "Time Management"
            ]}
          />
          <SkillCard 
            icon="🔮"
            title="Future Readiness"
            items={[
              "Innovation Mindset",
              "Adaptability",
              "Problem Solving",
              "Entrepreneurship"
            ]}
          />
        </div>

        {/* Vision Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8
                         border-4 border-dashed border-purple-200 shadow-xl">
            <h3 className="text-2xl font-bold mb-4
                          bg-gradient-to-r from-purple-500 to-pink-500 
                          text-transparent bg-clip-text">
              Our Vision
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              To nurture a generation of mindful, responsible, and spiritually awakened 
              learners who are ready to face the global world without losing their 
              Indian identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCitizens; 