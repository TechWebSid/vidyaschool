'use client'
import { useState } from 'react';

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
      question: "What is the duration of the IIT-JEE coaching program?",
      answer: "We offer multiple programs: a 2-year program for Class 11-12 students, a 1-year intensive program for Class 12 students, and a 4-year foundation program starting from Class 9. Each program is carefully structured to provide comprehensive preparation for IIT-JEE."
    },
    {
      question: "How are the batches structured?",
      answer: "Our batches are limited to 30 students to ensure personal attention. We offer morning, evening, and weekend batches to accommodate different schedules. Students are grouped based on their performance in our entrance test to ensure homogeneous learning environments."
    },
    {
      question: "What study materials are provided?",
      answer: "Students receive comprehensive study packages including topic-wise notes, practice workbooks, previous year papers with solutions, daily practice problems (DPPs), and access to our online learning platform with video lectures and practice tests."
    },
    {
      question: "How do you track student progress?",
      answer: "We conduct weekly tests, monthly assessments, and term examinations. Our AI-driven analytics system provides detailed performance reports, identifying strengths and areas for improvement. Parents receive regular updates through our mobile app."
    },
    {
      question: "Do you provide doubt clearing sessions?",
      answer: "Yes, we have dedicated doubt clearing sessions daily. Students can also access our online doubt solving platform 24/7. Our faculty members are available for one-on-one guidance during specified hours."
    },
    {
      question: "What is your success rate in IIT-JEE?",
      answer: "We maintain a consistent success rate of 98% in JEE Main qualifications and have produced over 500 IITians. Our students regularly secure ranks within the top 1000 in JEE Advanced, with many achieving ranks under 100."
    },
    {
      question: "Are there any scholarships available?",
      answer: "Yes, we offer merit-based scholarships up to 100% fee waiver based on performance in our scholarship test. Special scholarships are also available for students from economically weaker sections and for exceptional academic achievements."
    },
    {
      question: "How do I enroll in the program?",
      answer: "The enrollment process involves: 1) Filling out the application form, 2) Taking our entrance test, 3) Attending a counseling session with parents, and 4) Completing the admission formalities. You can start the process online or visit our center."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#fff1f9] to-[#f8f1ff] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-violet-200/30 to-fuchsia-200/30 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-purple-200/30 to-blue-200/30 blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Find answers to common questions about our IIT-JEE coaching program.
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
          <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Contact Our Counselors
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 