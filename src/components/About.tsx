import { motion } from 'motion/react';
import { Target, Lightbulb, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" 
                alt="About RM Infotech" 
                className="rounded-3xl w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="bg-accent p-8 rounded-3xl text-white">
                <span className="text-4xl font-bold block mb-2">15+</span>
                <span className="text-sm font-medium opacity-90 uppercase tracking-widest">Years of Innovation</span>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-primary p-8 rounded-3xl text-white">
                <Users className="w-10 h-10 mb-4 opacity-80" />
                <span className="text-4xl font-bold block mb-2">500+</span>
                <span className="text-sm font-medium opacity-90 uppercase tracking-widest">Happy Clients</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
                alt="Our Team" 
                className="rounded-3xl w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <div className="space-y-8">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent font-semibold tracking-wider uppercase text-[10px] mb-4 block"
              >
                About Our Company
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]"
              >
                Driving the Future of Healthcare IT
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 text-lg leading-relaxed"
              >
                RM Infotech Solutions Pvt Ltd is a premier technology partner for the healthcare industry. Based in India and serving global markets, we specialize in building sophisticated software ecosystems that empower hospitals and laboratories.
              </motion.p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Strategic Mission",
                  desc: "To deliver mission-critical, HIPAA-compliant technology frameworks that enable healthcare providers to focus exclusively on patient outcomes without operational friction.",
                  icon: <Target className="w-5 h-5 text-accent" />
                },
                {
                  title: "Global Vision",
                  desc: "Establishing the gold standard for interoperable healthcare ecosystems where data flows securely across the entire clinical continuum, from diagnostics to discharge.",
                  icon: <Lightbulb className="w-5 h-5 text-accent" />
                },
                {
                  title: "Technical Excellence",
                  desc: "Utilizing ISO 9001:2015 certified processes and Lean Agile methodologies to deploy high-availability, low-latency infrastructure for tier-1 medical institutions.",
                  icon: <Users className="w-5 h-5 text-accent" />
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-slate-50 p-3 rounded-xl self-start group-hover:bg-accent/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-6 border-t border-slate-100"
            >
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Our Technology Pillars</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-bold text-slate-700">HL7 / DICOM Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-bold text-slate-700">Multi-Cloud Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-bold text-slate-700">Micro-Service Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-bold text-slate-700">AES-256 Data Security</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
