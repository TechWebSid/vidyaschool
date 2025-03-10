'use client'
import { useState } from 'react';
import Link from 'next/link';

const CurriculumTab = ({ title, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
      isActive
        ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg'
        : 'bg-white/60 text-gray-700 hover:bg-white/80'
    }`}
  >
    {title}
  </button>
);

const SubjectList = ({ subjects }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {subjects.map((subject, index) => (
      <div 
        key={index}
        className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-teal-500/10 to-cyan-500/10 flex items-center justify-center text-xl">
            {subject.icon}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">{subject.name}</h4>
            <p className="text-sm text-gray-600">{subject.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const AcademicCurriculum = () => {
  const [activeTab, setActiveTab] = useState('primary');

  const curriculumData = {
    primary: {
      title: "Primary Section (Nursery-5th)",
      description: "Building strong foundations through play-based learning and core subjects.",
      subjects: [
        {
          icon: "📖",
          name: "Language & Literature",
          description: "English, Hindi, and Third Language options"
        },
        {
          icon: "🔢",
          name: "Mathematics",
          description: "Basic numeracy and mathematical concepts"
        },
        {
          icon: "🌍",
          name: "Environmental Studies",
          description: "Introduction to science and social studies"
        },
        {
          icon: "🎨",
          name: "Arts & Crafts",
          description: "Creative expression and motor skills development"
        },
        {
          icon: "🎵",
          name: "Music & Movement",
          description: "Rhythmic activities and cultural appreciation"
        },
        {
          icon: "💻",
          name: "Computer Awareness",
          description: "Basic digital literacy and technology"
        }
      ]
    },
    middle: {
      title: "Middle Section (6th-8th)",
      description: "Developing critical thinking and subject expertise.",
      subjects: [
        {
          icon: "🔬",
          name: "Science",
          description: "Physics, Chemistry, and Biology fundamentals"
        },
        {
          icon: "📐",
          name: "Mathematics",
          description: "Advanced mathematical concepts and problem-solving"
        },
        {
          icon: "🌏",
          name: "Social Studies",
          description: "History, Geography, and Civics"
        },
        {
          icon: "💻",
          name: "Computer Science",
          description: "Programming basics and digital skills"
        },
        {
          icon: "📚",
          name: "Languages",
          description: "English, Hindi, and optional third language"
        },
        {
          icon: "🎭",
          name: "Arts & Physical Education",
          description: "Holistic development activities"
        }
      ]
    },
    secondary: {
      title: "Secondary Section (9th-10th)",
      description: "Preparing for board examinations with comprehensive subject coverage.",
      subjects: [
        {
          icon: "🧪",
          name: "Science",
          description: "Advanced Physics, Chemistry, and Biology"
        },
        {
          icon: "📊",
          name: "Mathematics",
          description: "Advanced algebra, geometry, and trigonometry"
        },
        {
          icon: "🌐",
          name: "Social Science",
          description: "Economics, Political Science, and Geography"
        },
        {
          icon: "📝",
          name: "Languages",
          description: "English Core and Hindi/Sanskrit options"
        },
        {
          icon: "💻",
          name: "Information Technology",
          description: "Advanced computer applications"
        },
        {
          icon: "🎯",
          name: "Skill Development",
          description: "Career guidance and life skills"
        }
      ]
    },
    senior: {
      title: "Senior Secondary (11th-12th)",
      description: "Specialized streams preparing students for higher education.",
      subjects: [
        {
          icon: "🔬",
          name: "Science Stream",
          description: "Physics, Chemistry, Mathematics/Biology"
        },
        {
          icon: "💹",
          name: "Commerce Stream",
          description: "Accountancy, Business Studies, Economics"
        },
        {
          icon: "📚",
          name: "Humanities Stream",
          description: "History, Political Science, Psychology"
        },
        {
          icon: "📝",
          name: "English Core",
          description: "Mandatory for all streams"
        },
        {
          icon: "💻",
          name: "Computer Science",
          description: "Optional for Science and Commerce"
        },
        {
          icon: "🎯",
          name: "Career Counseling",
          description: "University and career guidance"
        }
      ]
    }
  };

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
            Academic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Curriculum
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Comprehensive CBSE curriculum designed to nurture knowledge, skills, and character.
          </p>
        </div>

        {/* Curriculum Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(curriculumData).map(([key, data]) => (
            <CurriculumTab
              key={key}
              title={data.title}
              isActive={activeTab === key}
              onClick={() => setActiveTab(key)}
            />
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {curriculumData[activeTab].title}
            </h3>
            <p className="text-gray-700">
              {curriculumData[activeTab].description}
            </p>
          </div>

          <SubjectList subjects={curriculumData[activeTab].subjects} />
        </div>

        <div className="text-center mt-12">
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Enquire About Admission
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicCurriculum; 