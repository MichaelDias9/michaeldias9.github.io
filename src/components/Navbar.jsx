import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Briefcase } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: '/', name: 'Resume', icon: User },
    { path: '/projects', name: 'Projects', icon: Briefcase },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-black">
            MD
          </div>
          <span>Portfolio</span>
        </div>
        <div className="flex gap-2 sm:gap-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  );
}
