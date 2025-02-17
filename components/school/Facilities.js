'use client'
import { useState, useEffect } from 'react';

const FacilityCard = ({ title, description, icon }) => (
  <div className="group">
    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full transform group-hover:scale-105">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const ImageCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative rounded-2xl overflow-hidden mb-16">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-[300px] sm:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{image.title}</h3>
                <p className="text-sm sm:text-base">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Carousel Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-white w-4'
                : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Facilities = () => {
  const facilities = [
    {
      title: "Spacious Classrooms",
      description: "Modern, well-ventilated classrooms equipped with smart boards and comfortable seating.",
      icon: "🏫"
    },
    {
      title: "Science & Computer Labs",
      description: "State-of-the-art laboratories with latest equipment for practical learning.",
      icon: "🔬"
    },
    {
      title: "Library & E-Learning",
      description: "Extensive collection of books, digital resources, and quiet study spaces.",
      icon: "📚"
    },
    {
      title: "Safe Transport",
      description: "GPS-enabled buses with trained staff ensuring safe transportation.",
      icon: "🚍"
    }
  ];

  const images = [
    {
      url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1632",
      alt: "Modern Classroom",
      title: "Smart Classrooms",
      description: "Interactive learning spaces with modern technology"
    },
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1486",
      alt: "Science Laboratory",
      title: "Advanced Laboratories",
      description: "Well-equipped labs for practical experiments"
    },
    {
      url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1470",
      alt: "Library",
      title: "Modern Library",
      description: "Extensive collection of books and digital resources"
    },
    {
      url: "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?q=80&w=1470",
      alt: "Sports Ground",
      title: "Sports Facilities",
      description: "Multiple sports facilities for physical development"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f0fdf9] to-[#f0f9ff] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-teal-200/30 to-cyan-200/30 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-200/30 to-teal-200/30 blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Facilities &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Infrastructure
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            State-of-the-art facilities designed to provide the best learning environment.
          </p>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={images} />

        {/* Facility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities; 