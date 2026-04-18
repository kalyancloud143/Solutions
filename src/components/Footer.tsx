import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Github, Twitter, Linkedin, ShieldCheck, AlertTriangle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
            <p className="text-white/50 text-xl leading-relaxed">
              Have questions about our AI strategies or broker integrations? Our specialized support team is here to help.
            </p>
          </div>

          <div className="grid gap-8">
            <a href={`tel:+91${CONTACT_INFO.phone}`} className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-warning group-hover:text-black transition-all">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-sm text-white/40 uppercase font-mono tracking-widest mb-1">Call Us</p>
                <p className="text-2xl font-bold">+91 {CONTACT_INFO.phone}</p>
              </div>
            </a>
            <a href={`https://wa.me/91${CONTACT_INFO.whatsapp}`} target="_blank" className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-growth group-hover:text-black transition-all">
                <MessageCircle size={28} />
              </div>
              <div>
                <p className="text-sm text-white/40 uppercase font-mono tracking-widest mb-1">WhatsApp Chat</p>
                <p className="text-2xl font-bold">Message Now</p>
              </div>
            </a>
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-premium group-hover:text-white transition-all">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-sm text-white/40 uppercase font-mono tracking-widest mb-1">Office Location</p>
                <p className="text-xl font-bold">{CONTACT_INFO.address}</p>
              </div>
            </div>
          </div>
        </div>

        <form className="glass-card p-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-white/40 tracking-widest">Full Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-growth outline-none transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-white/40 tracking-widest">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-growth outline-none transition-all" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-white/40 tracking-widest">Broker Name</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-growth outline-none transition-all" placeholder="e.g., Zerodha" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-white/40 tracking-widest">Your Message</label>
            <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 h-32 focus:border-growth outline-none transition-all resize-none" placeholder="I am interested in the Premium Plan..." />
          </div>
          <button className="w-full py-5 bg-white text-black font-bold rounded-xl hover:bg-warning hover:text-black transition-all">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export function TrustDisclaimer() {
  return (
    <div className="bg-fintech-bg py-4 px-4 sticky bottom-0 z-50 border-t border-fintech-line backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
        <div className="text-[10px] bg-warning text-black px-2 py-0.5 font-black rounded uppercase">SEBI DISCLOSURE</div>
        <p className="text-[10px] text-text-dim font-medium tracking-wide leading-relaxed">
          VV Solutions is a technology provider and does not hold user funds. Market investments are subject to risk. 
          Past performance is no guarantee of future results. No guaranteed profits are claimed by this system.
        </p>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="pt-24 pb-48 px-4 bg-fintech-bg border-t border-fintech-line">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-md">
          <p className="text-[10px] text-text-dim leading-relaxed">
            <strong>DISCLOSURE:</strong> VV Solutions provides algorithmic trading technology solutions. We are not a broker or financial advisor. All trading involves risk.
            <br /><br />
            <strong>Address:</strong> VV Solutions, Tower B, Fintech Hub, Bengaluru, India.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="text-sm font-bold flex items-center gap-2">
                <Phone size={16} /> +91 {CONTACT_INFO.phone}
            </div>
            <div className="text-sm font-bold text-growth flex items-center gap-2">
                <MessageCircle size={16} /> WhatsApp: {CONTACT_INFO.whatsapp}
            </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-mono">
            © 2026 VV SOLUTIONS INDIA. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
