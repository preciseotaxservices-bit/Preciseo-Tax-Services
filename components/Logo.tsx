
import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false, light = false }) => {
  // Brand colors extracted from the logo image
  const brandGreen = "#3ACF9B";
  const brandBlue = "#0087C1";
  const brandDarkTeal = "#003B49";

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {/* The Stylized Preciseo 'P' Icon */}
      <svg 
        width="120" 
        height="100" 
        viewBox="0 0 120 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="pIconGradient" x1="20" y1="20" x2="100" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={brandGreen} />
            <stop offset="100%" stopColor={brandBlue} />
          </linearGradient>
          <clipPath id="clipP">
            <rect width="120" height="100" fill="white"/>
          </clipPath>
        </defs>
        
        <g clipPath="url(#clipP)">
          {/* Bottom curve and stem part (Green) */}
          <path 
            d="M32 30V75C32 83.2843 38.7157 90 47 90H48" 
            stroke={brandGreen} 
            strokeWidth="18" 
            strokeLinecap="round"
          />
          
          {/* The Loop (Blue with Gradient) */}
          <path 
            d="M45 25H70C83.8071 25 95 36.1929 95 50C95 63.8071 83.8071 75 70 75H45" 
            stroke="url(#pIconGradient)" 
            strokeWidth="18" 
            strokeLinecap="round"
          />

          {/* Overlap Highlight / Internal Stem */}
          <path 
            d="M32 30V55" 
            stroke={brandGreen} 
            strokeWidth="18" 
            strokeLinecap="round"
          />
          
          {/* Lighter Green/White tint for the overlap area to show depth */}
          <path 
            d="M32 30V45" 
            stroke="white" 
            strokeWidth="18" 
            strokeOpacity="0.25"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {!iconOnly && (
        <div className="flex flex-col items-center text-center -mt-2">
          <h1 
            className={`text-5xl font-semibold tracking-tight ${light ? 'text-white' : 'text-[#003B49]'}`}
            style={{ 
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-0.02em',
              fontWeight: 600
            }}
          >
            Preciseo
          </h1>
          <p 
            className={`text-2xl font-normal ${light ? 'text-white/80' : 'text-[#003B49]'}`}
            style={{ 
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.02em',
              marginTop: '2px'
            }}
          >
            Tax Services
          </p>
        </div>
      )}
    </div>
  );
};
