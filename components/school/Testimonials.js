'use client'
import { useState, useEffect } from 'react';

const StarRating = ({ rating }) => (
  <div className="flex gap-1 text-yellow-400">
    {[...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ))}
  </div>
);

const TestimonialCard = ({ name, role, image, quote, rating }) => (
  <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        <StarRating rating={rating} />
      </div>
    </div>
    <p className="text-gray-700 italic">"{quote}"</p>
  </div>
);

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      quote: "The school has given my child an incredible learning experience. The teachers are dedicated and the facilities are excellent. Highly recommended!",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      quote: "We're impressed by the holistic development approach. Our child has shown remarkable improvement in both academics and extra-curricular activities.",
      rating: 5
    },
    {
      name: "Ananya Patel",
      role: "Student, Class 12",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      quote: "The school provides excellent opportunities for both academic and personal growth. The teachers are supportive and the learning environment is great.",
      rating: 5
    },
    {
      name: "Arjun Singh",
      role: "Student, Class 10",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      quote: "I love the practical approach to learning and the various activities that help us develop our skills. The school truly nurtures our talents.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f0f9ff] to-[#f0fdf9] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-200/30 to-teal-200/30 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-teal-200/30 to-cyan-200/30 blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            What{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Parents & Students
            </span>{' '}
            Say
          </h2>
          <p className="text-lg text-gray-700">
            Hear from our community about their experience with our school.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto relative">
          {/* Desktop View - Grid */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {/* Mobile View - Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-teal-600 w-4'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 