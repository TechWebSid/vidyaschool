'use client'

const ProcessStep = ({ number, title, description, icon }) => (
  <div className="relative pl-8 pb-8 last:pb-0">
    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-teal-500 to-cyan-500 last:hidden"></div>
    <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold">
      {number}
    </div>
    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const DateCard = ({ month, dates, event }) => (
  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="text-lg font-semibold text-teal-600 mb-2">{month}</div>
    <div className="text-2xl font-bold text-gray-900 mb-2">{dates}</div>
    <div className="text-gray-700">{event}</div>
  </div>
);

const AdmissionProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Fill Online Application",
      description: "Complete the online application form with student and parent details.",
      icon: "📝"
    },
    {
      number: "2",
      title: "Attend Counseling",
      description: "Schedule and attend a counseling session with our academic team.",
      icon: "📞"
    },
    {
      number: "3",
      title: "Submit Documents",
      description: "Submit required documents including previous academic records.",
      icon: "📑"
    },
    {
      number: "4",
      title: "Admission Confirmation",
      description: "Receive admission confirmation and complete the enrollment process.",
      icon: "✅"
    }
  ];

  const importantDates = [
    {
      month: "January",
      dates: "15-31",
      event: "Early Admission Window"
    },
    {
      month: "February",
      dates: "1-28",
      event: "Regular Admissions"
    },
    {
      month: "March",
      dates: "1-15",
      event: "Late Admissions"
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
            Admission{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Process
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Join our community through a simple and transparent admission process.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-3xl mx-auto mb-16">
          {steps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>

        {/* Important Dates */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Important Dates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {importantDates.map((date, index) => (
              <DateCard key={index} {...date} />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess; 