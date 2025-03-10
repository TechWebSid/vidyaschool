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
  const timeoutRef = useRef(null);
  const scrollRef = useRef(null);

  // Create an extended array that includes copies of the first few items
  const extendedItems = [...galleryItems, ...galleryItems.slice(0, 5)];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      if (currentIndex >= galleryItems.length - 1) {
        // When reaching the end, quickly reset to start without animation
        setCurrentIndex(0);
        if (scrollRef.current) {
          scrollRef.current.style.transition = 'none';
          scrollRef.current.style.transform = `translateX(0)`;
          // Force reflow
          scrollRef.current.offsetHeight;
          scrollRef.current.style.transition = 'transform 0.5s ease-in-out';
        }
      } else {
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    }, 3000);

    return () => resetTimeout();
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === 0) {
        return galleryItems.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex >= galleryItems.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
        </div>

        <div className="relative overflow-hidden">
          {/* Previous Button */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Gallery Container */}
          <div 
            ref={scrollRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 5)}%)`
            }}
          >
            {extendedItems.map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                className="flex-none w-1/5 px-2"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-gray-800 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 