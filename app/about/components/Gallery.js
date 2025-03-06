import React from 'react';

const galleryItems = [
  {
    id: 1,
    image: "/placeholder-1.jpg",
    title: "Live Coaching Session",
    category: "Events"
  },
  {
    id: 2,
    image: "/placeholder-2.jpg",
    title: "Student Workshop",
    category: "Events"
  },
  {
    id: 3,
    image: "/placeholder-3.jpg",
    title: "Platform Interface",
    category: "Screenshots"
  },
  // Add more items as needed
];

export function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses of our learning environment and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-64 bg-gray-200 rounded-lg"></div> {/* Placeholder */}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 