'use client'
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const TopicCard = ({ icon, title, description, color, delay }) => (
  <div 
    className={`topic-card relative group opacity-0 translate-y-8
                transition-all duration-700 ease-out cursor-pointer`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Card Background with Gradient */}
    <div className={`absolute -inset-2 ${color} rounded-[2rem] opacity-20 
                    group-hover:opacity-40 group-hover:scale-105 
                    transition-all duration-500 blur-lg`}></div>
    
    <div className="relative bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 
                    transform group-hover:translate-y-[-8px] group-hover:rotate-1 
                    transition-all duration-500 border-4 border-dashed border-pink-200 
                    shadow-xl overflow-hidden h-full">
      {/* Floating Icon */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 
                       rounded-2xl rotate-6 group-hover:rotate-12 
                       transition-transform duration-500"></div>
        <div className="relative bg-white rounded-2xl p-4 -rotate-6 
                       group-hover:-rotate-12 transition-transform duration-500">
          <span className="text-4xl block text-center animate-bounce-slow">{icon}</span>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-['Comic_Sans_MS'] font-bold text-center mb-4
                     bg-gradient-to-r from-pink-500 to-purple-500 
                     text-transparent bg-clip-text">{title}</h3>
      <p className="text-gray-700 text-center mb-6">{description}</p>

      {/* Updated Learn More Button with Link */}
      <div className="text-center">
        <Link href="/contact">
          <button className="px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-400 
                            text-white rounded-full font-medium 
                            transform group-hover:scale-110 transition-all duration-300
                            hover:shadow-lg">
            Learn More ✨
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const ProgressStep = ({ number, title, isActive }) => (
  <div className={`relative flex items-center ${isActive ? 'opacity-100' : 'opacity-70'}`}>
    <div className={`w-12 h-12 rounded-full flex items-center justify-center
                     ${isActive 
                       ? 'bg-gradient-to-r from-pink-500 to-purple-500' 
                       : 'bg-gradient-to-r from-blue-400 to-purple-400'}
                     text-white font-bold text-xl animate-bounce-slow
                     shadow-lg`}>
      {number}
    </div>
    <div className="ml-4">
      <p className="font-['Comic_Sans_MS'] font-bold text-gray-800">{title}</p>
    </div>
  </div>
);

const ParentTeaching = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.topic-card');
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

  const topics = [
    {
      icon: "🗣️",
      title: "Effective Communication",
      description: "Learn the art of talking and listening to your little ones with love and patience.",
      color: "bg-pink-400"
    },
    {
      icon: "🎮",
      title: "Fun Learning at Home",
      description: "Simple daily activities that make learning a joyful adventure!",
      color: "bg-purple-400"
    },
    {
      icon: "❤️",
      title: "Emotional Bonding",
      description: "Create a loving environment where your child feels safe and understood.",
      color: "bg-red-400"
    },
    {
      icon: "📱",
      title: "Screen Time Balance",
      description: "Smart ways to manage technology while keeping learning fun.",
      color: "bg-blue-400"
    },
    {
      icon: "🌟",
      title: "Positive Discipline",
      description: "Teaching good habits through love, play, and gentle guidance.",
      color: "bg-yellow-400"
    }
  ];

  return (
    <section ref={sectionRef} 
             className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 via-pink-50 to-purple-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Rainbow Arc */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200%] h-[300px]
                        bg-gradient-to-r from-red-200 via-yellow-200  to-purple-200
                        opacity-20 rounded-b-[100%]"></div>

        {/* Floating Elements */}
        {[...Array(12)].map((_, i) => (
          <div key={i}
               className="absolute animate-float-slow"
               style={{
                 top: `${Math.random() * 100}%`,
                 left: `${Math.random() * 100}%`,
                 animationDelay: `${i * 0.5}s`
               }}>
            <div className="text-3xl opacity-20">
              {['📚', '🎨', '🎭', '🎪', '🎡', '🎠'][i % 6]}
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="relative inline-block">
            <h2 className="text-5xl font-['Comic_Sans_MS'] font-bold mb-6
                          bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500
                          text-transparent bg-clip-text">
              Empowering Parents: The Joy of Learning Together!
            </h2>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-12 text-4xl animate-bounce-slow">✨</div>
            <div className="absolute -bottom-4 -right-8 text-3xl animate-bounce-slow">🌟</div>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            We believe that learning starts at home! Join us in making every moment 
            a magical learning opportunity for your little one. 🏡✨
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {topics.map((topic, index) => (
            <TopicCard
              key={index}
              {...topic}
              delay={300 + index * 100}
            />
          ))}
        </div>

        {/* Updated Progress Steps */}
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 
                        border-4 border-dashed border-pink-200 shadow-xl">
          <h3 className="text-3xl font-['Comic_Sans_MS'] font-bold text-center mb-8
                         bg-gradient-to-r from-pink-500 to-purple-500 
                         text-transparent bg-clip-text">
            Your Learning Journey
          </h3>
          <div className="grid gap-6">
            <ProgressStep number="1" title="Join our parent community" isActive={true} />
            <ProgressStep number="2" title="Access exclusive learning materials" isActive={true} />
            <ProgressStep number="3" title="Attend interactive workshops" isActive={true} />
            <ProgressStep number="4" title="Track your child's progress" isActive={true} />
          </div>
        </div>

        {/* Updated CTA Section with Link */}
        <div className="mt-20 text-center">
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 
                              text-white rounded-full text-xl font-bold
                              transform hover:scale-110 transition-all duration-300
                              hover:shadow-xl animate-bounce-slow">
              Start Your Parenting Journey Today! 🚀
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,146.53,111.31,216.6,92.83,271.15,78.45,326.09,64,383.78,56.44Z" 
                fill="currentColor" className="text-white/50"></path>
        </svg>
      </div>
    </section>
  );
};

export default ParentTeaching; 