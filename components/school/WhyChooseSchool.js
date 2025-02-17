'use client'

const FeatureCard = ({ icon, title, description }) => (
  <div className="group">
    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full transform group-hover:scale-105">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const WhyChooseSchool = () => {
  const features = [
    {
      icon: "📚",
      title: "CBSE-Approved Curriculum",
      description: "Following the latest CBSE guidelines with a focus on conceptual understanding and practical application."
    },
    {
      icon: "👨‍🏫",
      title: "Highly Qualified Faculty",
      description: "Experienced educators with advanced degrees and continuous professional development."
    },
    {
      icon: "💻",
      title: "Smart Classrooms & Labs",
      description: "State-of-the-art facilities with interactive learning tools and modern laboratory equipment."
    },
    {
      icon: "🏃‍♂️",
      title: "Sports & Activities",
      description: "Comprehensive sports program and diverse extracurricular activities for holistic development."
    },
    {
      icon: "🎯",
      title: "Career Development",
      description: "Regular career counseling, personality development workshops, and skill enhancement programs."
    },
    {
      icon: "🌟",
      title: "Individual Attention",
      description: "Small class sizes ensuring personalized attention and mentoring for each student."
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
            Why Choose Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              CBSE School?
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Experience excellence in education with our comprehensive approach to learning and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Recognition Banner */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white text-3xl">
              🏆
            </div>
            <p className="text-xl font-semibold text-gray-900">
              Recognized as one of the top CBSE schools in the region
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSchool; 