const FooterSection = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-white relative inline-block">
      {title}
      <span className="absolute -bottom-2 left-0 w-12 h-1 bg-pink-500 rounded-full"></span>
    </h3>
    <div className="text-gray-300">
      {children}
    </div>
  </div>
);

const ContactBlock = ({ title, address, contact }) => (
  <div className="group hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300">
    <h4 className="text-pink-400 font-semibold mb-2">{title}</h4>
    <div className="space-y-2">
      <p className="text-gray-300 text-sm flex items-start gap-3">
        <span className="text-pink-400 mt-1">📍</span>
        <span>{address}</span>
      </p>
      <p className="text-gray-300 text-sm flex items-center gap-3">
        <span className="text-pink-400">📞</span>
        <span>{contact}</span>
      </p>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-[#0f1729] relative">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"></div>

      {/* Main Footer */}
      <div className="container mx-auto">
        <div className="py-16 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* School Info */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  V
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Vidya International</h2>
                  <p className="text-sm text-pink-400">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nurturing minds, building futures, and creating leaders of tomorrow through innovative education and personalized learning experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <FooterSection title="Quick Links">
                <div className="grid gap-3 text-sm">
                  {[
                    { name: 'Pre School', path: '/preschool' },
                    { name: 'CBSE School', path: '/school' },
                    { name: 'IIT-JEE', path: '/iit' },
                    { name: 'About Us', path: '/about' },
                    { name: 'Admissions', path: '/admissions' },
                    { name: 'Contact', path: '/contact' }
                  ].map((link) => (
                    <a 
                      key={link.name} 
                      href={link.path}
                      className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2"
                    >
                      <span className="text-pink-400">→</span>
                      {link.name}
                    </a>
                  ))}
                </div>
              </FooterSection>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5">
              <FooterSection title="Our Institutions">
                <div className="space-y-4">
                  <ContactBlock 
                    title="Vidya Pre School"
                    address="Kalyan Peth, Junnar, 410502"
                    contact="9022563653"
                  />
                  <ContactBlock 
                    title="Vidya International School"
                    address="Ballalwadi (Pangharimatha), Junnar 410502"
                    contact="7798842583"
                  />
                  <ContactBlock 
                    title="Vidya Tutorials"
                    address="Vidya Mandir, Shankar Pura Peth, Junnar 410502"
                    contact="9112094119 / 9165581665"
                  />
                </div>
              </FooterSection>
            </div>

            {/* Connect */}
            <div className="lg:col-span-2">
              <FooterSection title="Connect With Us">
                <div className="grid grid-cols-2 gap-4">
                  {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="group flex items-center justify-center p-3 rounded-lg bg-gray-800/50 hover:bg-pink-500 transition-all duration-300"
                    >
                      <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                        {social === 'Facebook' && '📱'}
                        {social === 'Instagram' && '📸'}
                        {social === 'Twitter' && '🐦'}
                        {social === 'LinkedIn' && '💼'}
                      </span>
                    </a>
                  ))}
                </div>
              </FooterSection>
            </div>
          </div>
        </div>
      </div>

      {/* Credits Section */}
      <div className="border-t border-gray-800/50">
        <div className="container mx-auto">
          <div className="py-6 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Vidya International School. All rights reserved.
              </p>
              
              <a 
                href="https://easy2buyhub.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-6 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-400 group-hover:text-white transition-colors">Designed & Developed by</span>
                  <span className="font-semibold text-white">SNT Rudra Tech LLP</span>
                  <span className="hidden sm:inline text-gray-400 group-hover:text-white">|</span>
                  <span className="hidden sm:inline text-gray-400 group-hover:text-white">+91 8957035412</span>
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