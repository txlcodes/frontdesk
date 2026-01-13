
import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'white' | 'black';
}

const Logo: React.FC<LogoProps> = ({ className = '', iconOnly = false, variant = 'white' }) => {
  const colorClass = variant === 'white' ? 'text-white' : 'text-black';
  const fillClass = variant === 'white' ? 'fill-white' : 'fill-black';

  return (
    <div className={`flex items-center gap-3 ${className} ${colorClass}`}>
      <div className="relative w-8 h-8 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
          {/* Shield Shape */}
          <path d="M50 5 L15 20 C15 20 15 55 15 65 C15 85 50 95 50 95 C50 95 85 85 85 65 C85 55 85 20 85 20 L50 5 Z" />
          
          {/* Headset Arch - Inverse (Black) */}
          <path d="M50 30 C35 30 28 40 28 50 L28 55" fill="none" stroke={variant === 'white' ? 'black' : 'white'} strokeWidth="5" strokeLinecap="round" />
          
          {/* Headset Earmuffs */}
          <rect x="23" y="50" width="10" height="18" rx="4" fill={variant === 'white' ? 'black' : 'white'} />
          <rect x="67" y="50" width="10" height="18" rx="4" fill={variant === 'white' ? 'black' : 'white'} />
          
          {/* Headset Mic */}
          <path d="M72 65 C72 75 60 82 55 82" fill="none" stroke={variant === 'white' ? 'black' : 'white'} strokeWidth="4" strokeLinecap="round" />
          <circle cx="53" cy="82" r="3" fill={variant === 'white' ? 'black' : 'white'} />

          {/* Speech Bubble */}
          <rect x="36" y="42" width="28" height="22" rx="6" fill={variant === 'white' ? 'black' : 'white'} />
          <path d="M45 64 L40 70 L50 64 Z" fill={variant === 'white' ? 'black' : 'white'} />
          
          {/* Dots */}
          <circle cx="43" cy="53" r="2" fill={variant === 'white' ? 'white' : 'black'} />
          <circle cx="50" cy="53" r="2" fill={variant === 'white' ? 'white' : 'black'} />
          <circle cx="57" cy="53" r="2" fill={variant === 'white' ? 'white' : 'black'} />
        </svg>
      </div>
      {!iconOnly && (
        <span className="text-xl font-black tracking-tighter uppercase leading-none">FrontDesk</span>
      )}
    </div>
  );
};

export default Logo;
