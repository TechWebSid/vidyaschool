'use client'
import { useState } from 'react';

const AchievementCard = ({ title, stats, description, icon }) => (
  <div className="group">
    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full transform group-hover:scale-105">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
        {stats}
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const AchievementsResults = () => {
  const achievements = [
    {
      title: "10th Board Results",
      stats: "98%",
      description: "School average in CBSE Class X Board Examinations 2024",
      icon: "🎓"
    },
    {
      title: "12th Board Results",
      stats: "99%",
      description: "Science Stream Topper in CBSE Class XII Board Examinations 2024",
      icon: "🏆"
    },
    {
      title: "Olympiad Achievements",
      stats: "50+",
      description: "National & International Olympiad medals in 2023-24",
      icon: "🌟"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f0fdf9] to-[#f0f9ff] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-teal-200/30 to-cyan-200/30 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-200/30 to-teal-200/30 blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <img
            src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=1470"
            alt="Students celebrating achievements"
            className="w-full h-[300px] sm:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-cyan-900/70">
            <div className="h-full flex flex-col items-center justify-center text-white text-center p-6">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Celebrating Excellence
              </h2>
              <p className="text-xl sm:text-2xl font-semibold mb-2">
                100% CBSE Exam Success Rate
              </p>
              <p className="text-lg sm:text-xl">
                Board Toppers Every Year
              </p>
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>

        {/* Recognition Banner */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white text-3xl">
              🌟
            </div>
            <p className="text-xl font-semibold text-gray-900">
              Consistently ranked among the top 5% of CBSE schools nationwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsResults; 