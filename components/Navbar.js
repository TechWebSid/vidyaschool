'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'PreSchool', href: '/preschool' },
    { name: 'CBSE School', href: '/school' },
    { name: 'IIT-JEE', href: '/iit' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    {name: 'labs' , href: '/labs'},
    {name: 'Mentorship', href: '/mentorship'}
  ];

  return (
    <nav className="fixed w-full z-50">
      {/* Navbar Background */}
      <div 
        className={`absolute inset-x-0 transition-all duration-300 ${
          isScrolled && !isOpen ? 'py-2' : 'py-4'
        }`}
      >
        <div className={`container mx-auto transition-all duration-300 ${
          isScrolled && !isOpen ? 'bg-white/95 shadow-lg backdrop-blur-lg rounded-full' : ''
        }`}>
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between">
              {/* Logo and School Name */}
              <Link 
                href="/" 
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                  <img 
                    src="/images/logo.jpg" 
                    alt="Easy2BuyHub Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-base sm:text-lg font-bold text-gray-900">
                    Vidya International
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600">Excellence in Education</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 rounded-full text-gray-700 hover:text-gray-900 hover:bg-pink-50 transition-all relative group"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className="absolute right-4 top-4 text-2xl text-gray-600">
                    {isOpen ? '×' : '☰'}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-white transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Logo Section in Mobile Menu */}
        <div className="pt-6 px-6 pb-8 border-b border-gray-100">
          <Link 
            href="/" 
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src="/images/logo.jpg" 
                alt="vidya Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-base font-bold text-gray-900">
                Vidya International
              </h1>
              <p className="text-xs text-gray-600">Excellence in Education</p>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Links */}
        <div className="px-6 py-8">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 