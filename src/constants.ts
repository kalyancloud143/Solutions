export const CONTACT_INFO = {
  phone: "8341563696",
  email: "contact@vvsolutions.in",
  whatsapp: "8341563696",
  address: "VV Solutions, India",
  googleMaps: "https://goo.gl/maps/placeholder"
};

export const PLANS = [
  {
    name: "Free Demo",
    price: "₹0",
    period: "Forever",
    features: [
      "Paper Trading",
      "Real-time Alerts",
      "Limited Backtesting",
      "Community Support"
    ],
    cta: "Start Free Demo",
    highlight: false
  },
  {
    name: "Basic Plan",
    price: "₹1,499",
    period: "Monthly",
    features: [
      "Signal Alerts",
      "Mobile App Access",
      "Strategy Builder",
      "Email Support"
    ],
    cta: "Subscribe Now",
    highlight: false
  },
  {
    name: "Pro Plan",
    price: "₹2,999",
    period: "Monthly",
    features: [
      "Semi-Auto Execution",
      "Advanced Strategies",
      "Priority Alerts",
      "24/7 Support"
    ],
    cta: "Upgrade to Pro",
    highlight: true
  },
  {
    name: "Premium Plan",
    price: "₹4,999",
    period: "Monthly",
    features: [
      "Full Automation",
      "Custom Strategy Bot",
      "Broker API Access",
      "Direct Developer Access"
    ],
    cta: "Get Premium",
    highlight: false
  }
];

export const STRATEGIES = [
  {
    id: "intraday",
    title: "Intraday Trading Bot",
    description: "High-speed execution with auto buy/sell signals tailored for the Indian markets.",
    risk: "High",
    performance: "~15-20% Monthly (Backtested)",
    icon: "TrendingUp"
  },
  {
    id: "swing",
    title: "Short-Term Swing",
    description: "Trend-based strategies focusing on 2-10 day movements with RSI/MACD precision.",
    risk: "Medium",
    performance: "~10-12% Monthly (Backtested)",
    icon: "BarChart3"
  },
  {
    id: "invest",
    title: "Long-Term Portfolio",
    description: "AI-driven allocation and auto-rebalancing for steady wealth creation.",
    risk: "Low",
    performance: "~18-22% Annual (Historical)",
    icon: "Briefcase"
  }
];
