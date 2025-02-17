const FooterSection = ({ title, children }) => (
  <div className="space-y-3">
    <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
    <div className="space-y-2 text-gray-300">
      {children}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 w-full">
      {/* Main Footer */}
      <div className="container">
        <div className="py-12 px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-pink-400 to-pink-300 flex items-center justify-center text-white font-bold text-xl sm:text-2xl">
                  V
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white">Vidya International</h2>
                  <p className="text-xs sm:text-sm text-gray-300">Excellence in Education</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-4">
                Nurturing minds, building futures, and creating leaders of tomorrow.
              </p>
            </div>

            {/* Quick Links */}
            <FooterSection title="Quick Links">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <a href="/kindergarten" className="hover:text-pink-300 transition-colors">Kindergarten</a>
                <a href="/school" className="hover:text-pink-300 transition-colors">CBSE School</a>
                <a href="/coaching" className="hover:text-pink-300 transition-colors">IIT-JEE</a>
                <a href="/about" className="hover:text-pink-300 transition-colors">About Us</a>
                <a href="/admissions" className="hover:text-pink-300 transition-colors">Admissions</a>
                <a href="/contact" className="hover:text-pink-300 transition-colors">Contact</a>
              </div>
            </FooterSection>

            {/* Contact Info */}
            <FooterSection title="Contact Us">
              <div className="space-y-2 text-sm">
                <p>123 Education Street,</p>
                <p>Knowledge Park, City - 400001</p>
                <p>Maharashtra, India</p>
                <p className="mt-3">📞 +91 123-456-7890</p>
                <p>✉️ contact@school.com</p>
              </div>
            </FooterSection>

            {/* Connect */}
            <FooterSection title="Connect With Us">
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 hover:bg-pink-400 transition-colors flex items-center justify-center text-white">
                  <span className="text-base sm:text-lg">📱</span>
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 hover:bg-pink-400 transition-colors flex items-center justify-center text-white">
                  <span className="text-base sm:text-lg">📸</span>
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 hover:bg-pink-400 transition-colors flex items-center justify-center text-white">
                  <span className="text-base sm:text-lg">🐦</span>
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 hover:bg-pink-400 transition-colors flex items-center justify-center text-white">
                  <span className="text-base sm:text-lg">💼</span>
                </a>
              </div>
            </FooterSection>
          </div>
        </div>
      </div>

      {/* Credits Section */}
      <div className="border-t border-gray-800">
        <div className="container">
          <div className="py-4 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
              <p>© 2024 Vidya International School. All rights reserved.</p>
              
              {/* Developer Credits with Hover Effect */}
              <a 
                href="https://easy2buyhub.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-4 sm:px-6 py-2 overflow-hidden rounded-full transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-2 text-xs sm:text-sm">
                  <span>Designed & Developed by</span>
                  <span className="font-semibold group-hover:text-white transition-colors">SNT Rudra Tech LLP</span>
                  <span className="hidden sm:inline">|</span>
                  <span className="hidden sm:inline">+91 8957035412</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;