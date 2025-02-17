'use client'
import { useState, useEffect } from 'react';

const ActivityCard = ({ title, description, image, icon }) => (
  <div className="group">
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full transform group-hover:scale-105 overflow-hidden">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  </div>
);

const Activities = () => {
  const activities = [
    {
      title: "Art & Music",
      description: "Express creativity through painting, sketching, vocal music, and instrumental training.",
      image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1470",
      icon: "🎨"
    },
    {
      title: "Drama & Theater",
      description: "Develop confidence and communication skills through theatrical performances.",
      image: "https://images.unsplash.com/photo-1604975999044-188783d54fb3?q=80&w=1470",
      icon: "🎭"
    },
    {
      title: "Sports & Yoga",
      description: "Promote physical fitness through various sports activities and daily yoga sessions.",
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1469",
      icon: "⚽"
    },
    {
      title: "Coding & Robotics",
      description: "Learn programming and robotics in our state-of-the-art computer lab.",
      image: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1470",
      icon: "💻"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activities.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activities.length]);

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
            Co-Curricular &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Extracurricular
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Nurturing talents and developing well-rounded personalities through diverse activities.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {activities.map((activity, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <ActivityCard {...activity} />
                </div>
              ))}
            </div>
          </div>
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {activities.map((_, index) => (
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

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities; 