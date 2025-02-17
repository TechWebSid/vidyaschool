const ContactCard = ({ icon, title, content }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="text-gray-700 space-y-1">
          {Array.isArray(content) ? content.map((item, index) => (
            <p key={index}>{item}</p>
          )) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  </div>
);

const SocialLink = ({ icon, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
  >
    <span className="text-xl">{icon}</span>
    <span>{label}</span>
  </a>
);

const Contact = () => {
  const locations = [
    {
      icon: "🏫",
      title: "Main Campus",
      content: [
        "123 Education Street,",
        "Knowledge Park, City - 400001",
        "Maharashtra, India",
      ],
    },
    {
      icon: "📞",
      title: "Contact Numbers",
      content: [
        "Main: +91 123-456-7890",
        "Admissions: +91 098-765-4321",
        "Support: +91 123-789-4560",
      ],
    },
    {
      icon: "✉️",
      title: "Email Addresses",
      content: [
        "info@vidyainternational.com",
        "admissions@vidyainternational.com",
        "support@vidyainternational.com",
      ],
    },
  ];

  const socialLinks = [
    { icon: "📱", label: "Facebook", href: "#" },
    { icon: "📸", label: "Instagram", href: "#" },
    { icon: "🐦", label: "Twitter", href: "#" },
    { icon: "💼", label: "LinkedIn", href: "#" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Get in touch with us for any queries about admissions, academics, or campus life.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <ContactCard key={index} {...location} />
          ))}
        </div>

        {/* Social Media Links */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Connect With Us</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} {...link} />
            ))}
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0079635362144!2d72.8662369!3d19.1070838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzI1LjUiTiA3MsKwNTEnNTguNSJF!5e0!3m2!1sen!2sin!4v1629789876543!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact; 