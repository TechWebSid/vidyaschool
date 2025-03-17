'use client'
import { useState, useEffect, useRef } from 'react';

const FacilityCard = ({ icon, title, description, color }) => (
  <div className="facility-card relative group">
    {/* Playful Background Shape */}
    <div className={`absolute -inset-2 ${color} rounded-[2rem] opacity-20 
                    group-hover:opacity-40 group-hover:scale-105 transition-all duration-500`}></div>
    
    <div className="relative bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 
                    transform hover:translate-y-[-8px] hover:rotate-1 transition-all duration-500
                    border-4 border-dotted border-pink-200 shadow-xl">
      {/* Floating Icon Container */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 
                       rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
        <div className="relative bg-white rounded-xl p-4 -rotate-6 group-hover:-rotate-12 
                       transition-transform duration-500 shadow-lg">
          <span className="text-4xl block text-center">{icon}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-['Comic_Sans_MS'] font-bold text-center mb-3
                     bg-gradient-to-r from-pink-500 to-purple-500 
                     text-transparent bg-clip-text">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  </div>
);

const GalleryImage = ({ src, alt, delay }) => (
  <div className="gallery-image relative group rounded-[2rem] overflow-hidden
                  opacity-0 translate-y-8 transition-all duration-700 ease-out"
       style={{ transitionDelay: `${delay}ms` }}>
    {/* Playful Border */}
    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 
                    p-1 rounded-[2rem] opacity-70 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 bg-white rounded-[2rem]"></div>
    </div>
    
    <div className="relative p-1">
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover rounded-[1.8rem]
                   transform group-hover:scale-110 transition-transform duration-500"
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/80 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      rounded-[1.8rem] flex items-end justify-center p-6">
        <div className="text-white text-center transform translate-y-4 
                       group-hover:translate-y-0 transition-transform duration-300">
          <p className="font-['Comic_Sans_MS'] font-bold text-lg mb-2">{alt}</p>
          <span className="text-2xl">✨</span>
        </div>
      </div>
    </div>
  </div>
);

const Facilities = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const images = document.querySelectorAll('.gallery-image');
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

    images.forEach(image => observer.observe(image));
    return () => observer.disconnect();
  }, []);

  const facilities = [
    {
      icon: "🎢",
      title: "Magic Playground",
      description: "A wonderland of safe play equipment where adventures come to life!",
      color: "bg-yellow-400"
    },
    {
      icon: "🍎",
      title: "Yummy Corner",
      description: "Where healthy meets tasty in our sparkly clean kitchen!",
      color: "bg-red-400"
    },
    {
      icon: "📚",
      title: "Story Castle",
      description: "A cozy kingdom filled with books and imagination!",
      color: "bg-blue-400"
    }
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1567057419565-4349c49d8a04",
      alt: "Rainbow Classroom"
    },
    {
      src: "https://images.unsplash.com/photo-1576877138403-8ec2f82cb1f3",
      alt: "Adventure Playground"
    },
    {
      src: "https://images.unsplash.com/photo-1544032527-042957c6f7ce",
      alt: "Story Time Corner"
    },
    {
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
      alt: "Creative Space"
    }
  ];

  return (
    <section ref={sectionRef} 
             className="py-20 relative overflow-hidden bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        {/* Floating Shapes */}
        {[...Array(8)].map((_, i) => (
          <div key={i}
               className="absolute w-16 h-16"
               style={{
                 top: `${10 + (i * 10)}%`,
                 left: `${5 + (i * 12)}%`,
                 transform: `rotate(${i * 45}deg)`,
               }}>
            <div className="w-full h-full bg-gradient-to-r from-pink-200 to-purple-200 
                           rounded-lg opacity-30 animate-float-slow"
                 style={{ animationDelay: `${i * 1}s` }}></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="relative inline-block">
            <h2 className="text-5xl font-['Comic_Sans_MS'] font-bold mb-6
                          bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500
                          text-transparent bg-clip-text">
              Our Magical Spaces
            </h2>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-12 text-4xl animate-bounce-slow">🌟</div>
            <div className="absolute -bottom-4 -right-8 text-3xl animate-bounce-slow">✨</div>
          </div>
          <p className="text-2xl text-gray-700">
            Step into a world of wonder and discovery! 🎨
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {images.map((image, index) => (
            <GalleryImage key={index} {...image} delay={300 + index * 100} />
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>
      </div>

      {/* Playful Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                fill="currentColor" className="text-white/50"></path>
        </svg>
      </div>
    </section>
  );
};

export default Facilities; 