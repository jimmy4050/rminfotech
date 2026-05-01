import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Location() {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Our Office",
      value: "Kurnool, Andhra Pradesh, India",
      action: "https://www.google.com/maps/search/?api=1&query=Kurnool,+Andhra+Pradesh,+India"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Us",
      value: "+91 81436 51772",
      action: "tel:+918143651772"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Working Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
      action: null
    }
  ];

  return (
    <section id="location" className="py-24 bg-white border-t border-slate-100">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent font-semibold tracking-wider uppercase text-[10px] mb-4 block"
              >
                Visit Our Headquarters
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Find Us <span className="text-accent">Locally.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                We are strategically located in the heart of Andhra Pradesh, serving clients across the region with dedicated healthcare IT expertise.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-md hover:border-accent/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{info.label}</h4>
                    {info.action ? (
                      <a 
                        href={info.action} 
                        target={info.label === "Our Office" ? "_blank" : undefined}
                        rel={info.label === "Our Office" ? "noopener noreferrer" : undefined}
                        className="text-lg font-bold text-slate-900 hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-bold text-slate-900">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=Kurnool,+Andhra+Pradesh,+India"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:bg-slate-800 transition-all uppercase tracking-wider text-xs"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </motion.a>
          </motion.div>

          {/* Right Side: Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200 relative group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123018.66779435882!2d78.01053155!3d15.82229545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5e4659f1f0a2d%3A0x63351221f45778a4!2sKurnool%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1714560000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1] transition-all group-hover:grayscale-0"
            ></iframe>
            {/* Elegant Map Overlay */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5 rounded-[2rem]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
