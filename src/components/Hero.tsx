import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Zap, MousePointer2 } from 'lucide-react';
import { DashboardPreview } from './DashboardPreview';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sebi-banner"
          >
            COMPLIANT WITH SEBI ALGO GUIDELINES
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-[56px] font-bold leading-[1.1] tracking-tighter"
          >
            Automate Your <br />
            Stock Trading <br />
            with AI Precision
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-dim text-lg md:text-xl max-w-lg leading-relaxed"
          >
            Smart, Fast & Emotion-Free Trading for Indian Markets. Use your existing Zerodha or Angel One account to trade like a pro.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-12 pt-4"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-growth">250ms</span>
              <label className="text-[11px] text-text-dim uppercase tracking-widest font-bold">Execution Speed</label>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-growth">40+</span>
              <label className="text-[11px] text-text-dim uppercase tracking-widest font-bold">Live Strategies</label>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-growth">12k+</span>
              <label className="text-[11px] text-text-dim uppercase tracking-widest font-bold">Daily Signals</label>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <a href="#pricing" className="btn-primary">
              Start Free Demo
            </a>
            <a href="https://wa.me/918341563696" className="btn-whatsapp">
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative perspective-1000"
        >
          <DashboardPreview />
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-growth/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-premium/20 rounded-full blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
}
