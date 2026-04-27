import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '作品展示', href: '#portfolio' },
    { name: '核心服务', href: '#services' },
    { name: '关于我', href: '#about' },
    { name: '预约合作', href: '#booking' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-linear-to-r from-cyber-purple to-sunset-orange rounded flex items-center justify-center transition-transform group-hover:scale-110">
            <Camera className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-display font-black tracking-widest bg-linear-to-r from-cyber-purple to-sunset-orange bg-clip-text text-transparent uppercase">
            SAM LIN <span className="text-white italic">VISUALS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[0.8rem] uppercase tracking-widest font-medium hover:text-sunset-orange transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyber-purple transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#booking"
            className="px-6 py-2 btn-primary rounded-full text-xs font-bold"
          >
            联系合作
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium hover:text-sunset-orange"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                className="w-full py-3 bg-gradient rounded-xl text-center font-bold"
                onClick={() => setIsOpen(false)}
              >
                开始合作
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
