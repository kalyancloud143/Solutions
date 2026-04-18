import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { motion } from 'motion/react';
import { MousePointer2, TrendingUp, ShieldCheck } from 'lucide-react';

const data = [
  { time: '09:15', price: 21500, volume: 120 },
  { time: '10:00', price: 21550, volume: 150 },
  { time: '11:00', price: 21520, volume: 100 },
  { time: '12:00', price: 21600, volume: 200 },
  { time: '13:00', price: 21580, volume: 180 },
  { time: '14:00', price: 21650, volume: 250 },
  { time: '15:20', price: 21720, volume: 300 },
];

export function DashboardPreview() {
  return (
    <div className="glass-card p-6 w-full max-w-lg mx-auto overflow-hidden relative group">
      <div className="chart-header flex items-center justify-between mb-6 text-[12px] uppercase text-text-dim">
        <span>Live Performance</span>
        <span className="text-growth flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-growth animate-pulse" />
          Active
        </span>
      </div>

      <div className="h-[150px] w-full border-b border-dashed border-white/10 mb-6 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00E676" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00E676" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis hide />
            <YAxis 
              hide 
              domain={['dataMin - 10', 'dataMax + 10']} 
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#15161a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
              itemStyle={{ color: '#00E676' }}
            />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="#00E676" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorPrice)" 
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="absolute top-2 right-4 text-3xl font-bold font-sans text-growth neon-green">
          +12.4%
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-[12px] font-bold text-text-dim uppercase tracking-wider mb-2">Recent Signals</p>
        <div className="space-y-2 text-[12px]">
          <div className="flex justify-between items-center py-2 border-b border-white/5">
            <span>RELIANCE</span>
            <span className="text-growth font-bold uppercase tracking-widest">BUY @ 2942.50</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/5 opacity-80">
            <span>HDFCBANK</span>
            <span className="text-warning font-bold uppercase tracking-widest">SELL @ 1421.10</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/5">
            <span>INFY</span>
            <span className="text-growth font-bold uppercase tracking-widest">BUY @ 1655.00</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center p-4 bg-white/[0.02] rounded-xl border border-white/5">
        <div className="text-center">
            <p className="text-[10px] text-text-dim uppercase mb-2">Scan to Upgrade</p>
            <div className="w-20 h-20 bg-white p-1 rounded mx-auto mb-2">
                 <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=8341563696@okaxis&pn=VV%20Solutions" 
                    alt="QR" 
                    className="w-full h-full grayscale"
                    referrerPolicy="no-referrer"
                />
            </div>
            <p className="text-[10px] font-mono">UPI: vvsolutions@okaxis</p>
        </div>
      </div>
    </div>
  );
}
