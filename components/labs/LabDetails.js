'use client'
import { useState } from 'react';

const LabDetails = () => {
  const [activeTab, setActiveTab] = useState('stem');

  const labData = {
    stem: {
      title: "STEM Lab",
      fullForm: "Science, Technology, Engineering, and Mathematics",
      description: "Our STEM Lab is a cutting-edge facility where students explore the intersection of science, technology, engineering, and mathematics through hands-on projects and real-world applications.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
      skills: [
        {
          name: "Game Design",
          icon: "🎮",
          description: "Learn to create interactive games using modern game engines",
          image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Web Design",
          icon: "🌐",
          description: "Master HTML, CSS, and JavaScript for modern web development",
          image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Circuits & Sensors",
          icon: "⚡",
          description: "Build and program electronic circuits and sensor systems",
          image: "https://images.unsplash.com/photo-1631619250786-8b11f5730a36?q=80&w=2068&auto=format&fit=crop"
        },
        {
          name: "App Development",
          icon: "📱",
          description: "Create mobile applications for iOS and Android platforms",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop"
        },
        {
          name: "Mechatronics",
          icon: "🤖",
          description: "Combine mechanics, electronics, and computing principles",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Microbit Programming",
          icon: "💻",
          description: "Program microcontrollers for interactive projects",
          image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "3D Designing",
          icon: "🎨",
          description: "Create 3D models and prepare them for printing",
          image: "https://images.unsplash.com/photo-1631733513650-ce1adc84b9e9?q=80&w=2070&auto=format&fit=crop"
        }
      ]
    },
    communication: {
      title: "Communication Lab",
      description: "Develop essential communication skills through interactive sessions and practical exercises in our state-of-the-art communication lab.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
      skills: [
        {
          name: "Voice Modulation",
          icon: "🎤",
          description: "Master the art of voice control and expression",
          image: "https://images.unsplash.com/photo-1598387181032-a3103a2db5c3?q=80&w=2076&auto=format&fit=crop"
        },
        {
          name: "MUN and Debating",
          icon: "🎭",
          description: "Participate in Model UN and formal debates",
          image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Advertising Campaign",
          icon: "📢",
          description: "Create compelling marketing campaigns",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Film Making",
          icon: "🎬",
          description: "Learn video production and storytelling",
          image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
        },
        {
          name: "Narration",
          icon: "📖",
          description: "Develop storytelling and presentation skills",
          image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2069&auto=format&fit=crop"
        },
        {
          name: "Poetry Writing",
          icon: "✍️",
          description: "Express creativity through verse and rhythm",
          image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop"
        },
        {
          name: "Drama & Performance",
          icon: "🎭",
          description: "Learn acting and stage presence",
          image: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=2071&auto=format&fit=crop"
        },
        {
          name: "Comic Writing",
          icon: "💭",
          description: "Create engaging visual narratives",
          image: "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?q=80&w=2073&auto=format&fit=crop"
        }
      ]
    },
    financial: {
      title: "Financial Literacy Lab",
      description: "Gain practical knowledge about money management, investments, and financial planning in our specialized financial literacy lab.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
      skills: [
        {
          name: "Personal Budgeting",
          icon: "💰",
          description: "Learn to create and maintain personal budgets",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop"
        },
        {
          name: "Investment Basics",
          icon: "📈",
          description: "Understand stocks, bonds, and mutual funds",
          image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Digital Banking",
          icon: "🏦",
          description: "Navigate online banking and digital payments",
          image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Tax Planning",
          icon: "📊",
          description: "Learn basic tax concepts and planning",
          image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Entrepreneurship",
          icon: "💼",
          description: "Develop business planning skills",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Crypto Basics",
          icon: "₿",
          description: "Understanding cryptocurrency and blockchain",
          image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop"
        },
        {
          name: "Insurance Planning",
          icon: "🛡️",
          description: "Learn about different types of insurance",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Real Estate Basics",
          icon: "🏠",
          description: "Understand property investment fundamentals",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
        }
      ]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Lab Navigation */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(labData).map((lab) => (
            <button
              key={lab}
              onClick={() => setActiveTab(lab)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300
                ${activeTab === lab 
                  ? 'bg-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {labData[lab].title}
            </button>
          ))}
        </div>
      </div>

      {/* Lab Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {labData[activeTab].title}
          </h2>
          {activeTab === 'stem' && (
            <p className="text-xl text-blue-600 mb-4">
              {labData[activeTab].fullForm}
            </p>
          )}
          <p className="text-lg text-gray-700">
            {labData[activeTab].description}
          </p>
        </div>

        {/* Main Lab Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-16">
          <img
            src={labData[activeTab].image}
            alt={labData[activeTab].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Welcome to {labData[activeTab].title}</h3>
            <p className="text-lg">Explore our cutting-edge facilities and programs</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labData[activeTab].skills.map((skill, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                </div>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabDetails; 