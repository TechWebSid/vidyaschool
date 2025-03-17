'use client'
import { useState, useEffect, useRef } from 'react';

const StarRating = ({ rating }) => (
  <div className="flex gap-1 justify-center">
    {[...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-2xl transform hover:scale-125 transition-transform duration-300 
                   ${index < rating ? 'animate-bounce-stagger' : 'opacity-50'}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {index < rating ? '⭐' : '☆'}
      </span>
    ))}
  </div>
);

const TestimonialCard = ({ name, relation, quote, rating, image, isActive }) => (
  <div className={`transform transition-all duration-700 ${
    isActive ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'
  }`}>
    <div className="relative bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 
                    border-4 border-dashed border-pink-200 shadow-xl">
      {/* Decorative Elements */}
      <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-200 
                      rounded-full blur-lg opacity-60 animate-pulse"></div>
      <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-pink-200 
                      rounded-full blur-lg opacity-60 animate-pulse"></div>

      {/* Quote Marks */}
      <div className="absolute -top-4 -left-4 text-6xl text-pink-400 opacity-50 
                      transform -rotate-12 animate-float-slow">❝</div>
      <div className="absolute -bottom-8 -right-4 text-6xl text-purple-400 opacity-50 
                      transform rotate-12 animate-float-slow">❞</div>
      
      {/* Content */}
      <div className="relative">
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 
                          rounded-full animate-spin-slow"></div>
            <div className="relative p-1">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                <img src={image} alt={name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-['Comic_Sans_MS'] font-bold text-xl text-gray-900">{name}</h3>
            <p className="text-pink-500 font-medium">{relation}</p>
          </div>
        </div>
        
        <StarRating rating={rating} />
        
        <p className="mt-6 text-gray-700 italic text-center text-lg leading-relaxed">
          {quote}
        </p>

        {/* Decorative Bottom */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} 
                 className="w-2 h-2 rounded-full bg-pink-400 animate-bounce-slow"
                 style={{ animationDelay: `${i * 0.2}s` }}></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const TrustIndicator = ({ emoji, number, text }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 
                    rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 
                    transform group-hover:translate-y-[-4px] transition-transform duration-300">
      <div className="text-4xl mb-3 animate-bounce-slow">{emoji}</div>
      <div className="font-['Comic_Sans_MS'] font-bold text-xl text-gray-900">{number}</div>
      <div className="text-sm text-gray-600">{text}</div>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    autoPlayRef.current = () => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Priya Sharma",
      relation: "Mother of Aarav, Age 4",
      quote: "हमारा बच्चा यहाँ आकर बहुत खुश है! Teachers बहुत प्यार से पढ़ाती हैं और हर दिन नई activities करवाती हैं। ✨",
      rating: 5,
      image: "https://images.unsplash.com/photo-1614289371518-722f2615943d?w=150"
    },
    {
      name: "Rajesh Patel",
      relation: "Father of Ananya, Age 3",
      quote: "Best preschool in the area! My daughter has learned so many new things - from English to Music to Dance. The cultural values they teach are amazing! 🌟",
      rating: 5,
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150"
    },
    {
      name: "Meera Gupta",
      relation: "Mother of Vihaan, Age 3.5",
      quote: "बच्चों को संस्कार के साथ-साथ modern education भी मिलती है। Staff बहुत cooperative है और school का environment बहुत अच्छा है! 🎨",
      rating: 5,
      image: "https://images.unsplash.com/photo-1592085549692-e36d4316fdc6?w=150"
    },
    {
      name: "Amit & Neha Verma",
      relation: "Parents of Ishaan, Age 4",
      quote: "The perfect blend of Indian values and modern education! Our son loves the festival celebrations and cultural activities here! 🪔",
      rating: 5,
      image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=150"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 via-pink-50 to-purple-50">
      {/* Magical Background */}
      <div className="absolute inset-0">
        {/* Rainbow Arc */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200%] h-[300px]
                        bg-gradient-to-r from-red-200 via-yellow-200 to-purple-200
                        opacity-20 rounded-b-[100%]"></div>

        {/* Floating Elements */}
        {[...Array(10)].map((_, i) => (
          <div key={i}
               className="absolute w-8 h-8"
               style={{
                 top: `${10 + (i * 8)}%`,
                 left: `${5 + (i * 9)}%`,
                 transform: `rotate(${i * 36}deg)`,
               }}>
            <div className={`w-full h-full rounded-full opacity-20 animate-float-slow
                            ${i % 2 === 0 ? 'bg-pink-300' : 'bg-purple-300'}`}
                 style={{ animationDelay: `${i * 0.5}s` }}></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="relative inline-block">
            <h2 className="text-5xl font-['Comic_Sans_MS'] font-bold mb-6
                          bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500
                          text-transparent bg-clip-text">
              Happy Parents, Happy Kids!
            </h2>
            {/* Decorative Stars */}
            <div className="absolute -top-8 -left-12 text-4xl animate-spin-slow">✨</div>
            <div className="absolute -bottom-4 -right-8 text-3xl animate-spin-slow">✨</div>
          </div>
          <p className="text-2xl text-gray-700">
            See what our magical community has to say! 🌈
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-2xl mx-auto relative">
          {testimonials.map((testimonial, index) => (
            <div key={index} 
                 className={`transition-all duration-700 
                            ${currentSlide === index ? 'relative opacity-100 z-10' : 'absolute inset-0 opacity-0 z-0'}`}>
              <TestimonialCard {...testimonial} isActive={currentSlide === index} />
            </div>
          ))}

          {/* Carousel Controls */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                           ${currentSlide === index 
                             ? 'w-8 bg-gradient-to-r from-pink-500 to-purple-500' 
                             : 'bg-pink-200 hover:bg-pink-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <TrustIndicator emoji="��‍👩‍👧‍👦" number="1000+" text="Happy Families" />
          <TrustIndicator emoji="⭐" number="4.9/5" text="Parent Rating" />
          <TrustIndicator emoji="🏆" number="15+ Years" text="Experience" />
          <TrustIndicator emoji="🎨" number="100+" text="Cultural & Fun Activities" />
        </div>
      </div>

      {/* Playful Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,146.53,111.31,216.6,92.83,271.15,78.45,326.09,64,383.78,56.44Z" 
                fill="currentColor" className="text-white/50"></path>
        </svg>
      </div>
    </section>
  );
};

// Add this CSS for Hindi text support
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
  
  .hindi-text {
    font-family: 'Poppins', sans-serif;
  }
`;

export default Testimonials; 