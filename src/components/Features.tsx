import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Rocket, BarChart3, TrendingUp, Briefcase, Zap, ShieldAlert } from 'lucide-react';
import { STRATEGIES } from '../constants';

const icons = {
  TrendingUp: <TrendingUp />,
  BarChart3: <BarChart3 />,
  Briefcase: <Briefcase />
};

export function HowItWorks() {
  const steps = [
    { 
      title: 'Connect Broker API', 
      desc: 'Seamlessly link your Zerodha, Angel One, or Upstox account using secure API keys. No fund storage on our platform.',
      icon: <Zap className="text-warning" />
    },
    { 
      title: 'Choose Strategy', 
      desc: 'Select from our pre-built, AI-optimized strategies for Intraday, Swing, or Long-term growth.',
      icon: <Cpu className="text-growth" />
    },
    { 
      title: 'Auto Execution', 
      desc: 'The AI bot monitors the market 24/7 and executes trades based on logic-driven signals.',
      icon: <Rocket className="text-premium" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 bg-fintech-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Simplified Trading Lifecycle</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Trading shouldn't be complicated. Our three-step process gets you started with full automation in minutes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 space-y-4 hover:border-white/20 transition-colors group"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-white/50 leading-relaxed">{step.desc}</p>
              <div className="pt-4 flex items-center gap-2 text-xs font-mono tracking-widest text-white/30 group-hover:text-white/60 transition-colors uppercase">
                Step 0{i + 1} <div className="h-[1px] w-8 bg-current" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StrategyModules() {
  return (
    <section id="strategies" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">AI Trading Modules</h2>
            <p className="text-white/60 max-w-xl">Whether you are an intraday scalper or a long-term investor, we have a specialized bot for your goals.</p>
          </div>
          <div className="flex gap-4">
             <div className="flex items-center gap-2 text-xs text-white/40 uppercase font-mono bg-white/5 p-4 rounded-xl border border-white/10">
                <ShieldAlert size={14} className="text-yellow-500" />
                Backtested for 3 Years
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STRATEGIES.map((strategy, i) => (
            <motion.div 
              key={strategy.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="strategy-card flex flex-col group overflow-hidden p-8"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest ${strategy.risk === 'High' ? 'bg-premium text-white' : strategy.risk === 'Medium' ? 'bg-[#5D4037] text-white' : 'bg-[#1B5E20] text-white'}`}>
                  {strategy.risk} Risk
                </div>
                <div className="text-growth">
                   {icons[strategy.icon as keyof typeof icons]}
                </div>
              </div>

              <h3 className="text-lg font-bold mb-3 text-growth tracking-tight">{strategy.title}</h3>
              <p className="text-text-dim text-[13px] leading-relaxed mb-6">{strategy.description}</p>
              
              <div className="mt-auto pt-6 border-t border-white/5 space-y-4">
                <div className="flex justify-between items-center">
                   <span className="text-[10px] text-text-dim uppercase font-mono tracking-widest">Backtested Profit</span>
                   <span className="text-[12px] font-bold text-growth">{strategy.performance}</span>
                </div>
                <a 
                  href="https://wa.me/918341563696" 
                  className="btn-outline w-full block text-center py-2.5"
                >
                  Activate Strategy
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
