import { motion } from 'motion/react';

interface LogoProps {
  light?: boolean;
}

export default function Logo({ light = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3 select-none group">
      {/* SVG Monogram Logo */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circular Swoosh / Arc */}
          <motion.path
            d="M20,80 C5,60 5,40 20,20 C35,5 65,5 80,20 C95,40 95,60 80,80"
            stroke="url(#logoGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0, rotate: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              rotate: 360
            }}
            transition={{ 
              pathLength: { duration: 1.5, ease: "easeInOut" },
              opacity: { duration: 1.5 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            style={{ originX: "50px", originY: "50px" }}
          />
          
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>

          {/* Cursive 'R' */}
          <motion.text
            x="20"
            y="65"
            style={{ 
              fontSize: '48px', 
              fill: light ? '#fff' : '#0891b2',
              fontFamily: '"Dancing Script", cursive',
              fontWeight: 700
            }}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            R
          </motion.text>

          {/* Bold 'M' */}
          <motion.text
            x="48"
            y="62"
            style={{ 
              fontSize: '36px', 
              fontWeight: 900,
              fill: light ? '#cbd5e1' : '#0f172a',
              fontFamily: 'Inter, sans-serif'
            }}
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            M
          </motion.text>
        </svg>
      </div>

      {/* Typography Section */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className={`text-xl font-extrabold tracking-tighter uppercase leading-none ${light ? 'text-white' : 'text-slate-900'}`}>
            RM <span className="text-accent">INFOTECH</span>
          </span>
        </div>
        <div className="flex items-center mt-1">
          <span className={`text-[9px] font-bold tracking-[0.34em] uppercase whitespace-nowrap ${light ? 'text-slate-400' : 'text-slate-500'}`}>
            Solutions Pvt Ltd
          </span>
        </div>
      </div>
    </div>
  );
}
