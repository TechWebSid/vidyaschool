'use client'
import { useState } from 'react';

const SubjectTab = ({ subject, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300
                ${isActive 
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg' 
                  : 'bg-white/80 text-gray-700 hover:bg-white'}`}
  >
    <span className="text-2xl">{icon}</span>
    <span className="font-semibold">{subject}</span>
  </button>
);

const NEETSyllabus = () => {
  const [activeSubject, setActiveSubject] = useState('Biology');

  const syllabusData = {
    Biology: {
      'Class 11': [
        "Diversity in Living World",
        "Structural Organization",
        "Cell Structure and Function",
        "Plant Physiology",
        "Human Physiology"
      ],
      'Class 12': [
        "Reproduction",
        "Genetics and Evolution",
        "Biology in Human Welfare",
        "Biotechnology",
        "Ecology and Environment"
      ]
    },
    Physics: {
      'Class 11': [
        "Physical World and Measurement",
        "Kinematics",
        "Laws of Motion",
        "Work, Energy and Power",
        "Thermodynamics"
      ],
      'Class 12': [
        "Electrostatics",
        "Current Electricity",
        "Magnetic Effects",
        "Electromagnetic Induction",
        "Modern Physics"
      ]
    },
    Chemistry: {
      'Class 11': [
        "Some Basic Concepts",
        "Structure of Atom",
        "Chemical Bonding",
        "States of Matter",
        "Organic Chemistry"
      ],
      'Class 12': [
        "Solid State",
        "Solutions",
        "Electrochemistry",
        "Chemical Kinetics",
        "Surface Chemistry"
      ]
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6
                         bg-gradient-to-r from-green-600 to-blue-600 
                         text-transparent bg-clip-text">
            NEET Syllabus
          </h2>
          <p className="text-xl text-gray-700">
            Complete Class 11 & 12 syllabus coverage
          </p>
        </div>

        {/* Subject Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <SubjectTab
            subject="Biology"
            icon="🧬"
            isActive={activeSubject === 'Biology'}
            onClick={() => setActiveSubject('Biology')}
          />
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
        </div>

        {/* Syllabus Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Class 11 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl
                           border-2 border-green-100">
              <h3 className="text-xl font-bold mb-4 text-green-600">Class 11</h3>
              <ul className="space-y-3">
                {syllabusData[activeSubject]['Class 11'].map((topic, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center
                                   text-green-600 text-sm">{index + 1}</span>
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Class 12 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl
                           border-2 border-green-100">
              <h3 className="text-xl font-bold mb-4 text-green-600">Class 12</h3>
              <ul className="space-y-3">
                {syllabusData[activeSubject]['Class 12'].map((topic, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center
                                   text-green-600 text-sm">{index + 1}</span>
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NEETSyllabus; 