import { motion } from 'motion/react';

const brands = [
  "APOLLO CLINIQUES", "MAX LABS", "Narayana Health", "Aster DM", "City Hospital", "Global Labs"
];

export default function Clients() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-12 bg-white border-y border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center md:text-left">
        <h3 className="text-slate-400 uppercase tracking-widest font-bold text-[10px] opacity-60">Trusted by 500+ Institutions</h3>
      </div>
      
      <div className="relative flex opacity-40 grayscale">
        <motion.div 
          className="flex whitespace-nowrap gap-20 py-2 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-sm font-bold text-slate-600 tracking-tighter uppercase">{brand}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
