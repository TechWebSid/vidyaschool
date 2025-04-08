'use client'
import { useEffect } from 'react';

const MHTCETEligibility = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-pink-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6
                         bg-gradient-to-r from-purple-600 to-pink-600 
                         text-transparent bg-clip-text">
            Eligibility & Exam Pattern
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Eligibility Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl
                         border-2 border-purple-100">
            <h3 className="text-2xl font-bold mb-6 text-purple-600">Eligibility Criteria</h3>
            <ul className="space-y-4">
              {[
                "Passed HSC/12th with PCM/PCB",
                "Minimum 50% marks (45% for reserved categories)",
                "Maharashtra State Board or equivalent",
                "No age limit specified"
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pattern Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl
                         border-2 border-purple-100">
            <h3 className="text-2xl font-bold mb-6 text-purple-600">Exam Pattern</h3>
            <div className="space-y-6">
              {[
                {
                  title: "Duration",
                  value: "3 Hours"
                },
                {
                  title: "Total Questions",
                  value: "150 MCQs"
                },
                {
                  title: "Marking Scheme",
                  value: "+2 for correct, No negative marking"
                },
                {
                  title: "Mode",
                  value: "Online Computer Based Test"
                }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-purple-100 pb-2">
                  <span className="text-gray-600">{item.title}</span>
                  <span className="font-semibold text-gray-800">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MHTCETEligibility; 