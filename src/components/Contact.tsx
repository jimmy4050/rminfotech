import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    orgName: '',
    email: '',
    solution: 'Select Solution',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.orgName) newErrors.orgName = 'Organization name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (formData.solution === 'Select Solution') newErrors.solution = 'Please select a solution';
    if (!formData.message) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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
                  value: "+91 81436 51772",
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
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl min-h-[460px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-white font-bold mb-6 text-xl">Inquiry & Consulting</h3>
                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <input 
                        type="text" 
                        value={formData.orgName}
                        onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                        placeholder="Organization / Entity Name"
                        className={`w-full bg-slate-700 border-none rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:ring-1 focus:ring-accent transition-all ${errors.orgName ? 'ring-1 ring-red-500' : ''}`}
                      />
                      {errors.orgName && <p className="text-[10px] text-red-500 ml-1 font-bold italic">{errors.orgName}</p>}
                    </div>
                    <div className="space-y-1">
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Contact Email"
                        className={`w-full bg-slate-700 border-none rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:ring-1 focus:ring-accent transition-all ${errors.email ? 'ring-1 ring-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 ml-1 font-bold italic">{errors.email}</p>}
                    </div>
                    <div className="space-y-1">
                      <select 
                        value={formData.solution}
                        onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                        className={`w-full bg-slate-700 border-none rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-accent transition-all ${errors.solution ? 'ring-1 ring-red-500' : ''} ${formData.solution === 'Select Solution' ? 'text-slate-400' : 'text-white'}`}
                      >
                        <option>Select Solution</option>
                        <option>HIMS Core</option>
                        <option>LIMS Advanced</option>
                        <option>Enterprise ERP</option>
                      </select>
                      {errors.solution && <p className="text-[10px] text-red-500 ml-1 font-bold italic">{errors.solution}</p>}
                    </div>
                    <div className="space-y-1">
                      <textarea 
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        className={`w-full bg-slate-700 border-none rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:ring-1 focus:ring-accent transition-all resize-none ${errors.message ? 'ring-1 ring-red-500' : ''}`}
                      />
                      {errors.message && <p className="text-[10px] text-red-500 ml-1 font-bold italic">{errors.message}</p>}
                    </div>
                    <motion.button
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-accent text-white rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all uppercase tracking-wider text-xs"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>Contact Solutions Team <Send className="w-4 h-4" /></>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Received!</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    Thank you for reaching out. Our solutions team will review your inquiry and contact you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-accent font-bold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
