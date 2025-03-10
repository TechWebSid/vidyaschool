const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              About Us – Nurturing Excellence from the Start
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Our institution provides a holistic learning environment for students, starting from their early years in Kindergarten, progressing through CBSE education, and advancing to IIT JEE coaching. Our mission is to foster curiosity, critical thinking, and success in every child.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FF9A9E]/10 flex items-center justify-center text-[#FF9A9E]">
                  🎯
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Our Vision</h3>
                  <p className="text-gray-600">To be the leading institution in shaping future leaders through holistic education.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#84FAB0]/10 flex items-center justify-center text-[#84FAB0]">
                  🌟
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Our Mission</h3>
                  <p className="text-gray-600">To provide quality education that nurtures creativity, critical thinking, and character.</p>
                </div>
              </div>
            </div>

            <a href="/about">
              <button className="mt-6 px-8 py-3 bg-gradient-to-r from-[#FF9A9E] to-[#FAD0C4] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Learn More About Us
              </button>
            </a>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9A9E]/20 to-[#FAD0C4]/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b"
                alt="Students at Vidya International School"
                className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 