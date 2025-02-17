const InstitutionCard = ({ title, description, icon, color, buttonText }) => (
  <div className={`p-8 rounded-2xl transition-all duration-300 hover:shadow-xl ${color}`}>
    <div className="space-y-4">
      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 px-6 py-2 bg-white rounded-full text-black font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
        {buttonText}
      </button>
    </div>
  </div>
);

const Institutions = () => {
  const institutions = [
    {
      title: "Kindergarten – A Fun Start to Learning",
      description: "A joyful, activity-based learning experience for young minds.",
      icon: "🎨",
      color: "bg-gradient-to-br from-[#FF9A9E] to-[#FAD0C4]",
      buttonText: "Explore Kindergarten",
      link: "/kindergarten",
    },
    {
      title: "CBSE School – Strong Foundation for Academic Success",
      description: "Comprehensive CBSE curriculum with experienced teachers.",
      icon: "📚",
      color: "bg-gradient-to-br from-[#84FAB0] to-[#8FD3F4]",
      buttonText: "Learn More",
      link: "/school",
    },
    {
      title: "IIT JEE Coaching – Preparing Future Leaders",
      description: "Focused coaching with expert faculty and top-tier resources.",
      icon: "🎯",
      color: "bg-gradient-to-br from-[#FFA07A] to-[#FFD700]",
      buttonText: "Start Preparing",
      link: "/coaching",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Institutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our three specialized institutions, each designed to provide the best education at every stage of learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutions.map((institution, index) => (
            <InstitutionCard key={index} {...institution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Institutions; 