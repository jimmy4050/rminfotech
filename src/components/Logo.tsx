import { motion } from 'motion/react';
import { Activity } from 'lucide-react';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative">
        {/* Heartbeat Pulse Ring */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-accent rounded-lg"
        />
        
        {/* Main Icon Container */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white shadow-lg shadow-accent/20 z-10"
        >
          <Activity className="w-6 h-6" />
        </motion.div>
      </div>

      <div className="flex flex-col pt-1">
        <div className="flex items-baseline gap-2">
          <span className={`font-cursive text-3xl text-accent ${light ? 'drop-shadow-sm' : ''}`}>
            RM
          </span>
          <span className={`text-xl font-extrabold tracking-tighter uppercase leading-none ${light ? 'text-white' : 'text-slate-900'}`}>
            Infotech Solutions
          </span>
        </div>
        <span className={`text-[9px] font-bold tracking-[0.4em] uppercase -mt-0.5 ${light ? 'text-slate-400' : 'text-slate-500'}`}>
          Pvt Ltd
        </span>
      </div>
    </div>
  );
}
