'use client'
import { useEffect } from 'react';

const LabsDetailedContent = () => {
  return (
    <section className="py-20">
      {/* STEM Lab Details */}
      <div className="container mx-auto px-4 mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
                STEM Lab
              </h2>
              <p className="text-xl text-blue-600 mb-4">
                Science, Technology, Engineering, and Mathematics
              </p>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art STEM lab is where innovation meets education. Students get hands-on experience with cutting-edge technology and engineering concepts.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
                alt="STEM Lab"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              {[
                { name: "Game Design", icon: "🎮" },
                { name: "Web Design", icon: "🌐" },
                { name: "Circuits & Sensors", icon: "⚡" },
                { name: "App Development", icon: "📱" },
                { name: "Mechatronics", icon: "🤖" },
                { name: "Microbit Programming", icon: "💻" },
                { name: "3D Designing", icon: "🎨" }
              ].map((skill, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
                  <span className="text-2xl mb-2 block">{skill.icon}</span>
                  <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Communication Lab Details */}
      <div className="container mx-auto px-4 mb-32 bg-gradient-to-r from-purple-50 to-pink-50 py-16 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                Communication Lab
              </h2>
              <p className="text-gray-600 mb-6">
                Master the art of effective communication through our comprehensive program that covers various aspects of verbal and written expression.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop"
                alt="Communication Lab"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              {[
                { name: "Voice Modulation", icon: "🎤" },
                { name: "MUN and Debating", icon: "🎭" },
                { name: "Advertising Campaign", icon: "📢" },
                { name: "Film Making", icon: "🎬" },
                { name: "Narration", icon: "📖" },
                { name: "Poetry Writing", icon: "✍️" },
                { name: "Drama & Performance", icon: "🎭" },
                { name: "Comic Writing", icon: "💭" }
              ].map((skill, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
                  <span className="text-2xl mb-2 block">{skill.icon}</span>
                  <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Financial Literacy Lab Details */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-500 text-transparent bg-clip-text">
                Financial Literacy Lab
              </h2>
              <p className="text-gray-600 mb-6">
                Empower yourself with essential financial knowledge and skills for a secure future through our comprehensive financial literacy program.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
                alt="Financial Literacy Lab"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              {[
                { name: "Personal Budgeting", icon: "💰" },
                { name: "Investment Basics", icon: "📈" },
                { name: "Digital Banking", icon: "🏦" },
                { name: "Tax Planning", icon: "📊" },
                { name: "Entrepreneurship", icon: "💼" },
                { name: "Crypto Basics", icon: "₿" },
                { name: "Insurance Planning", icon: "🛡️" },
                { name: "Real Estate Basics", icon: "🏠" }
              ].map((skill, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
                  <span className="text-2xl mb-2 block">{skill.icon}</span>
                  <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default LabsDetailedContent; 