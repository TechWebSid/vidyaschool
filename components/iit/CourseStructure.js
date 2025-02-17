'use client'
import { useState, useEffect } from 'react';

const CourseCard = ({ title, description, features, icon, isActive, onClick }) => (
  <div 
    className={`relative group cursor-pointer transform transition-all duration-500 ${
      isActive ? 'scale-105' : 'hover:scale-[1.02]'
    }`}
    onClick={onClick}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${
      isActive 
        ? 'from-violet-600/20 to-purple-600/20' 
        : 'from-violet-400/10 to-purple-400/10'
    } rounded-2xl blur-xl transition-all duration-500 ${
      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
    }`} />
    
    <div className={`relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg 
                     transition-all duration-500 ${
      isActive 
        ? 'shadow-violet-200/50' 
        : 'shadow-transparent group-hover:shadow-purple-100/30'
    }`}>
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl
                        transition-all duration-500 ${
          isActive 
            ? 'bg-gradient-to-br from-violet-600 to-purple-600 text-white'
            : 'bg-gradient-to-br from-violet-100 to-purple-100 text-violet-600'
        }`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${
            isActive ? 'text-violet-600' : 'text-gray-900'
          }`}>
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-start gap-2 transition-all duration-500 ${
                  isActive ? 'translate-x-2' : ''
                }`}
              >
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                  isActive ? 'bg-violet-600' : 'bg-violet-400'
                }`} />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CourseStructure = () => {
  const [activeCourse, setActiveCourse] = useState('foundation');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCourse(current => {
        switch(current) {
          case 'foundation': return 'advanced';
          case 'advanced': return 'crash';
          default: return 'foundation';
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const courses = {
    foundation: {
      title: "Foundation Program",
      description: "Build strong basics for IIT-JEE success",
      icon: "📌",
      features: [
        "Complete NCERT syllabus coverage",
        "Focus on fundamental concepts",
        "Regular practice tests & assessments",
        "Personalized doubt clearing sessions",
        "Study material & online resources",
        "Parent-teacher meetings"
      ]
    },
    advanced: {
      title: "JEE Main + Advanced",
      description: "Comprehensive preparation for JEE success",
      icon: "🚀",
      features: [
        "Complete JEE syllabus mastery",
        "Advanced problem-solving techniques",
        "Weekly mock tests & analysis",
        "One-on-one mentoring sessions",
        "Previous year paper discussion",
        "Performance tracking system"
      ]
    },
    crash: {
      title: "Crash Course",
      description: "Fast-track preparation with expert guidance",
      icon: "🎯",
      features: [
        "Intensive revision program",
        "Important topics & shortcuts",
        "Daily practice tests",
        "24/7 doubt solving support",
        "Last-minute tips & strategies",
        "Stress management sessions"
      ]
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#fff1f9] to-[#f8f1ff] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-violet-200/30 to-fuchsia-200/30 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-purple-200/30 to-blue-200/30 blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Structured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
              Learning Path
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Choose the program that best fits your preparation stage and goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(courses).map(([key, course]) => (
            <CourseCard
              key={key}
              {...course}
              isActive={activeCourse === key}
              onClick={() => setActiveCourse(key)}
            />
          ))}
        </div>

        {/* Recognition Banner */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white text-3xl">
              🏆
            </div>
            <p className="text-xl font-semibold text-gray-900">
              Join our legacy of 500+ successful IITians and counting
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseStructure; 