import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'footer' | 'symbol' | 'banner';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '' }) => {
  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/divyarsh_emblem.svg"
          alt="Divyarsh Health Care Institute Emblem"
          className="w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 object-contain drop-shadow-xs"
          loading="eager"
        />
      </div>
    );
  }

  // Exact 1:1 match to uploaded logo:
  // Render high-fidelity SVG banner
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/divyarsh_logo.svg"
        alt="Divyarsh Health Care Institute - Healthcare Services & Education - NGO Regd. No. 191267"
        className="h-10 sm:h-12 md:h-13 w-auto max-w-[280px] sm:max-w-[360px] md:max-w-none object-contain drop-shadow-xs"
        loading="eager"
      />
    </div>
  );
};



