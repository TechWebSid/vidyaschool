'use client'
import { useEffect } from 'react';

const MHTCETPreparation = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6
                         bg-gradient-to-r from-purple-600 to-pink-600 
                         text-transparent bg-clip-text">
            Preparation Strategy
          </h2>
          <p className="text-xl text-gray-700">
            Structured approach for MHT-CET success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              icon: "📚",
              title: "Daily Study",
              points: ["6-8 hours dedicated study", "Subject rotation", "Regular breaks"]
            },
            {
              icon: "✍️",
              title: "Weekly Plan",
              points: ["Topic-wise preparation", "Mock tests", "Doubt clearing"]
            },
            {
              icon: "📊",
              title: "Monthly Goals",
              points: ["Chapter completion", "Revision cycles", "Performance tracking"]
            },
            {
              icon: "🎯",
              title: "Final Sprint",
              points: ["Full syllabus revision", "Test series", "Time management"]
            }
          ].map((plan, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg
                                      border-2 border-purple-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4 animate-bounce-slow">{plan.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{plan.title}</h3>
              <ul className="space-y-2">
                {plan.points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Study Tips */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl
                         border-2 border-purple-100">
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-600">
              Pro Study Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Focus on NCERT concepts first",
                "Solve previous year papers",
                "Practice numerical problems daily",
                "Create short notes for revision",
                "Take regular mock tests",
                "Maintain a doubt diary",
                "Follow a balanced schedule",
                "Stay physically active"
              ].map((tip, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-2xl">💡</span>
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MHTCETPreparation; 