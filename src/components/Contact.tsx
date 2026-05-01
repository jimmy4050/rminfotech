import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -ml-64 -mb-64" />

      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-semibold tracking-wider uppercase text-[10px] mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-[1.1]"
            >
              Ready to Digitalize Your Enterprise?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg mb-12 max-w-lg leading-relaxed"
            >
              Contact our experts for a free consultation and demo of our HIMS and ERP solutions.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  label: "Email Us",
                  value: "solutions@rminfotech.com",
                  icon: <Mail className="w-5 h-5 text-accent" />
                },
                {
                  label: "Call Us",
                  value: "+91 123 456 7890",
                  icon: <Phone className="w-5 h-5 text-accent" />
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 items-center"
                >
                  <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-0.5">{item.label}</div>
                    <div className="text-base font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl"
          >
            <h3 className="text-white font-bold mb-6 text-xl">Inquiry & Consulting</h3>
            <form id="contact-form" className="space-y-4">
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Organization / Entity Name"
                  className="w-full bg-slate-700 border-none rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Contact Email"
                  className="w-full bg-slate-700 border-none rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
              <div className="space-y-2">
                <select className="w-full bg-slate-700 border-none rounded-lg px-4 py-3 text-sm text-slate-400 focus:ring-1 focus:ring-accent transition-all">
                  <option>Select Solution</option>
                  <option>HIMS Core</option>
                  <option>LIMS Advanced</option>
                  <option>Enterprise ERP</option>
                </select>
              </div>
              <div className="space-y-2">
                <textarea 
                  rows={3}
                  placeholder="How can we help you?"
                  className="w-full bg-slate-700 border-none rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:ring-1 focus:ring-accent transition-all resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-accent text-white rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all uppercase tracking-wider text-xs"
              >
                Contact Solutions Team
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
