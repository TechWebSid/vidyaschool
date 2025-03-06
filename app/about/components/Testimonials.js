import React from 'react';

const testimonials = [
  {
    name: "Rahul Sharma",
    image: "/student-1.jpg",
    rating: 5,
    text: "The AI-powered learning system helped me understand complex concepts easily. Cleared IIT-JEE with AIR under 1000!",
    institute: "IIT Delhi"
  },
  {
    name: "Priya Patel",
    image: "/student-2.jpg",
    rating: 5,
    text: "The personalized study plan and doubt solving feature were game-changers in my preparation.",
    institute: "IIT Bombay"
  },
  {
    name: "Amit Kumar",
    image: "/student-3.jpg",
    rating: 5,
    text: "Expert mentors and AI-generated practice papers helped me improve my weak areas significantly.",
    institute: "IIT Madras"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our students who cracked IIT-JEE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gray-200 mb-4"></div> {/* Placeholder */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-blue-600">{testimonial.institute}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 