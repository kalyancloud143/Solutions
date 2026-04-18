import React from 'react';
import { Navbar, StickyActions } from './components/Navigation';
import { Hero } from './components/Hero';
import { HowItWorks, StrategyModules } from './components/Features';
import { LivePerformance } from './components/LivePerformance';
import { Testimonials } from './components/Testimonials';
import { Pricing, TradingQuiz, PaymentSection } from './components/Conversion';
import { ContactSection, TrustDisclaimer, Footer } from './components/Footer';

/**
 * VV SOLUTIONS - AI ALGO TRADING
 * Master Entry Point
 */
export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-growth/10 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-premium/10 rounded-full blur-[120px] opacity-20" />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        
        <HowItWorks />
        
        <StrategyModules />
        
        <LivePerformance />
        
        <Testimonials />
        
        {/* Technology/Security Highlights (Integrated into Features/Hero) */}
        
        <TradingQuiz />
        
        <Pricing />
        
        <PaymentSection />
        
        <ContactSection />
      </main>

      <Footer />
      
      {/* Compliance / Floating Elements */}
      <TrustDisclaimer />
      <StickyActions />
    </div>
  );
}

