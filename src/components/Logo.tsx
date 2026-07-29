import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  lightMode?: boolean;
}

export default function Logo({ className = "", size = 48, showText = true, lightMode = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* SVG Logo Container */}
      <div 
        style={{ width: size, height: size }} 
        className="relative flex-shrink-0 select-none hover:scale-105 transition-transform duration-300"
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Base Solid White Circle to ensure extreme visibility and contrast on any background */}
          <circle cx="60" cy="60" r="58" fill="#FFFFFF" />

          {/* External Border Yellow Ring */}
          <circle cx="60" cy="60" r="53" stroke="#FFC815" strokeWidth="4.5" fill="none" />
          
          {/* Main Sun Yellow Fill Background */}
          <circle cx="60" cy="60" r="38" fill="#FFC815" />
          
          {/* White outline between yellow sun and outer elements */}
          <circle cx="60" cy="60" r="38" stroke="white" strokeWidth="2" fill="none" />
 
          {/* Premium Red Dog Silhouette */}
          {/* Sleek walking dog silhouette with leash */}
          <g>
            {/* Leash */}
            <path
              d="M 31 16 C 45 25 55 28 71 31"
              stroke="#E61C54"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            {/* Dog Body Path */}
            <path
              d="M 68 32
                 C 58 36, 48 39, 38 42
                 C 36 43, 35 41, 35 39
                 C 33 28, 26 18, 30 16
                 C 31.5 15, 31 18, 34 26
                 C 36 34, 34 40, 34 44
                 C 32 50, 24 58, 25 68
                 C 26 69, 28 69, 28 68
                 C 29 59, 35 52, 38 49
                 C 41 49, 44 48, 47 48
                 C 43 53, 40 59, 41 65
                 C 42 66, 44 66, 44 65
                 C 45 60, 47 54, 49 48
                 C 54 47, 59 45, 64 43
                 C 62 49, 61 56, 62 65
                 C 63 66, 65 66, 65 65
                 C 66 57, 66 50, 68 44
                 C 70 43, 73 42, 75 42
                 C 79 42, 85 43, 85 46
                 C 85 48, 82 50, 80 52
                 C 79 53, 77 53, 77 51
                 C 77 49, 81 46, 75 45
                 C 72 44, 71 42, 72 38
                 C 74 36, 75 32, 76 28
                 C 78 28, 83 26, 88 24
                 C 89 23, 88 21, 85 22
                 C 82 22, 79 24, 77 26
                 C 78 21, 82 14, 82 10
                 C 81 9, 79 10, 77 15
                 C 75 14, 78 10, 78 8
                 C 77 7, 75 8, 74 13
                 C 72 17, 70 23, 68 32 Z"
              fill="#E61C54"
            />
            {/* Collar */}
            <path
              d="M 69 31 C 71 33, 73 33, 75 31"
              stroke="#FFF"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </g>
 
          {/* Circular Text Path for "Pet • Passeio" - Concentric with the outer elements */}
          <path
            id="logo-text-path"
            d="M 13,60 A 47,47 0 0,0 107,60"
            fill="none"
            stroke="none"
          />
          <text fill="#E61C54" fontSize="13.8" fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif" fontWeight="900" letterSpacing="1.2">
            <textPath href="#logo-text-path" startOffset="50%" textAnchor="middle">
              Pet • Passeio
            </textPath>
          </text>
        </svg>
      </div>

      {/* Text Label on the right (Optional) */}
      {showText && (
        <span 
          className={`font-display text-xl font-black tracking-tight transition-colors ${
            lightMode ? "text-slate-900" : "text-white"
          }`}
        >
          Pet<span className="text-brand-red font-black">Passeio</span>
        </span>
      )}
    </div>
  );
}
