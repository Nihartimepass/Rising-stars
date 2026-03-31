import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto", variant = 'light' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Background Swoosh */}
        <path
          d="M100 400C150 420 250 400 300 300C350 200 300 100 250 80"
          stroke="#1E40AF"
          strokeWidth="20"
          strokeLinecap="round"
          strokeOpacity="0.2"
        />
        
        {/* Main Swoosh Trail */}
        <path
          d="M80 380C120 400 220 380 280 280"
          stroke="url(#trailGradient)"
          strokeWidth="30"
          strokeLinecap="round"
        />
        
        {/* The Arrow */}
        <path
          d="M120 350L380 120"
          stroke="#F27D26"
          strokeWidth="25"
          strokeLinecap="round"
        />
        <path
          d="M350 120L385 115L380 150"
          fill="#F27D26"
        />

        {/* The Main Star */}
        <path
          d="M300 150L320 210L380 210L330 250L350 310L300 270L250 310L270 250L220 210L280 210L300 150Z"
          fill="url(#starGradient)"
          stroke="#1E40AF"
          strokeWidth="8"
          strokeLinejoin="round"
        />

        {/* Smaller Decorative Stars */}
        <path d="M420 180L425 195L440 195L428 205L433 220L420 210L407 220L412 205L400 195L415 195L420 180Z" fill="#1E40AF" />
        <path d="M200 100L205 115L220 115L208 125L213 140L200 130L187 140L192 125L180 115L195 115L200 100Z" fill="#F27D26" />
        <path d="M150 250L153 260L163 260L155 267L158 277L150 270L142 277L145 267L137 260L147 260L150 250Z" fill="#1E40AF" opacity="0.6" />

        <defs>
          <linearGradient id="starGradient" x1="220" y1="150" x2="380" y2="310" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBBF24" />
            <stop offset="1" stopColor="#F27D26" />
          </linearGradient>
          <linearGradient id="trailGradient" x1="80" y1="380" x2="280" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E40AF" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="flex flex-col leading-none">
        <span className={`text-2xl font-black tracking-tighter ${variant === 'light' ? 'text-slate-900' : 'text-white'}`}>
          <span className="text-orange-600">RISING</span> STARS
        </span>
        <span className={`text-[8px] font-bold tracking-[0.2em] uppercase ${variant === 'light' ? 'text-slate-500' : 'text-slate-400'}`}>
          Empowering Minds • Igniting Future
        </span>
      </div>
    </div>
  );
};
