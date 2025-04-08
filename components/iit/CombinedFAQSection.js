'use client'
import { useState } from 'react';
import Link from 'next/link';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
    <button
      className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
      onClick={onClick}
    >
      <span className="font-semibold text-gray-900">{question}</span>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <svg 
          className="w-5 h-5 text-violet-600" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </span>
    </button>
    <div className={`transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
      <div className="px-6 pb-4 text-gray-700">{answer}</div>
    </div>
  </div>
);

const CombinedFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('general');

  const faqsByCategory = {
    general: [
      {
        question: "What are the different programs offered?",
        answer: "We offer comprehensive coaching for IIT-JEE, NEET, and MHT-CET examinations. Each program is carefully structured with regular classes, practice sessions, and mock tests to ensure thorough preparation."
      },
      {
        question: "How are the batches structured?",
        answer: "Our batches are limited to 30 students across all programs. We offer morning, evening, and weekend batches. Students are grouped based on their performance in our entrance test to ensure optimal learning environments."
      },
      {
        question: "What study materials are provided?",
        answer: "All students receive comprehensive study packages including topic-wise notes, practice workbooks, previous year papers, daily practice problems (DPPs), and access to our online learning platform."
      }
    ],
    iitjee: [
      {
        question: "What is the success rate in IIT-JEE?",
        answer: "We maintain a 98% success rate in JEE Main qualifications with over 500 IITians. Our students regularly secure ranks within top 1000 in JEE Advanced."
      },
      {
        question: "How do you prepare students for JEE Advanced?",
        answer: "Our JEE Advanced preparation includes advanced problem-solving techniques, concept-based training, and intensive mock tests simulating the actual exam pattern."
      }
    ],
    neet: [
      {
        question: "How do you cover the vast NEET syllabus?",
        answer: "Our NEET program follows a systematic approach covering Physics, Chemistry, and Biology through regular classes, practical sessions, and comprehensive study materials aligned with NCERT."
      },
      {
        question: "Do you provide special focus on Biology?",
        answer: "Yes, we have dedicated Biology faculty and extra hours for practical understanding, diagrams practice, and NCERT-based preparations specific to NEET requirements."
      }
    ],
    mhtcet: [
      {
        question: "How is MHT-CET preparation different?",
        answer: "MHT-CET preparation is state-focused, covering the Maharashtra State Board syllabus while maintaining the competitive edge required for JEE/NEET preparation."
      },
      {
        question: "Do you provide separate batches for MHT-CET?",
        answer: "Yes, we have dedicated batches for MHT-CET aspirants, with special focus on state board syllabus and exam pattern."
      }
    ]
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#fff1f9] to-[#f8f1ff] relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-green-600 to-purple-600">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Find answers to common questions about our entrance exam coaching programs
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { id: 'general', label: 'General', color: 'violet' },
            { id: 'iitjee', label: 'IIT-JEE', color: 'blue' },
            { id: 'neet', label: 'NEET', color: 'green' },
            { id: 'mhtcet', label: 'MHT-CET', color: 'purple' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300
                         ${activeTab === tab.id
                           ? `bg-${tab.color}-100 text-${tab.color}-700`
                           : 'bg-white/60 text-gray-600 hover:bg-gray-100'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqsByCategory[activeTab].map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Still have questions? We're here to help!
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-600 via-green-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
              Contact Our Counselors
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CombinedFAQSection; 