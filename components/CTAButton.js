import Link from 'next/link';

const CTAButton = ({ color, icon, children, onClick }) => {
  const colorClasses = {
    kindergarten: 'bg-gradient-to-r from-[#FF9A9E] to-[#FAD0C4] hover:from-[#FAD0C4] hover:to-[#FF9A9E]',
    school: 'bg-gradient-to-r from-[#84FAB0] to-[#8FD3F4] hover:from-[#8FD3F4] hover:to-[#84FAB0]',
    coaching: 'bg-gradient-to-r from-[#FFA07A] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFA07A]',
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${colorClasses[color]}
        group relative
        px-8 py-4 rounded-xl
        font-semibold text-white text-sm md:text-base
        transform transition-all duration-300
        hover:scale-105 hover:shadow-xl
        focus:outline-none focus:ring-4 focus:ring-opacity-50
        overflow-hidden
      `}
    >
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="text-xl group-hover:rotate-12 transition-transform">{icon}</span>}
        {children}
      </span>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity" />
    </button>
  );
};

export default CTAButton; 