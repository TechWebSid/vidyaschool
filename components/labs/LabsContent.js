'use client'
import { useEffect } from 'react';

const LabCard = ({ title, icon, items, color, delay }) => (
  <div 
    className={`lab-card relative group opacity-0 translate-y-8
                transition-all duration-700 ease-out`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Card Background */}
    <div className={`absolute -inset-2 ${color} rounded-[2rem] opacity-20 
                    group-hover:opacity-40 group-hover:scale-105 
                    transition-all duration-500 blur-lg`}></div>

    <div className="relative bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 
                    transform hover:translate-y-[-8px] transition-all duration-500
                    border-4 border-dashed border-pink-200 shadow-xl h-full">
      {/* Icon Header */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 
                       rounded-2xl rotate-6 group-hover:rotate-12 
                       transition-transform duration-500"></div>
        <div className="relative bg-white rounded-2xl p-4 -rotate-6 
                       group-hover:-rotate-12 transition-transform duration-500">
          <span className="text-4xl block text-center">{icon}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-center mb-6
                     bg-gradient-to-r from-pink-500 to-purple-500 
                     text-transparent bg-clip-text">{title}</h3>

      {/* Items List */}
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="text-purple-500 mr-2">🔹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// New Components
const BenefitCard = ({ icon, title, description }) => (
  <div className="relative group">
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 
                    transform hover:translate-y-[-8px] transition-all duration-500
                    border-2 border-dashed border-pink-200 shadow-lg">
      <div className="text-4xl mb-4 animate-bounce-slow">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const TimelineEvent = ({ year, title, description }) => (
  <div className="relative pl-8 pb-8 group">
    <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-pink-400 to-purple-400"></div>
    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full 
                    bg-gradient-to-r from-pink-500 to-purple-500
                    group-hover:scale-150 transition-transform duration-300"></div>
    <div className="text-pink-500 font-bold mb-1">{year}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StatCard = ({ number, label, icon }) => (
  <div className="text-center">
    <div className="inline-block p-4 rounded-full 
                    bg-gradient-to-r from-pink-100 to-purple-100 
                    mb-4 animate-bounce-slow">
      <span className="text-4xl">{icon}</span>
    </div>
    <div className="text-3xl font-bold text-gray-800 mb-1">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const LabsContent = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.lab-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const labs = [
    {
      title: "Communication & Skill Lab",
      icon: "🗣",
      items: [
        "Enhancing Reading Fluency",
        "Reading Comprehension",
        "Public Speaking Skills",
        "Speech and Drama Training",
        "Debating & MUN Preparation",
        "Fundamentals of Mass Communication & Journalism",
        "Entrepreneurial and Business Communication",
        "Creative Writing – Fiction & Non-Fiction",
        "Vocabulary Building and Grammar Mastery",
        "Portfolio Creation & Personal Branding",
        "Voice Modulation & Presentation",
        "Leadership and Social Interaction Skills"
      ],
      color: "bg-blue-400"
    },
    {
      title: "STEM Lab",
      icon: "🔬",
      items: [
        "Robotics and Coding",
        "Basics of AI & IoT",
        "Hands-on Science Experiments",
        "Real-life Application of Mathematical Concepts",
        "Design Thinking and Innovation",
        "Problem-Solving & Critical Thinking"
      ],
      color: "bg-purple-400"
    },
    {
      title: "Financial Literacy Lab",
      icon: "💰",
      items: [
        "Money Management Skills",
        "Budget Planning & Decision Making",
        "Digital Payments, UPI & Basic Banking",
        "Introduction to Investments and Saving",
        "Financial Planning Foundations",
        "Basics of Entrepreneurship and Business Models"
      ],
      color: "bg-pink-400"
    }
  ];

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Labs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {labs.map((lab, index) => (
              <LabCard
                key={index}
                {...lab}
                delay={300 + index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* New Section 1: Key Benefits */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4
                          bg-gradient-to-r from-pink-500 to-purple-500 
                          text-transparent bg-clip-text">
              Benefits of Our Labs
            </h2>
            <p className="text-xl text-gray-700">Transforming Education Through Innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard 
              icon="🎯"
              title="Practical Learning"
              description="Hands-on experience with real-world applications"
            />
            <BenefitCard 
              icon="🧠"
              title="Skill Development"
              description="Focus on building essential 21st-century skills"
            />
            <BenefitCard 
              icon="🤝"
              title="Industry Connect"
              description="Direct interaction with industry experts and professionals"
            />
            <BenefitCard 
              icon="📈"
              title="Career Growth"
              description="Enhanced employability and career prospects"
            />
          </div>
        </div>
      </section>

      {/* New Section 2: Implementation Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4
                          bg-gradient-to-r from-pink-500 to-purple-500 
                          text-transparent bg-clip-text">
              Implementation Roadmap
            </h2>
            <p className="text-xl text-gray-700">Our Journey Towards Excellence</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <TimelineEvent 
              year="2023"
              title="Foundation Phase"
              description="Setting up basic infrastructure and training programs"
            />
            <TimelineEvent 
              year="2024"
              title="Development Phase"
              description="Expanding facilities and introducing advanced programs"
            />
            <TimelineEvent 
              year="2025"
              title="Excellence Phase"
              description="Achieving full operational capability and industry partnerships"
            />
          </div>
        </div>
      </section>

      {/* New Section 3: Impact Statistics */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4
                          bg-gradient-to-r from-pink-500 to-purple-500 
                          text-transparent bg-clip-text">
              Our Impact
            </h2>
            <p className="text-xl text-gray-700">Making a Difference in Education</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <StatCard 
              number="1000+"
              label="Students Enrolled"
              icon="👨‍🎓"
            />
            <StatCard 
              number="50+"
              label="Expert Trainers"
              icon="👨‍🏫"
            />
            <StatCard 
              number="25+"
              label="Industry Partners"
              icon="🤝"
            />
            <StatCard 
              number="100%"
              label="Satisfaction Rate"
              icon="⭐"
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6
                          bg-gradient-to-r from-pink-500 to-purple-500 
                          text-transparent bg-clip-text">
              Our Mission
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl
                          border-4 border-dashed border-pink-200">
              <p className="text-xl text-gray-700 leading-relaxed">
                Our aim is not just to help students pass exams but to shape them into 
                confident, skill-rich, globally competitive leaders of the 21st century.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LabsContent; 