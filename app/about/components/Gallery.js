"use client"
import React, { useState, useEffect, useRef } from 'react';

const galleryItems = [
  { id: 1, image: "/images/gallery/img1.jpg" },
  { id: 2, image: "/images/gallery/img2.jpg" },
  { id: 3, image: "/images/gallery/img3.jpg" },
  { id: 4, image: "/images/gallery/img4.jpg" },
  { id: 5, image: "/images/gallery/img5.jpg" },
  { id: 6, image: "/images/gallery/img6.jpg" },
  { id: 7, image: "/images/gallery/img7.jpg" },
  { id: 8, image: "/images/gallery/img8.jpg" },
  { id: 9, image: "/images/gallery/img9.jpg" },
  { id: 10, image: "/images/gallery/img10.jpg" },
  { id: 11, image: "/images/gallery/img11.jpg" },
  { id: 12, image: "/images/gallery/img12.jpg" },
  { id: 13, image: "/images/gallery/img13.jpg" },
  { id: 14, image: "/images/gallery/img14.jpg" },
  { id: 15, image: "/images/gallery/img10.jpg" },
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5);
  const timeoutRef = useRef(null);
  const scrollRef = useRef(null);

  // Function to get number of visible items based on screen width
  const updateVisibleItems = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(5);
      }
    }
  };

  // Initialize visible items and add resize listener
  useEffect(() => {
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= Math.max(0, galleryItems.length - 5) ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => resetTimeout();
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? Math.max(0, galleryItems.length - 5) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex >= Math.max(0, galleryItems.length - 5) ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
        </div>

        <div className="relative overflow-hidden">
          {/* Main Gallery Slider */}
          <div className="relative w-full">
            {/* Previous Button */}
            <button 
              onClick={handlePrev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1.5 md:p-2 rounded-full shadow-lg hover:bg-white transition-all"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Gallery Container */}
            <div 
              ref={scrollRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`
              }}
            >
              {galleryItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="w-full flex-none md:w-1/3 lg:w-1/5 px-1 md:px-2"
                >
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button 
              onClick={handleNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1.5 md:p-2 rounded-full shadow-lg hover:bg-white transition-all"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-1 md:gap-2 mt-4 flex-wrap">
            {Array.from({ length: Math.ceil(galleryItems.length / visibleItems) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * visibleItems)}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / visibleItems) === index 
                    ? 'bg-gray-800 w-3 md:w-4' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 