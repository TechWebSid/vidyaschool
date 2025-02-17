'use client'
import { useState } from 'react';

const BatchCard = ({ title, timing, days, strength, status }) => (
  <div className="group">
    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-700">{timing}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
          status === 'Available' 
            ? 'bg-green-100 text-green-800'
            : 'bg-orange-100 text-orange-800'
        }`}>
          {status}
        </div>
      </div>
      <div className="space-y-2 text-gray-700">
        <p>Days: {days}</p>
        <p>Batch Strength: {strength}</p>
      </div>
    </div>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="relative pl-8 pb-8 last:pb-0">
    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-violet-500 to-purple-500 last:hidden"></div>
    <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold">
      {number}
    </div>
    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const BatchInfo = () => {
  const batches = [
    {
      title: "Morning Batch",
      timing: "6:00 AM - 8:00 AM",
      days: "Mon to Sat",
      strength: "30 students",
      status: "Available"
    },
    {
      title: "Evening Batch",
      timing: "4:00 PM - 6:00 PM",
      days: "Mon to Sat",
      strength: "30 students",
      status: "Few Seats Left"
    },
    {
      title: "Weekend Batch",
      timing: "9:00 AM - 4:00 PM",
      days: "Sat & Sun",
      strength: "25 students",
      status: "Available"
    }
  ];

  const admissionSteps = [
    {
      title: "Online Registration",
      description: "Fill out the online application form with basic details and academic information."
    },
    {
      title: "Entrance Test",
      description: "Take our screening test to evaluate your current preparation level."
    },
    {
      title: "Counseling Session",
      description: "One-on-one discussion with our academic experts to understand your goals."
    },
    {
      title: "Batch Allocation",
      description: "Get assigned to the most suitable batch based on your performance and preferences."
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
        {/* Batch Timings */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Batch{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                Timings
              </span>
            </h2>
            <p className="text-lg text-gray-700">
              Choose from our flexible batch timings designed to fit your schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {batches.map((batch, index) => (
              <BatchCard key={index} {...batch} />
            ))}
          </div>
        </div>

        {/* Admission Process */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Admission{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                Process
              </span>
            </h2>
            <p className="text-lg text-gray-700">
              Simple steps to start your journey towards IIT-JEE success.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {admissionSteps.map((step, index) => (
              <StepCard
                key={index}
                number={index + 1}
                {...step}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-violet-500 hover:to-purple-500">
              Start Admission Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatchInfo; 