"use client";
import { useEffect } from "react";

const PreschoolHero = () => {
  useEffect(() => {
    // Add animation classes after component mount
    const elements = document.querySelectorAll(".animate-on-mount");
    elements.forEach((el) => {
      el.classList.add("translate-y-0", "opacity-100");
    });
  }, []);

  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Balloons */}
        <div className="absolute -top-8 left-1/4 w-16 h-16 bg-pink-200 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-yellow-200 rounded-full animate-float-delayed opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-purple-200 rounded-full animate-float opacity-60"></div>

        {/* Clouds */}
        <div className="absolute top-1/4 right-0 w-32 h-16 bg-white rounded-full blur-lg opacity-60 animate-float"></div>
        <div className="absolute bottom-1/3 left-0 w-24 h-12 bg-white rounded-full blur-lg opacity-60 animate-float-delayed"></div>

        {/* Stars */}
        <div className="absolute top-1/2 right-1/3 text-yellow-400 text-2xl animate-twinkle">
          ✦
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-pink-400 text-xl animate-twinkle-delayed">
          ✦
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 
                            text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600
                            animate-on-mount transform translate-y-8 opacity-0 transition-all duration-700 ease-out"
              >
                Where Little Minds Grow & Shine!
              </h1>
              <p
                className="text-xl text-gray-700 mb-8 
                           animate-on-mount transform translate-y-8 opacity-0 transition-all duration-700 delay-200 ease-out"
              >
                A Fun-Filled, Nurturing Environment for Your Child's First
                Learning Steps
              </p>
              <button
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white 
                               rounded-full text-lg font-semibold shadow-lg 
                               hover:shadow-xl hover:scale-105 transform
                               animate-on-mount translate-y-8 opacity-0 transition-all duration-700 delay-400 ease-out"
              >
                Enroll Now
              </button>
            </div>

            {/* Image */}
            <div className="relative animate-on-mount transform translate-y-8 opacity-0 transition-all duration-700 delay-200 ease-out">
              <div className="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b"
                  alt="Happy children playing and learning"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats Cards */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-500">15+</div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-purple-500">
                      1:8
                    </div>
                    <div className="text-sm text-gray-600">Teacher Ratio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-500">100%</div>
                    <div className="text-sm text-gray-600">Happy Kids</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,146.53,111.31,216.6,92.83,271.15,78.45,326.09,64,383.78,56.44Z"
            fill="currentColor"
            className="text-pink-50"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default PreschoolHero;
