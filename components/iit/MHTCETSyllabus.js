'use client'
import { useEffect, useState } from 'react';

const SubjectTab = ({ subject, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300
                ${isActive 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                  : 'bg-white/80 text-gray-700 hover:bg-white'}`}
  >
    <span className="text-2xl">{icon}</span>
    <span className="font-semibold">{subject}</span>
  </button>
);

const MHTCETSyllabus = () => {
  const [activeSubject, setActiveSubject] = useState('Physics');

  const syllabusData = {
    Physics: [
      "Measurements & Units",
      "Scalars & Vectors",
      "Motion & Mechanics",
      "Work, Power & Energy",
      "Rotational Motion",
      "Gravitation",
      "Properties of Matter",
      "Heat & Thermodynamics",
      "Wave Motion",
      "Current Electricity"
    ],
    Chemistry: [
      "Basic Concepts",
      "States of Matter",
      "Atomic Structure",
      "Chemical Bonding",
      "Chemical Thermodynamics",
      "Chemical Kinetics",
      "Electrochemistry",
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Environmental Chemistry"
    ],
    Mathematics: [
      "Algebra",
      "Trigonometry",
      "Geometry",
      "Vectors",
      "Matrices & Determinants",
      "Probability",
      "Statistics",
      "Differentiation",
      "Integration",
      "Differential Equations"
    ]
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6
                         bg-gradient-to-r from-purple-600 to-pink-600 
                         text-transparent bg-clip-text">
            MHT-CET Syllabus
          </h2>
          <p className="text-xl text-gray-700">
            Comprehensive coverage of all subjects as per the latest pattern
          </p>
        </div>

        {/* Subject Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <SubjectTab
            subject="Physics"
            icon="⚡"
            isActive={activeSubject === 'Physics'}
            onClick={() => setActiveSubject('Physics')}
          />
          <SubjectTab
            subject="Chemistry"
            icon="🧪"
            isActive={activeSubject === 'Chemistry'}
            onClick={() => setActiveSubject('Chemistry')}
          />
          <SubjectTab
            subject="Mathematics"
            icon="📐"
            isActive={activeSubject === 'Mathematics'}
            onClick={() => setActiveSubject('Mathematics')}
          />
        </div>

        {/* Syllabus Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl
                         border-2 border-purple-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {syllabusData[activeSubject].map((topic, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center
                                 text-purple-600 font-semibold">{index + 1}</span>
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MHTCETSyllabus; 