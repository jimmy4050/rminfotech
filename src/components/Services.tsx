import { motion } from 'motion/react';
import { Hospital, Microscope, Database, Code, Cloud } from 'lucide-react';

export default function Services() {
  const items = [
    {
      title: 'HIMS Enterprise',
      desc: 'Robust Hospital Information Management with integrated OPD/IPD modules, OT scheduling, and HL7/FHIR compliant electronic medical records (EMR).',
      features: ['Patient Lifecycle Management', 'Pharmacy & Inventory Sync', 'Clinical Decision Support', 'Universal Billing Engine'],
      icon: <Hospital className="w-6 h-6 text-cyan-600" />,
      bg: 'bg-cyan-100',
      id: 'service-hims'
    },
    {
      title: 'LIMS Advanced',
      desc: 'High-performance Laboratory Information Management with seamless machine interfacing (RS232/TCP-IP), barcode automation, and secure digital reporting.',
      features: ['Automated Result Interfacing', 'Sample Tracking & SOPs', 'Internal/External Quality Control', 'Integrated CRM Portals'],
      icon: <Microscope className="w-6 h-6 text-indigo-600" />,
      bg: 'bg-indigo-100',
      id: 'service-lims'
    },
    {
      title: 'Enterprise ERP',
      desc: 'Unified business intelligence suite combining Financial Accounting, HRMS/Payroll, and Supply Chain Management tailored for large healthcare groups.',
      features: ['Revenue Cycle Management', 'Multi-location Consolidation', 'AI-driven Procurement', 'Compliance Reporting'],
      icon: <Database className="w-6 h-6 text-amber-600" />,
      bg: 'bg-amber-100',
      id: 'service-erp'
    },
    {
      title: 'Cybersecurity Guard',
      desc: 'Enterprise-grade security infrastructure featuring end-to-end encryption, HIPAA-aligned access controls, and 24/7 vulnerability monitoring.',
      features: ['DDoS & Firewall Shielding', 'Data Integrity Audits', 'Zero-Trust Architecture', 'Incident Response Plans'],
      icon: <Code className="w-6 h-6 text-rose-600" />,
      bg: 'bg-rose-100',
      id: 'service-security'
    },
    {
      title: 'Cloud Infrastructure',
      desc: 'High-availability cloud architectures providing 99.9% uptime, edge computing for rapid data retrieval, and automated Disaster Recovery (DRaaS).',
      features: ['Hybrid Cloud Strategy', 'Microservices Deployment', 'Scalable Storage Clusters', 'Global CDN Integration'],
      icon: <Cloud className="w-6 h-6 text-sky-600" />,
      bg: 'bg-sky-100',
      id: 'service-cloud'
    },
    {
      title: 'Custom Engineering',
      desc: 'Bespoke software engineering utilizing modern stacks (React, Node.js, Go) to build scalable, API-first healthcare applications and IoT integrations.',
      features: ['API Gateway Development', 'Cross-platform Portals', 'Performance Tuning', 'Legacy System Migration'],
      icon: <Code className="w-6 h-6 text-emerald-600" />,
      bg: 'bg-emerald-100',
      id: 'service-custom'
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
            Enterprise Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Technical <span className="text-accent text-3xl md:text-4xl align-top">Solutions</span> Ecosystem.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            We deploy mission-critical IT infrastructure that integrates clinical workflows with enterprise business logic, ensuring security, scalability, and absolute data integrity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 translate-x-16 -translate-y-16 rounded-full group-hover:bg-accent/5 transition-colors" />
              
              <div className={`${item.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-8 relative z-10 transition-transform group-hover:scale-110`}>
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6 relative z-10 text-sm">
                {item.desc}
              </p>

              <div className="space-y-3 pt-6 border-t border-slate-50 relative z-10">
                {item.features?.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
