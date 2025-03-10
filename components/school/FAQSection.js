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
          className="w-5 h-5 text-teal-600" 
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
    <div
      className={`transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}
    >
      <div className="px-6 pb-4 text-gray-700">
        {answer}
      </div>
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is the admission process?",
      answer: "The admission process involves four simple steps: 1) Fill out the online application form, 2) Attend a counseling session, 3) Submit required documents, and 4) Receive admission confirmation. Our admissions team will guide you through each step."
    },
    {
      question: "What subjects are offered in Class 11-12?",
      answer: "We offer three streams: Science (PCM/PCB), Commerce, and Humanities. The Science stream includes Physics, Chemistry, Mathematics/Biology, and optional Computer Science. Commerce includes Accountancy, Business Studies, Economics, and Mathematics. Humanities offers History, Political Science, Geography, and Psychology."
    },
    {
      question: "What is the student-teacher ratio?",
      answer: "We maintain a student-teacher ratio of 20:1 to ensure personalized attention and effective learning. Each class has a maximum of 30 students to create an optimal learning environment."
    },
    {
      question: "Do you provide transportation facilities?",
      answer: "Yes, we provide safe and comfortable transportation with GPS-enabled buses covering major routes. All buses have trained staff and follow strict safety protocols."
    },
    {
      question: "What extracurricular activities are available?",
      answer: "We offer a wide range of activities including sports (cricket, basketball, football), arts (music, dance, painting), clubs (robotics, debate, eco-club), and more. Students are encouraged to participate in multiple activities."
    },
    {
      question: "How do you assess student performance?",
      answer: "We follow a continuous evaluation system with regular class tests, projects, and term examinations. Parents receive detailed progress reports and can track their child's performance through our online portal."
    },
    {
      question: "Are there any scholarships available?",
      answer: "Yes, we offer merit-based scholarships for academic excellence, sports achievements, and cultural talents. We also have special provisions for economically disadvantaged students."
    },
    {
      question: "What safety measures are implemented in the school?",
      answer: "Our campus is equipped with CCTV surveillance, trained security personnel, and a strict visitor monitoring system. We also conduct regular safety drills and have medical facilities on campus."
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Find answers to common questions about our school and programs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
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
            <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Contact Our Team
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 