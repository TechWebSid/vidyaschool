'use client'
import { useState } from 'react';

const GalleryImage = ({ src, alt, category }) => (
  <div className="relative group overflow-hidden rounded-xl">
    <img
      src={src}
      alt={alt}
      className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
      decoding="async"
      width="400"
      height="256"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-semibold">{alt}</p>
        <p className="text-white/80 text-sm">{category}</p>
      </div>
    </div>
  </div>
);

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const images = [
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      alt: "Fun Learning Activities",
      category: "kindergarten",
    },
    {
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
      alt: "CBSE Classroom",
      category: "cbse",
    },
    {
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45",
      alt: "IIT JEE Coaching",
      category: "iit",
    },
    {
      src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
      alt: "Sports Activities",
      category: "cbse",
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      alt: "Art & Craft",
      category: "kindergarten",
    },
    {
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
      alt: "Science Lab",
      category: "iit",
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'kindergarten', label: 'Kindergarten' },
    { id: 'cbse', label: 'CBSE' },
    { id: 'iit', label: 'IIT JEE' },
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery & Campus Life</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Take a visual journey through our vibrant campus life and state-of-the-art facilities.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <GalleryImage key={index} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 