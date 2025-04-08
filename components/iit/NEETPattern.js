'use client'
import { useEffect } from 'react';

const NEETPattern = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6
                         bg-gradient-to-r from-green-600 to-blue-600 
                         text-transparent bg-clip-text">
            NEET Exam Pattern
          </h2>
        </div>

        {/* Main Pattern Card */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Basic Info */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl
                         border-2 border-green-100">
            <h3 className="text-2xl font-bold mb-6 text-green-600">Basic Information</h3>
            <div className="space-y-4">
              {[
                { label: "Duration", value: "3 Hours 20 Minutes" },
                { label: "Total Questions", value: "200 MCQs" },
                { label: "Total Marks", value: "720 Marks" },
                { label: "Mode", value: "Offline (Pen & Paper)" },
                { label: "Language", value: "Available in 13 languages" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-green-100 pb-2">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-semibold text-gray-800">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Subject Distribution */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl
                         border-2 border-green-100">
            <h3 className="text-2xl font-bold mb-6 text-green-600">Subject-wise Questions</h3>
            <div className="space-y-6">
              {[
                {
                  subject: "Physics",
                  questions: "45",
                  marks: "180",
                  icon: "⚡"
                },
                {
                  subject: "Chemistry",
                  questions: "45",
                  marks: "180",
                  icon: "🧪"
                },
                {
                  subject: "Biology",
                  questions: "90",
                  marks: "360",
                  icon: "🧬"
                }
              ].map((subject, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="text-2xl">{subject.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{subject.subject}</h4>
                    <div className="text-sm text-gray-600">
                      {subject.questions} questions • {subject.marks} marks
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marking Scheme */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl
                         border-2 border-green-100">
            <h3 className="text-2xl font-bold mb-6 text-center text-green-600">
              Marking Scheme
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  type: "Correct Answer",
                  marks: "+4 Marks",
                  icon: "✅"
                },
                {
                  type: "Incorrect Answer",
                  marks: "-1 Mark",
                  icon: "❌"
                },
                {
                  type: "Unattempted",
                  marks: "0 Marks",
                  icon: "⭕"
                }
              ].map((scheme, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-green-50">
                  <div className="text-2xl mb-2">{scheme.icon}</div>
                  <div className="font-semibold text-gray-800">{scheme.type}</div>
                  <div className="text-green-600">{scheme.marks}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NEETPattern; 