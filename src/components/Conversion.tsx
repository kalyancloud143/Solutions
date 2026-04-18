import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, ArrowRight, Star, QrCode, CreditCard, ChevronRight } from 'lucide-react';
import { PLANS, CONTACT_INFO } from '../constants';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 bg-fintech-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-sans">Professional Trading Plans</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Select a plan that fits your trading style. From paper trading to full automation.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 flex flex-col relative overflow-hidden ${plan.highlight ? 'border-growth/50 shadow-lg shadow-growth/10' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute top-4 right-[-35px] rotate-45 bg-growth text-black text-[10px] font-bold py-1 w-32 text-center uppercase tracking-tighter">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-white/40 text-sm italic">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-white/70">
                    <Check className="text-growth shrink-0" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#payment" 
                className={`w-full text-center ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TradingQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      q: "What is your primary trading goal?",
      options: ["Quick daily profits", "Weekly consistency", "Retirement wealth"]
    },
    {
      q: "How many hours can you dedicate to markets?",
      options: ["None (Full Auto)", "1-2 hours (Semi-Auto)", "Dedicated full day"]
    },
    {
      q: "What is your risk tolerance?",
      options: ["Low (Conservative)", "Moderate", "High (Aggressive)"]
    }
  ];

  const handleAnswer = (ans: string) => {
    const nextAnswers = [...answers, ans];
    if (step < questions.length - 1) {
      setAnswers(nextAnswers);
      setStep(step + 1);
    } else {
      // Show result
      setStep(questions.length);
    }
  };

  const getResult = () => {
    if (answers[0] === "Quick daily profits") return "Intraday Trading Bot";
    if (answers[0] === "Weekly consistency") return "Short-Term Swing Strategy";
    return "Long-Term Portfolio Automation";
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto glass-card p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Star size={120} className="text-warning stroke-[1]" />
        </div>

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {step < questions.length ? (
              <motion.div 
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <span className="text-xs font-mono text-warning uppercase tracking-widest">Question {step + 1} of {questions.length}</span>
                  <h2 className="text-3xl font-bold mt-2">{questions[step].q}</h2>
                </div>
                <div className="grid gap-4">
                  {questions[step].options.map((opt) => (
                    <button 
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      className="p-6 text-left glass-card hover:border-growth hover:bg-growth/10 transition-all flex items-center justify-between group"
                    >
                      <span className="font-medium">{opt}</span>
                      <ChevronRight className="text-white/20 group-hover:text-growth transition-colors" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="w-20 h-20 bg-growth/20 text-growth rounded-full flex items-center justify-center mx-auto mb-8">
                  <Star size={40} fill="currentColor" />
                </div>
                <h2 className="text-2xl font-bold text-white/60">Your Personalized Strategy:</h2>
                <h3 className="text-4xl md:text-5xl font-bold neon-green">{getResult()}</h3>
                <p className="text-white/40 max-w-md mx-auto">Based on your profile, this strategy matches your risk appetite and time commitment perfectly.</p>
                <div className="pt-8">
                  <button 
                    onClick={() => setStep(0)} 
                    className="text-warning text-sm font-bold uppercase tracking-widest hover:underline"
                  >
                    Retake Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export function PaymentSection() {
  return (
    <section id="payment" className="py-24 px-4 bg-premium-dark/20 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block p-4 rounded-3xl bg-white mb-8 shadow-2xl shadow-growth/20">
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=upi://pay?pa=8341563696@upi&pn=VV%20Solutions" 
            alt="Payment QR" 
            className="w-64 h-64"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
          <QrCode className="text-growth" /> 
          Scan & Pay to Activate
        </h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto">
          Scan the QR code using any UPI app (GPay, PhonePe, Paytm) to activate your Premium Plan instantly.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="glass-card p-6 flex items-center gap-4 text-left w-full md:w-auto">
            <div className="w-12 h-12 bg-growth/20 rounded-xl flex items-center justify-center text-growth">
              <Star />
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase font-mono">UPI ID</p>
              <p className="font-bold text-lg">{CONTACT_INFO.whatsapp}@upi</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-center gap-4 text-left w-full md:w-auto">
            <div className="w-12 h-12 bg-warning/20 rounded-xl flex items-center justify-center text-warning">
              <CreditCard />
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase font-mono">Status</p>
              <p className="font-bold text-lg text-growth">Instant Activation</p>
            </div>
          </div>
        </div>
        
        <p className="mt-12 text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono">
          After payment, please send a screenshot to WhatsApp for verification.
        </p>
      </div>
    </section>
  );
}
