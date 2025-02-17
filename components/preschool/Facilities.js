'use client'
import { useState, useEffect } from 'react';

const FacilityCard = ({ icon, title, description }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl 
                  transform hover:translate-y-[-4px] transition-all duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const GalleryImage = ({ src, alt }) => (
  <div className="relative group overflow-hidden rounded-3xl">
    <img
      src={src}
      alt={alt}
      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-medium">{alt}</p>
      </div>
    </div>
  </div>
);

const Facilities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const facilities = [
    {
      icon: "🎢",
      title: "Outdoor Playground",
      description: "Safe and engaging play areas with age-appropriate equipment for physical development."
    },
    {
      icon: "🍎",
      title: "Nutritious Meals",
      description: "Balanced, healthy meals and snacks prepared in our hygienic kitchen."
    },
    {
      icon: "📚",
      title: "Library & Learning Spaces",
      description: "Cozy reading corners and interactive learning areas for exploration."
    }
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1567057419565-4349c49d8a04",
      alt: "Colorful Classroom Environment"
    },
    {
      src: "https://images.unsplash.com/photo-1576877138403-8ec2f82cb1f3",
      alt: "Outdoor Play Area"
    },
    {
      src: "https://images.unsplash.com/photo-1544032527-042957c6f7ce",
      alt: "Library & Reading Corner"
    },
    {
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
      alt: "Activity Room"
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-12 w-48 h-48 bg-yellow-200 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-1/3 -left-12 w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-50 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Facilities & {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Safe Environment
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            A secure and stimulating space designed for your child's growth and happiness
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {images.map((image, index) => (
            <GalleryImage key={index} {...image} />
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>
      </div>

      {/* Curved Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" 
            fill="#fff5f7"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Facilities; 