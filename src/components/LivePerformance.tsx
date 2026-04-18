import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Clock, ShieldCheck } from 'lucide-react';

const history = [
  { pair: 'NIFTY 50 FEB FUT', type: 'BUY', entry: '21650.00', exit: '21720.00', profit: '+₹3,500', time: '14:20 PM', status: 'WIN' },
  { pair: 'BANKNIFTY MAR FUT', type: 'SELL', entry: '45800.00', exit: '45720.00', profit: '+₹4,200', time: '12:45 PM', status: 'WIN' },
  { pair: 'RELIANCE EQ', type: 'BUY', entry: '2840.50', exit: '2845.20', profit: '+₹1,150', time: '11:10 AM', status: 'WIN' },
  { pair: 'TATASTEEL EQ', type: 'BUY', entry: '142.10', exit: '141.80', profit: '-₹450', time: '10:30 AM', status: 'LOSS' },
  { pair: 'HDFCBANK EQ', type: 'SELL', entry: '1540.00', exit: '1528.00', profit: '+₹2,800', time: '09:45 AM', status: 'WIN' },
];

export function LivePerformance() {
  return (
    <section id="performance" className="py-24 px-4 bg-fintech-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Transparency in Every Trade</h2>
          <p className="text-white/60">Real-time performance logs from our master execution bot.</p>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-6 text-xs uppercase font-mono tracking-widest text-white/40">Symbol</th>
                  <th className="p-6 text-xs uppercase font-mono tracking-widest text-white/40">Action</th>
                  <th className="p-6 text-xs uppercase font-mono tracking-widest text-white/40">Entry/Exit</th>
                  <th className="p-6 text-xs uppercase font-mono tracking-widest text-white/40">PnL</th>
                  <th className="p-6 text-xs uppercase font-mono tracking-widest text-white/40">Time</th>
                  <th className="p-6 text-xs uppercase font-mono tracking-widest text-white/40">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {history.map((trade, i) => (
                  <motion.tr 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-6 font-bold">{trade.pair}</td>
                    <td className="p-6">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold ${trade.type === 'BUY' ? 'bg-growth/20 text-growth' : 'bg-premium/20 text-premium'}`}>
                        {trade.type}
                      </span>
                    </td>
                    <td className="p-6 font-mono text-sm">
                      <span className="text-white/40">{trade.entry}</span>
                      <span className="mx-2 text-white/20">→</span>
                      <span>{trade.exit}</span>
                    </td>
                    <td className="p-6 font-mono font-bold text-growth">
                      {trade.profit}
                    </td>
                    <td className="p-6 text-white/40 text-sm flex items-center gap-2">
                       <Clock size={12} />
                       {trade.time}
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        {trade.status === 'WIN' ? <TrendingUp size={16} className="text-growth" /> : <TrendingDown size={16} className="text-premium" />}
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${trade.status === 'WIN' ? 'text-growth' : 'text-premium'}`}>
                          {trade.status === 'WIN' ? 'Profit Captured' : 'Stop Loss Hit'}
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-white/5 border-t border-white/10 flex items-center justify-between">
             <div className="flex items-center gap-4 text-xs font-mono text-white/40">
                <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-growth" /> Verified by Broker API</span>
                <span>•</span>
                <span>Updated 2 minutes ago</span>
             </div>
             <a href="https://wa.me/918341563696" className="text-growth text-xs font-bold flex items-center gap-2 hover:underline tracking-widest uppercase">
                View Full Logs →
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
