'use client'
import { useEffect } from 'react';

const ActivityCard = ({ icon, title, description, delay }) => (
  <div 
    className={`relative group animate-on-mount translate-y-8 opacity-0`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl opacity-0 
                    group-hover:opacity-100 transform group-hover:scale-[1.02] transition-all duration-300 -z-10"></div>
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg group-hover:shadow-xl 
                    transform group-hover:translate-y-[-3px] transition-all duration-300">
      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const LearningApproach = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach(el => {
      el.classList.add('translate-y-0', 'opacity-100');
    });
  }, []);

  const activities = [
    {
      icon: "🎭",
      title: "Storytelling & Drama",
      description: "Interactive storytelling sessions and role-play activities that develop language and social skills."
    },
    {
      icon: "🎶",
      title: "Rhymes & Music Time",
      description: "Fun musical activities that enhance memory, rhythm, and coordination through songs and movement."
    },
    {
      icon: "🏃",
      title: "Outdoor Play & Growth",
      description: "Safe outdoor activities that promote physical development and gross motor skills."
    },
    {
      icon: "🔢",
      title: "Basic Math & Language",
      description: "Playful introduction to numbers, shapes, letters, and basic communication skills."
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating shapes */}
        <div className="absolute top-1/4 -right-12 w-48 h-48 bg-yellow-200 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-1/3 -left-12 w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-50 animate-float-delayed"></div>
        
        {/* Stars */}
        <div className="absolute top-1/3 left-1/4 text-yellow-400 text-2xl animate-twinkle">✦</div>
        <div className="absolute bottom-1/4 right-1/3 text-purple-400 text-xl animate-twinkle-delayed">✦</div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6
                         animate-on-mount transform translate-y-8 opacity-0 transition-all duration-700">
            Learning Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Play
            </span>
          </h2>
          <p className="text-lg text-gray-700
                       animate-on-mount transform translate-y-8 opacity-0 transition-all duration-700 delay-200">
            Our play-based approach makes learning fun and memorable for your little ones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              {...activity}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                fill="currentColor" className="text-pink-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default LearningApproach; 