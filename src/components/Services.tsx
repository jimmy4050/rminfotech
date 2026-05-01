import { motion } from 'motion/react';
import { Hospital, Microscope, Database, Code, Cloud } from 'lucide-react';

export default function Services() {
  const items = [
    {
      title: 'HIMS Core',
      desc: 'Comprehensive Hospital Information Management System for modern healthcare facilities.',
      icon: <Hospital className="w-6 h-6 text-cyan-600" />,
      bg: 'bg-cyan-100',
      id: 'service-hims'
    },
    {
      title: 'LIMS Advanced',
      desc: 'Laboratory automation & diagnostic tools for accurate reporting and efficient workflows.',
      icon: <Microscope className="w-6 h-6 text-indigo-600" />,
      bg: 'bg-indigo-100',
      id: 'service-lims'
    },
    {
      title: 'Enterprise ERP',
      desc: 'Integrated Enterprise Resource Planning tailored for healthcare business operations.',
      icon: <Database className="w-6 h-6 text-amber-600" />,
      bg: 'bg-amber-100',
      id: 'service-erp'
    },
    {
      title: 'Custom Software',
      desc: 'Bespoke healthcare software development for unique operational requirements.',
      icon: <Code className="w-6 h-6 text-emerald-600" />,
      bg: 'bg-emerald-100',
      id: 'service-custom'
    },
    {
      title: 'Cloud Solutions',
      desc: 'Secure, scalable cloud-based solutions for healthcare accessibility anywhere.',
      icon: <Cloud className="w-6 h-6 text-cyan-600" />,
      bg: 'bg-cyan-100',
      id: 'service-cloud'
    }
  ];

  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase text-[10px] mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Comprehensive Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Empowering healthcare providers with cutting-edge technology that streamlines operations and enhances patient care.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, borderColor: 'rgb(8, 145, 178)' }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-accent/30 transition-all group cursor-default"
            >
              <div className={`${item.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
