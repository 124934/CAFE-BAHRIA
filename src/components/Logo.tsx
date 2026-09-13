import React, { useState } from 'react';
import cafeLogoImg from '../assets/images/regenerated_image_1789282708688.png';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'cream';
  compact?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark', compact = false }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`flex items-center gap-3 cursor-pointer select-none ${className}`}>
      {/* Official Cafe Bahria Golden Circular Logo */}
      <div className="relative flex items-center justify-center shrink-0">
        {!imgError ? (
          <div className="relative rounded-full p-0.5 bg-gradient-to-tr from-[#D4A373] via-[#FAF7F2] to-[#8C5D35] shadow-md hover:shadow-lg transition-all duration-300">
            <img
              src={cafeLogoImg}
              alt="Cafe Bahria Official Logo"
              className={`${compact ? 'h-10 w-10' : 'h-12 w-12 md:h-14 md:w-14'} rounded-full object-cover shadow-inner`}
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <div className="relative rounded-full p-0.5 bg-gradient-to-tr from-[#D4A373] to-[#8C5D35] shadow-md">
            <img
              src="/logo.png"
              alt="Cafe Bahria Official Logo"
              className={`${compact ? 'h-10 w-10' : 'h-12 w-12 md:h-14 md:w-14'} rounded-full object-cover`}
              onError={() => setImgError(true)}
            />
          </div>
        )}
      </div>

      {/* Text Branding */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`tracking-wider font-bold uppercase transition-colors ${
              compact ? 'text-lg' : 'text-xl md:text-2xl'
            } ${
              variant === 'cream' ? 'text-[#FAF7F2]' : 'text-[#2C1810]'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Cafe Bahria
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className={`text-[10px] font-semibold tracking-widest uppercase ${
              variant === 'cream' ? 'text-[#C48F56]' : 'text-[#8A5A36]'
            }`}
          >
            Bahria Town • Karachi
          </span>
        </div>
      </div>
    </div>
  );
};
