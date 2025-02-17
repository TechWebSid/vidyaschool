const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-gray-50 transition-all duration-300">
    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF9A9E]/20 to-[#FAD0C4]/20 flex items-center justify-center text-2xl">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: "👨‍🏫",
      title: "Experienced Faculty",
      description: "Our teachers bring years of expertise and passion for education.",
    },
    {
      icon: "🎓",
      title: "Interactive Learning",
      description: "Engaging classroom activities to enhance understanding.",
    },
    {
      icon: "💻",
      title: "Smart Classrooms",
      description: "Technology-driven learning environments with modern tools.",
    },
    {
      icon: "📈",
      title: "100% Exam Success Rate",
      description: "Proven track record of excellent academic results.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Vidya International School, we provide a unique blend of traditional values and modern education methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600 bg-gray-100 px-6 py-3 rounded-full">
            <span className="text-2xl">🏆</span>
            <span className="font-semibold">Recognized as one of the top schools in the region</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 