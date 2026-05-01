import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-padding"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo />
            <p className="text-slate-500 text-sm font-medium max-w-xs leading-relaxed">
              Empowering healthcare excellence through digital innovation and enterprise IT ecosystems since 2011.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm">Our Solutions</h4>
            <ul className="space-y-3">
              {[
                { name: 'HIMS Core Suite', href: '#services' },
                { name: 'LIMS Advanced', href: '#services' },
                { name: 'Enterprise ERP', href: '#services' },
                { name: 'Cloud Migration', href: '#services' },
                { name: 'Custom Development', href: '#services' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-500 text-sm font-medium hover:text-accent transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Success Stories', href: '#about' },
                { name: 'Partnerships', href: '#about' },
                { name: 'Support Hub', href: '#contact' },
                { name: 'Contact Us', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-500 text-sm font-medium hover:text-accent transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm">Stay Updated</h4>
            <p className="text-slate-500 text-sm font-medium mb-4 leading-relaxed">Get the latest insights on healthcare digital transformation.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-xs focus:outline-none focus:border-accent"
              />
              <button className="absolute right-1 top-1 px-3 py-1 bg-slate-900 text-white rounded-md text-[10px] font-bold">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            © 2026 RM Infotech Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Governance</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
