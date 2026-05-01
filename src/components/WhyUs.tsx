import { motion } from 'motion/react';
import { ShieldCheck, Zap, BarChart3, Globe2 } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      title: 'Enterprise Security',
      desc: 'Robust data encryption and multi-layer security protocols ensuring patient data privacy.',
      icon: <ShieldCheck className="w-8 h-8 text-accent" />
    },
    {
      title: 'High Performance',
      desc: 'Optimized systems for zero-lag experience even with massive concurrent user loads.',
      icon: <Zap className="w-8 h-8 text-accent" />
    },
    {
      title: 'Actionable Insights',
      desc: 'Advanced analytics dashboards providing executive-level insights for growth.',
      icon: <BarChart3 className="w-8 h-8 text-accent" />
    },
    {
      title: 'Scalable Growth',
      desc: 'Modular architecture that grows with your organization from clinic to healthcare chain.',
      icon: <Globe2 className="w-8 h-8 text-accent" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="section-padding">
        <div className="bg-primary rounded-[3rem] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-20 text-white">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent font-semibold tracking-wider uppercase text-[10px] mb-4 block"
              >
                Why Partner With Us
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-[1.1]"
              >
                The RM Infotech Advantage
              </motion.h2>
              <div className="h-1 w-12 bg-accent rounded-full mb-12"></div>
              
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-accent font-bold">&#x2713;</div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed font-medium">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1573161158021-81f6270b05fa?auto=format&fit=crop&q=80&w=1000" 
                alt="Technology Excellence" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
