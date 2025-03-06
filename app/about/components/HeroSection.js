import React from 'react';

export function HeroSection() {
  return (
    <div className="relative bg-[#f0faf9] min-h-[90vh] overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1 rounded-full">
                About Us
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Empowering </span>
              <span className="text-teal-600">Future Leaders</span>
              <span className="text-gray-900"> with AI-Driven Education</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl">
              Experience excellence in education through our innovative AI-powered learning platform, expert mentors, and personalized approach to IIT-JEE preparation.
            </p>

            <div className="flex gap-4">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                Explore Programs
              </button>
              <button className="bg-white text-teal-600 px-8 py-3 rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors">
                Meet Our Team
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600">15+</div>
                <div className="text-sm text-gray-600">Years Legacy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600">100+</div>
                <div className="text-sm text-gray-600">Expert Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600">24/7</div>
                <div className="text-sm text-gray-600">AI Support</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-teal-600/0 rounded-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
              alt="Students learning with AI technology"
              className="rounded-3xl shadow-2xl object-cover h-[600px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}