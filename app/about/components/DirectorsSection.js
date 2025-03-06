import React from 'react';

const directors = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Academic Director",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "20+ years of experience in IIT JEE coaching with expertise in Physics",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Dr. Priya Sharma",
    role: "Technology Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "AI/ML expert with PhD from IIT Delhi, leading our tech innovations",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Prof. Amit Verma",
    role: "Research Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "Former IIT professor with extensive research in educational technology",
    linkedin: "#",
    twitter: "#"
  }
];

export function DirectorsSection() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Directors</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from the best minds in education and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {directors.map((director, index) => (
            <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-teal-100">
                  <img 
                    src={director.image} 
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{director.name}</h3>
                <p className="text-teal-600 font-medium mb-4">{director.role}</p>
                <p className="text-gray-600 text-center mb-6">{director.description}</p>
                <div className="flex space-x-4">
                  <a href={director.linkedin} className="text-gray-600 hover:text-teal-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href={director.twitter} className="text-gray-600 hover:text-teal-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 