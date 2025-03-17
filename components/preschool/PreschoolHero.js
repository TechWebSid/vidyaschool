"use client";
import { useEffect } from "react";
import Link from 'next/link';
import { animate, stagger, inView } from "motion";

const PreschoolHero = () => {
  useEffect(() => {
    // Animate elements on mount
    animate(
      ".hero-element",
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.8, delay: stagger(0.2) }
    );

    // Animate floating elements
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach((el, i) => {
      animate(
        el,
        { y: ["0%", "-20%"] },
        { duration: 2, delay: i * 0.2, repeat: Infinity, direction: "alternate", easing: "ease-in-out" }
      );
    });

    // Add scroll animations
    inView(".scroll-animate", ({ target }) => {
      animate(target, { opacity: [0, 1], y: [50, 0] }, { duration: 0.6 });
    });
  }, []);

  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 relative overflow-hidden bg-gradient-to-b from-blue-50 to-pink-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Balloons */}
        <div className="floating absolute -top-8 left-1/4 w-16 h-16">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-pink-400 to-pink-500 shadow-lg"></div>
          <div className="w-1 h-12 bg-pink-300 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
        
        <div className="floating absolute top-1/3 right-10 w-12 h-12" style={{ animationDelay: '1s' }}>
          <div className="w-full h-full rounded-full bg-gradient-to-b from-yellow-300 to-yellow-400 shadow-lg"></div>
          <div className="w-1 h-10 bg-yellow-200 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* Twinkling Stars */}
        <div className="absolute top-20 right-20 text-yellow-400 text-2xl animate-twinkle">✦</div>
        <div className="absolute bottom-32 left-20 text-pink-400 text-xl animate-twinkle" style={{ animationDelay: '1s' }}>✦</div>
        <div className="absolute top-40 left-1/3 text-purple-400 text-2xl animate-twinkle" style={{ animationDelay: '2s' }}>✦</div>

        {/* Soft Clouds */}
        <div className="floating absolute top-1/4 right-0 w-32 h-16">
          <div className="w-full h-full rounded-full bg-white/60 blur-lg"></div>
        </div>
        <div className="floating absolute bottom-1/3 left-0 w-24 h-12" style={{ animationDelay: '1.5s' }}>
          <div className="w-full h-full rounded-full bg-white/60 blur-lg"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="hero-element text-5xl sm:text-6xl lg:text-7xl font-['Poppins'] font-bold mb-6 
                            bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-transparent bg-clip-text
                            leading-tight">
                Where Little Minds Grow & Shine!
              </h1>
              <p className="hero-element text-xl text-gray-700 mb-8 font-['Poppins']">
                A Fun-Filled, Nurturing Environment for Your Child's First
                Learning Steps 🌟
              </p>
              <Link href="/contact">
                <button className="hero-element px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 
                                 rounded-full text-lg font-semibold text-white
                                 transform hover:scale-110 hover:rotate-1 transition-all duration-300
                                 shadow-lg hover:shadow-xl border-2 border-white/50">
                  Enroll Now ✨
                </button>
              </Link>
            </div>

            {/* Image - Keeping the original */}
            <div className="relative hero-element">
              <div className="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden shadow-2xl 
                            transform hover:scale-[1.02] transition-transform duration-300
                            border-4 border-white/80">
                <img
                  src="/images/pre.jpg"
                  alt="Happy children playing and learning"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats Cards */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl
                              border-2 border-pink-100">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-500">15+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <div className="text-2xl font-bold text-purple-500">1:8</div>
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
      </div>

      {/* Playful Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,146.53,111.31,216.6,92.83,271.15,78.45,326.09,64,383.78,56.44Z"
                fill="currentColor" className="text-pink-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default PreschoolHero;
