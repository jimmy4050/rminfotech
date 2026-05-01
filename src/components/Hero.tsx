import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Database } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[100px] hidden lg:block" />
      
      <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-3 py-1 bg-accent/5 border border-accent/10 rounded-full mb-6">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none">ISO 9001:2015 Certified</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
            Digital Transformation for <span className="text-accent">Modern Healthcare.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg mb-10">
            Empowering hospitals and diagnostic labs with enterprise-grade IT ecosystems. Scalable, secure, and clinical-ready.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              id="hero-cta-solutions"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold flex items-center gap-2 shadow-lg hover:bg-slate-800 transition-all"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              id="hero-cta-contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all shadow-sm"
            >
              Request Demo
            </motion.button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">500+</span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Clients Served</span>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">15+</span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Years Experience</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
              alt="Healthcare Technology" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
          
          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Daily Operations</div>
                <div className="text-sm font-bold text-primary">+24% Efficiency</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Database className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Cloud Security</div>
                <div className="text-sm font-bold text-primary">ISO Certified</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
