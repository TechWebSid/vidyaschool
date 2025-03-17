'use client'
import { useEffect, useRef } from 'react';

const FeatureCard = ({ icon, title, description, delay, color }) => (
  <div 
    className={`feature-card relative group opacity-0 translate-y-8
                transition-all duration-700 ease-out`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Playful shape behind card */}
    <div className={`absolute -inset-2 ${color} rounded-[3rem] rotate-3 
                    opacity-20 group-hover:opacity-100 group-hover:rotate-6 
                    transition-all duration-500 blur-lg`}></div>
    
    {/* Main Card */}
    <div className="relative bg-white rounded-[2rem] p-8 h-full
                    transform hover:translate-y-[-15px] hover:rotate-[-2deg] 
                    transition-all duration-500 shadow-xl
                    border-4 border-dashed border-pink-200">
      {/* Static Decorative Elements */}
      <div className="absolute -top-6 -right-6 w-12 h-12">
        <div className="w-full h-full bg-yellow-200 rounded-full blur-sm opacity-70 animate-bounce-slow"></div>
      </div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8">
        <div className="w-full h-full bg-pink-200 rounded-full blur-sm opacity-70 animate-bounce-slow"></div>
      </div>

      {/* Icon Container */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 
                        rounded-full blur-lg opacity-50 group-hover:opacity-100 
                        transition-opacity duration-500"></div>
        <div className="relative bg-white rounded-full w-24 h-24 mx-auto
                        flex items-center justify-center border-4 border-yellow-200
                        group-hover:scale-110 group-hover:rotate-12 
                        transition-all duration-500 shadow-lg">
          <span className="text-5xl animate-bounce-slow">{icon}</span>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-center mb-4 font-['Comic_Sans_MS']
                     bg-gradient-to-r from-pink-500 to-purple-500 
                     text-transparent bg-clip-text">{title}</h3>
      <p className="text-gray-700 text-center leading-relaxed">{description}</p>

      {/* Static Decorative Bottom */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2
                      flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} 
               className="w-2 h-2 rounded-full bg-pink-300 animate-bounce-slow"
               style={{ animationDelay: `${i * 0.2}s` }}></div>
        ))}
      </div>
    </div>
  </div>
);

const WhyChoosePreschool = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Simple fade-in animation for cards
    const cards = document.querySelectorAll('.feature-card');
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

  const features = [
    {
      icon: "🎨",
      title: "Creative Learning Activities",
      description: "Unleash your child's inner artist through magical art adventures!",
      color: "bg-pink-400"
    },
    {
      icon: "🎵",
      title: "Music & Dance",
      description: "Watch them twirl and sing in our musical wonderland!",
      color: "bg-purple-400"
    },
    {
      icon: "🧩",
      title: "Montessori Magic",
      description: "Discover learning treasures in our enchanted Montessori garden!",
      color: "bg-yellow-400"
    },
    {
      icon: "🍎",
      title: "Yummy Adventures",
      description: "Healthy treats that make mealtime a delicious journey!",
      color: "bg-green-400"
    },
    {
      icon: "🤗",
      title: "Caring Fairy Teachers",
      description: "Our magical teachers sprinkle love and learning everywhere!",
      color: "bg-blue-400"
    }
  ];

  return (
    <section ref={sectionRef} 
             className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 via-pink-50 to-purple-50">
      {/* Static Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rainbow Arc */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200%] h-[300px]
                        bg-gradient-to-r from-red-200 via-yellow-200 via-to-purple-200
                        opacity-20 rounded-b-[100%]"></div>

        {/* Static Clouds */}
        {[...Array(6)].map((_, i) => (
          <div key={i}
               className="absolute w-24 h-24"
               style={{
                 top: `${15 + (i * 10)}%`,
                 left: `${10 + (i * 15)}%`,
               }}>
            <div className="w-full h-full bg-white rounded-full blur-xl opacity-60 animate-float-slow"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="relative inline-block">
            <h2 className="text-5xl sm:text-6xl font-['Comic_Sans_MS'] font-bold mb-8
                          bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500
                          text-transparent bg-clip-text
                          animate-bounce-slow">
              Our Magical World
            </h2>
            {/* Static Stars */}
            <div className="absolute -top-8 -left-12 text-4xl animate-spin-slow">✨</div>
            <div className="absolute -bottom-4 -right-8 text-3xl animate-spin-slow">✨</div>
          </div>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Step into a wonderland where learning feels like magic! ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>

      {/* Static Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-16 
                      bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-200 
                      opacity-30"></div>
    </section>
  );
};

export default WhyChoosePreschool; 