'use client'
import { useState } from 'react';

const ProcessStep = ({ number, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const FAQ = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      className="w-full py-4 text-left flex items-center justify-between focus:outline-none"
      onClick={onClick}
    >
      <span className="text-lg font-semibold text-gray-900">{question}</span>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
      <p className="pb-4 text-gray-700">{answer}</p>
    </div>
  </div>
);

const Admissions = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const steps = [
    {
      number: "1",
      title: "Online Application",
      description: "Fill out the online application form with student and parent details.",
    },
    {
      number: "2",
      title: "Document Submission",
      description: "Submit required documents including previous academic records.",
    },
    {
      number: "3",
      title: "Entrance Test",
      description: "Appear for the entrance assessment (grade-specific).",
    },
    {
      number: "4",
      title: "Interview",
      description: "Parent and student interview with school administrators.",
    },
  ];

  const faqs = [
    {
      question: "What is the admission process for Kindergarten?",
      answer: "For Kindergarten admissions, we focus on basic interaction and observation of the child. Parents need to submit the application form along with birth certificate and vaccination records.",
    },
    {
      question: "What documents are required for CBSE admission?",
      answer: "Required documents include transfer certificate from previous school, mark sheets of last two years, birth certificate, and address proof.",
    },
    {
      question: "How can I apply for IIT-JEE coaching?",
      answer: "Students can apply for our IIT-JEE coaching program through the online application form. Selection is based on an entrance test and previous academic performance.",
    },
    {
      question: "Are there any scholarships available?",
      answer: "Yes, we offer merit-based scholarships for deserving students. The selection is based on entrance test performance and previous academic records.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Join our community of learners through a simple and transparent admission process.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-20">
          <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105">
            Apply Now
          </button>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                {...faq}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions; 