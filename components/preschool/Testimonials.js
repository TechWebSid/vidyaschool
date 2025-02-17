'use client'
import { useState, useEffect } from 'react';

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ⭐
      </span>
    ))}
  </div>
);

const TestimonialCard = ({ name, relation, quote, rating, image, isActive }) => (
  <div className={`transform transition-all duration-500 ${
    isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
  }`}>
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg relative">
      {/* Large Quote Mark */}
      <div className="absolute -top-4 -left-4 text-6xl text-pink-200 opacity-50 transform -rotate-12">
        "
      </div>
      
      {/* Content */}
      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-200">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-pink-500">{relation}</p>
          </div>
        </div>
        
        <StarRating rating={rating} />
        
        <p className="mt-4 text-gray-700 italic">
          "{quote}"
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      relation: "Parent of Emma, Age 4",
      quote: "My daughter LOVES coming here every day! The teachers are so kind and caring. I can see her learning and growing while having so much fun!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    },
    {
      name: "Michael Chen",
      relation: "Parent of Lucas, Age 3",
      quote: "The creative activities and play-based learning approach have helped my son become more confident and social. It's amazing to see his progress!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
      name: "Priya Patel",
      relation: "Parent of Aarav, Age 3.5",
      quote: "The perfect blend of fun and learning! The staff is exceptional, and my son has developed a real love for learning. Couldn't be happier!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
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
        <div className="absolute bottom-1/4 right-1/3 text-pink-400 text-xl animate-twinkle-delayed">✦</div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            What Parents{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Say About Us
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Join our community of happy parents and thriving children
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-2xl mx-auto relative h-[300px]">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`absolute w-full transition-all duration-500 ${
                currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <TestimonialCard {...testimonial} isActive={currentSlide === index} />
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-6 bg-pink-500' 
                  : 'bg-pink-200 hover:bg-pink-300'
              }`}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
            <div className="font-semibold text-gray-900">500+</div>
            <div className="text-sm text-gray-600">Happy Families</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-3xl mb-2">⭐</div>
            <div className="font-semibold text-gray-900">4.9/5</div>
            <div className="text-sm text-gray-600">Parent Rating</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-3xl mb-2">🏆</div>
            <div className="font-semibold text-gray-900">15+ Years</div>
            <div className="text-sm text-gray-600">Experience</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-3xl mb-2">🎨</div>
            <div className="font-semibold text-gray-900">50+</div>
            <div className="text-sm text-gray-600">Activities</div>
          </div>
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,146.53,111.31,216.6,92.83,271.15,78.45,326.09,64,383.78,56.44Z" 
            fill="#fff5f7"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials; 