'use client'
import { useEffect } from 'react';

const ProgramCard = ({ icon, title, ageGroup, description, delay }) => (
  <div 
    className="relative group animate-on-mount translate-y-8 opacity-0"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="h-full bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl 
                    transform hover:translate-y-[-4px] transition-all duration-300">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl -z-10"></div>
      
      {/* Content */}
      <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-purple-600 font-medium mb-4">{ageGroup}</p>
      <p className="text-gray-700 mb-6">{description}</p>
      <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white 
                        rounded-full font-medium hover:shadow-lg transform hover:scale-105 
                        transition-all duration-300">
        Learn More
      </button>
    </div>
  </div>
);

const Programs = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach(el => {
      el.classList.add('translate-y-0', 'opacity-100');
    });
  }, []);

  const programs = [
    {
      icon: "🍼",
      title: "Toddler Program",
      ageGroup: "1.5 – 2.5 Years",
      description: "Early development through sensory play, social interaction, and basic motor skills activities."
    },
    {
      icon: "🎨",
      title: "Nursery",
      ageGroup: "2.5 – 3.5 Years",
      description: "Creative exploration through art, music, and foundational learning experiences."
    },
    {
      icon: "📖",
      title: "Kindergarten",
      ageGroup: "3.5 – 5 Years",
      description: "Comprehensive preparation with phonics, numbers, and interactive storytelling sessions."
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6
                         animate-on-mount translate-y-8 opacity-0 transition-all duration-700">
            Programs & {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Age Groups
            </span>
          </h2>
          <p className="text-lg text-gray-700
                       animate-on-mount translate-y-8 opacity-0 transition-all duration-700 delay-200">
            Tailored learning experiences for every stage of early childhood development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              {...program}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>

      {/* Hand-drawn style divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="#fff5f7"
            className="opacity-25"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="#fff5f7"
            className="opacity-50"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Programs; 