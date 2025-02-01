import { useState } from 'react';

const GlowingIcon = ({ className = '', size = 14, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        w-7 h-7 
        sm:w-6 sm:h-6 
        md:w-6 md:h-6 
        lg:w-9 lg:h-9
        cursor-pointer 
        transition-all duration-300 
        ${className} 
        ${isHovered ? 'scale-125' : 'scale-100'}
        hover:animate-pulse
      `}
      style={{
        filter: isHovered 
          ? 'drop-shadow(0 0 12px rgba(122, 135, 251, 0.8))' 
          : 'drop-shadow(0 0 4px rgba(122, 135, 251, 0.3))',
      }}
      {...props}
    >
      7A87FB
      <defs>
        <linearGradient id="hoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD49C" />
          <stop offset="100%" stopColor="#7A87FB" />
        </linearGradient>
      </defs>

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 14C6.986 10.1388 3.85739 7.01297 0 7.01297C3.86599 7.01297 7 3.87312 7 0C7.01394 3.86124 10.1426 6.98703 14 6.98703C10.1339 6.98703 7 10.1269 7 14Z"
        fill={isHovered ? "url(#hoverGradient)" : "white"}
        className="transition-colors duration-300"
      />
    </svg>
  );
};

export default GlowingIcon;