'use client'
import { useEffect } from 'react';

const NEETStudyPlan = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-green-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6
                         bg-gradient-to-r from-green-600 to-blue-600 
                         text-transparent bg-clip-text">
            NEET Study Plan
          </h2>
          <p className="text-xl text-gray-700">
            Strategic approach for NEET preparation
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              icon: "📚",
              title: "Daily Schedule",
              points: [
                "6-7 hours dedicated study",
                "Subject rotation system",
                "Regular breaks (Pomodoro)",
                "Daily revision"
              ]
            },
            {
              icon: "📅",
              title: "Weekly Plan",
              points: [
                "Topic completion targets",
                "Weekly tests",
                "Doubt clearing sessions",
                "Performance review"
              ]
            },
            {
              icon: "📊",
              title: "Monthly Goals",
              points: [
                "Full length mock tests",
                "Weak area identification",
                "Revision schedules",
                "Progress tracking"
              ]
            },
            {
              icon: "🎯",
              title: "Final Phase",
              points: [
                "Complete syllabus revision",
                "Previous year papers",
                "Mock test series",
                "Quick revision notes"
              ]
            }
          ].map((plan, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg
                                      border-2 border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4 animate-bounce-slow">{plan.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{plan.title}</h3>
              <ul className="space-y-2">
                {plan.points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
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
                         border-2 border-green-100">
            <h3 className="text-2xl font-bold mb-6 text-center text-green-600">
              Success Strategies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Master NCERT concepts thoroughly",
                "Practice diagrams regularly",
                "Focus on high-yield topics",
                "Take regular mock tests",
                "Create quick revision notes",
                "Join doubt clearing sessions",
                "Maintain healthy lifestyle",
                "Practice previous year papers"
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

export default NEETStudyPlan; 