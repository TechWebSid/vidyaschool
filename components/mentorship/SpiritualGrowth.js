'use client'
import { useEffect } from 'react';

const ValueCard = ({ icon, title, description }) => (
  <div className="relative transform hover:scale-105 transition-all duration-300">
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 
                    border-2 border-purple-200 shadow-lg">
      <div className="text-3xl mb-4 animate-bounce-slow">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const SpiritualGrowth = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Om Symbol Watermark */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                          text-9xl text-purple-100 opacity-20 rotate-12">
            🕉️
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6
                         bg-gradient-to-r from-purple-500 to-pink-500 
                         text-transparent bg-clip-text">
            Spiritual Education & Indian Wisdom
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Blending ancient Indian knowledge with modern education to create 
            well-rounded individuals rooted in culture and values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ValueCard 
            icon="📚"
            title="Epic Wisdom"
            description="Learning from Ramayana and Mahabharata's timeless values"
          />
          <ValueCard 
            icon="⚖️"
            title="Dharma & Ethics"
            description="Understanding duty, service, and truth in modern context"
          />
          <ValueCard 
            icon="🧘‍♀️"
            title="Inner Peace"
            description="Yoga, meditation, and mindfulness practices"
          />
          <ValueCard 
            icon="🤝"
            title="Value System"
            description="Building strong character through Indian values"
          />
        </div>

        {/* Featured Programs */}
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8
                        border-4 border-dashed border-purple-200 shadow-xl">
          <h3 className="text-2xl font-bold text-center mb-6
                         bg-gradient-to-r from-purple-500 to-pink-500 
                         text-transparent bg-clip-text">
            Our Spiritual Programs Include
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">🧘‍♀️</span>
              <span className="text-gray-700">Daily Meditation Sessions</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">📖</span>
              <span className="text-gray-700">Weekly Value Education</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">🎭</span>
              <span className="text-gray-700">Cultural Performances</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">🙏</span>
              <span className="text-gray-700">Spiritual Workshops</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualGrowth; 