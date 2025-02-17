'use client'
import { useState } from 'react';

const TopperCard = ({ name, rank, year, image, quote }) => (
  <div className="group">
    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-violet-100">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
            🏆
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-violet-600 font-semibold">AIR {rank}</p>
        <p className="text-sm text-gray-600 mb-4">JEE Advanced {year}</p>
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-3 rounded-xl">
          <p className="text-gray-700 italic text-sm">&ldquo;{quote}&rdquo;</p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialCard = ({ content, author, batch }) => (
  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
    <p className="text-gray-700 italic mb-4">&ldquo;{content}&rdquo;</p>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white text-xl">
        {author[0]}
      </div>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-600">{batch}</p>
      </div>
    </div>
  </div>
);

const ResultsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const toppers = [
    {
      name: "Rahul Sharma",
      rank: "145",
      year: "2023",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      quote: "The structured approach and mentorship made all the difference."
    },
    {
      name: "Priya Patel",
      rank: "256",
      year: "2023",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      quote: "Regular mock tests helped me improve consistently."
    },
    {
      name: "Amit Kumar",
      rank: "489",
      year: "2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      quote: "The faculty's guidance was invaluable in my JEE journey."
    }
  ];

  const testimonials = [
    {
      content: "The problem-solving techniques taught here transformed my approach to JEE questions.",
      author: "Sneha Gupta",
      batch: "JEE Advanced 2023"
    },
    {
      content: "Regular doubt clearing sessions and personal attention helped me overcome my weaknesses.",
      author: "Arjun Singh",
      batch: "JEE Advanced 2023"
    },
    {
      content: "The study material and mock tests were perfectly aligned with actual JEE pattern.",
      author: "Riya Shah",
      batch: "JEE Advanced 2023"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f8f1ff] to-[#fff1f9] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-violet-200/30 to-fuchsia-200/30 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-purple-200/30 to-blue-200/30 blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
              Success Stories
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Join the ranks of our successful students who cracked JEE with flying colors.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">98%</div>
            <div className="text-gray-700">Selection Rate</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">500+</div>
            <div className="text-gray-700">IITians</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">50+</div>
            <div className="text-gray-700">Top 1000 Ranks</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">15+</div>
            <div className="text-gray-700">Years of Excellence</div>
          </div>
        </div>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {toppers.map((topper, index) => (
            <TopperCard key={index} {...topper} />
          ))}
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <TestimonialCard {...testimonials[activeTestimonial]} />
          </div>
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'bg-violet-500 w-6'
                    : 'bg-violet-200 hover:bg-violet-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection; 