import React from 'react';
import Link from 'next/link';

const directors = [
  {
    name: "Mr. Vishwas Bhalekar",
  
    image: "/images/d1.jpg",
    description: "20+ years of experience in IIT JEE coaching with expertise in Physics",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Mr. Mohan Gadekar",
 
    image: "/images/d2.jpg",
    description: "AI/ML expert with PhD from IIT Delhi, leading our tech innovations",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Mrs. Vaishali Bhalekar",
  
    image: "/images/d3.jpg",
    description: "Former IIT professor with extensive research in educational technology",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Mrs. Akshata Gadekar",
  
    image: "/images/d4.jpg",
    description: "Former IIT professor with extensive research in educational technology",
    linkedin: "#",
    twitter: "#"
  }
];

export function DirectorsSection() {
  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-white to-teal-50 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Directors</h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from the best minds in education and technology
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-7xl mx-auto">
          {directors.map((director, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-[250px]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-100 rounded-full -mr-12 -mt-12 opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative flex flex-col items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 ring-4 ring-teal-100">
                  <img 
                    src={director.image} 
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center">{director.name}</h3>
                <div className="flex space-x-4">
                  <a href={director.linkedin} className="text-gray-600 hover:text-teal-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href={director.twitter} className="text-gray-600 hover:text-teal-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Connect With Our Directors
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 