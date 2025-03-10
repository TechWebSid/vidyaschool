import { ContactHero } from './components/ContactHero';
// import { ContactForm } from './components/ContactForm';
// import { LocationInfo } from './components/LocationInfo';
import { SocialConnect } from './components/SocialConnect';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactCard = ({ title, address, contact, icon, color }) => (
  <div className={`p-6 rounded-2xl ${color} hover:scale-[1.02] transition-all duration-300`}>
    <div className="flex flex-col h-full">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <div className="space-y-3 mt-auto">
        <p className="text-gray-100 text-sm flex items-start gap-3">
          <span className="text-white/80 mt-1">📍</span>
          <span>{address}</span>
        </p>
        <p className="text-gray-100 text-sm flex items-center gap-3">
          <span className="text-white/80">📞</span>
          <span>{contact}</span>
        </p>
      </div>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      {/* <ContactForm /> */}
      {/* <LocationInfo /> */}
      <SocialConnect />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with our institutions for admissions and inquiries. We're here to guide you towards excellence in education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <ContactCard 
              title="Vidya Pre School"
              address="Kalyan Peth, Junnar, 410502"
              contact="9022563653"
              icon="🎨"
              color="bg-gradient-to-br from-pink-500 to-purple-600"
            />
            <ContactCard 
              title="Vidya International School"
              address="Ballalwadi (Pangharimatha), Junnar 410502"
              contact="7798842583"
              icon="🎓"
              color="bg-gradient-to-br from-blue-500 to-indigo-600"
            />
            <ContactCard 
              title="Vidya Tutorials"
              address="Vidya Mandir, Shankar Pura Peth, Junnar 410502"
              contact="9112094119 / 9165581665"
              icon="📚"
              color="bg-gradient-to-br from-teal-500 to-emerald-600"
            />
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-2xl">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-white mb-3">Working Hours</h3>
              <div className="space-y-2 text-gray-100">
                <p className="text-sm">Monday - Saturday</p>
                <p className="text-sm">8:00 AM - 6:00 PM</p>
                <p className="text-sm italic mt-4">Closed on Sundays & Public Holidays</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-6 rounded-2xl">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
              <div className="space-y-2 text-gray-100">
                <p className="text-sm">For General Inquiries:</p>
                <p className="text-sm">info@vidyainternational.com</p>
                <p className="text-sm mt-4">For Admissions:</p>
                <p className="text-sm">admissions@vidyainternational.com</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-6 rounded-2xl">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-3">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex items-center justify-center p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    <span className="text-xl">
                      {social === 'Facebook' && '📱'}
                      {social === 'Instagram' && '📸'}
                      {social === 'Twitter' && '🐦'}
                      {social === 'LinkedIn' && '💼'}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        
        </div>
      </div>
      <Footer />
    </main>
  );
}
