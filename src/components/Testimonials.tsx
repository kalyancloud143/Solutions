import React from 'react';
import { motion } from 'motion/react';
import { Star, User, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Intraday Trader",
    content: "The execution speed is incredible. I've seen a 40% reduction in slippage since moving to VV Solutions' AI bot.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Portfolio Investor",
    content: "The auto-rebalancing feature saved my portfolio during the last market correction. Truly intelligent automation.",
    rating: 5
  },
  {
    name: "Vikram Reddy",
    role: "Swing Trader",
    content: "Simple to setup and the signals are highly accurate. The WhatsApp support is very responsive.",
    rating: 4
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-fintech-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Trusted by Indian Traders</h2>
          <p className="text-white/60">Join hundreds of traders who have automated their growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 relative"
            >
              <Quote className="absolute top-8 right-8 text-white/5" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-warning fill-warning" />
                ))}
              </div>

              <p className="text-white/70 italic leading-relaxed mb-8 relative z-10">"{t.content}"</p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 bg-growth/20 rounded-full flex items-center justify-center text-growth">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-white/40 uppercase font-mono tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
