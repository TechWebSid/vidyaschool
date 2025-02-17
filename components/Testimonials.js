 'use client'
import { useState, useEffect } from 'react';

const SuccessCard = ({ name, batch, achievement, quote, image, category }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
      <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-purple-100">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" 
              style={{
                background: category === 'IIT-JEE' ? 'linear-gradient(135deg, #FF6B6B, #FFE66D)' :
                          category === 'CBSE' ? 'linear-gradient(135deg, #4ECDC4, #556270)' :
                          'linear-gradient(135deg, #A8E6CF, #FFD3B6)'
              }}>
              {category === 'IIT-JEE' ? '🎯' : category === 'CBSE' ? '📚' : '🎨'}
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-sm text-purple-600 font-medium">{batch}</p>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-2 rounded-lg">
              <p className="text-sm font-semibold text-gray-800">{achievement}</p>
            </div>
            <p className="text-gray-600 italic">&ldquo;{quote}&rdquo;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AchievementCounter = ({ number, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById(`counter-${label}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [label]);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = parseInt(number);
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <div id={`counter-${label}`} className="text-center p-6 bg-white rounded-2xl shadow-lg">
      <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        {count}+
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const Testimonials = () => {
  const successStories = [
    {
      name: "Aanya Sharma",
      batch: "IIT-JEE 2023",
      achievement: "AIR 42 in JEE Advanced",
      quote: "The mentorship and guidance helped me crack JEE with flying colors!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      category: "IIT-JEE"
    },
    {
      name: "Arjun Patel",
      batch: "CBSE XII 2023",
      achievement: "99.8% in CBSE Boards",
      quote: "The perfect blend of academics and extracurriculars shaped my success.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      category: "CBSE"
    },
    {
      name: "Zara Sinha",
      batch: "Kindergarten 2023",
      achievement: "Best Creative Student Award",
      quote: "Learning was always fun and exciting!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      category: "Kindergarten"
    },
    {
      name: "Dhruv Mehta",
      batch: "IIT-JEE 2023",
      achievement: "AIR 156 in JEE Advanced",
      quote: "The problem-solving approach here is unique and effective.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      category: "IIT-JEE"
    },
    {
      name: "Ishaan Malhotra",
      batch: "CBSE XII 2023",
      achievement: "District Topper in Science",
      quote: "The practical approach to learning science made all the difference.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      category: "CBSE"
    },
    {
      name: "Deepak Sharma",
      batch: "IIT-JEE 2023",
      achievement: "AIR 156 in JEE Advanced",
      quote: "The problem-solving approach here is unique and effective.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      category: "IIT-JEE"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Success Stories
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Meet our achievers who have made us proud with their remarkable accomplishments
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {successStories.map((story, index) => (
            <SuccessCard key={index} {...story} />
          ))}
        </div>

        {/* Achievement Counters */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AchievementCounter number="100" label="IITians" />
            <AchievementCounter number="500" label="CBSE Toppers" />
            <AchievementCounter number="1000" label="Happy Parents" />
            <AchievementCounter number="15" label="Years of Excellence" />
          </div>
        </div>

        {/* Inspiring Quote */}
        <div className="mt-20 text-center">
          <blockquote className="relative max-w-3xl mx-auto">
            <div className="absolute -top-12 left-0 text-8xl text-purple-200">"</div>
            <p className="relative z-10 text-2xl text-gray-700 italic font-light">
              Success is not just about marks; it's about creating well-rounded individuals who are ready to take on the world.
            </p>
            <footer className="mt-4">
              <p className="text-gray-600 font-medium">- Principal, Vidya International School</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;