import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Menu, X, Cpu } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Strategies', href: '#strategies' },
    { name: 'Performance', href: '#performance' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-fintech-bg/80 backdrop-blur-lg border-fintech-line' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="text-2xl font-extrabold tracking-tighter">
            VV <span className="text-growth">SOLUTIONS</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold text-white/70 hover:text-growth transition-colors px-4 py-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/918341563696" 
            target="_blank" 
            className="btn-primary"
          >
            Connect Broker API
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-fintech-card border-b border-fintech-line p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/918341563696" 
              className="w-full py-4 bg-growth text-black text-center font-bold rounded-xl mt-4"
            >
              Start Free Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function StickyActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/91${CONTACT_INFO.whatsapp}`}
        target="_blank"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/20 hover:brightness-110"
      >
        <MessageCircle size={28} />
      </motion.a>
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`tel:+91${CONTACT_INFO.phone}`}
        className="w-14 h-14 bg-warning rounded-full flex items-center justify-center text-black shadow-lg shadow-warning/20 hover:brightness-110"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
}
