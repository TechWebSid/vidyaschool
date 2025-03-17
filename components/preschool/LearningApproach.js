'use client'
import { useEffect, useRef } from 'react';

const ActivityCard = ({ icon, title, description, delay }) => (
  <div 
    className={`activity-card relative group opacity-0 translate-y-8
                transition-all duration-700 ease-out`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Background Gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 
                    rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
    {/* Main Card Content */}
    <div className="relative bg-white/95 backdrop-blur-sm rounded-[2rem] p-8 
                    transform hover:translate-y-[-12px] hover:rotate-2 transition-all duration-500
                    border-4 border-pink-100/50 shadow-xl">
      {/* Icon Circle */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2
                      bg-white rounded-full w-16 h-16 flex items-center justify-center
                      shadow-lg border-4 border-yellow-200 animate-bounce-slow">
        <span className="text-4xl">{icon}</span>
      </div>
      
      {/* Content */}
      <div className="mt-8">
        <h3 className="text-2xl font-['Comic_Sans_MS'] font-bold text-center mb-4
                       bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 
                       text-transparent bg-clip-text">{title}</h3>
        <p className="text-gray-700 text-center leading-relaxed">{description}</p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-3 top-1/2 w-6 h-6 
                      bg-yellow-200 rounded-full opacity-50 animate-float-slow"></div>
      <div className="absolute -left-3 bottom-1/4 w-4 h-4 
                      bg-pink-200 rounded-full opacity-50 animate-float-slow" 
           style={{ animationDelay: '1s' }}></div>
    </div>
  </div>
);

const LearningApproach = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Simple fade-in animation for cards
    const cards = document.querySelectorAll('.activity-card');
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

  const activities = [
    {
      icon: "🎭",
      title: "Storytelling & Drama",
      description: "Join our magical storytelling adventures where imagination comes alive!"
    },
    {
      icon: "🎶",
      title: "Music & Movement",
      description: "Dance, sing, and wiggle in our enchanted musical playground!"
    },
    {
      icon: "🏃",
      title: "Playful Learning",
      description: "Run, jump, and grow in our safe and exciting outdoor wonderland!"
    },
    {
      icon: "🔢",
      title: "Number & Letter Fun",
      description: "Make friends with numbers and letters through magical games!"
    }
  ];

  return (
    <section ref={sectionRef} 
             className="py-20 relative overflow-hidden bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Static Decorative Background */}
      <div className="absolute inset-0">
        {/* Static Floating Elements */}
        {[...Array(5)].map((_, i) => (
          <div key={i} 
               className="absolute w-40 h-40"
               style={{
                 top: `${20 + (i * 15)}%`,
                 left: `${10 + (i * 20)}%`,
               }}>
            <div className={`w-full h-full rounded-full blur-3xl opacity-20 
                           animate-float-slow bg-gradient-to-r from-pink-200 to-purple-200`}
                 style={{ animationDelay: `${i * 2}s` }}></div>
          </div>
        ))}

        {/* Static Stars */}
        {[...Array(8)].map((_, i) => (
          <div key={i}
               className="absolute text-2xl animate-pulse"
               style={{
                 top: `${10 + (i * 10)}%`,
                 left: `${5 + (i * 12)}%`,
                 animationDelay: `${i * 0.5}s`
               }}>
            ✨
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-['Comic_Sans_MS'] font-bold mb-6
                         bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 
                         text-transparent bg-clip-text animate-bounce-slow">
            Learning Through Play
          </h2>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Where every day is a new magical adventure! 🌈
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              {...activity}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                fill="currentColor" className="text-white/50"></path>
        </svg>
      </div>
    </section>
  );
};

export default LearningApproach; 