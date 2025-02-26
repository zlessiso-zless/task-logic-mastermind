
import { useState, useEffect } from 'react';

const benefits = [
  {
    id: 1,
    title: "Exclusive Discounts",
    description: "Get up to 25% off on select premium brands and collections",
    icon: "💎"
  },
  {
    id: 2,
    title: "Early Access",
    description: "Shop new arrivals 24 hours before they're available to everyone else",
    icon: "🔑"
  },
  {
    id: 3,
    title: "Free Shipping",
    description: "Enjoy free standard shipping on all your orders, no minimum purchase required",
    icon: "🚚"
  },
  {
    id: 4,
    title: "Birthday Treat",
    description: "Receive a special gift or discount during your birthday month",
    icon: "🎁"
  },
  {
    id: 5,
    title: "Points Multipliers",
    description: "Earn double or triple points during special events and promotions",
    icon: "✨"
  },
  {
    id: 6,
    title: "Member-Only Events",
    description: "Get invited to exclusive shopping events and beauty workshops",
    icon: "📅"
  }
];

export const BenefitsSection = () => {
  const [visibleBenefits, setVisibleBenefits] = useState<number[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.id.split("-")[1]);
            setVisibleBenefits(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    benefits.forEach(benefit => {
      const element = document.getElementById(`benefit-${benefit.id}`);
      if (element) observer.observe(element);
    });
    
    return () => {
      benefits.forEach(benefit => {
        const element = document.getElementById(`benefit-${benefit.id}`);
        if (element) observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <section id="benefits" className="py-16 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-b from-white to-glam-light-pink">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            Program Benefits
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-glam-dark">
            Unlock Premium Rewards
          </h2>
          <p className="mt-4 text-base md:text-lg text-glam-dark/70 max-w-2xl mx-auto">
            As a valued Gold member, you enjoy these exclusive benefits designed to enhance your shopping experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div
              id={`benefit-${benefit.id}`}
              key={benefit.id}
              className={`glass-card rounded-xl p-6 hover-scale transition-opacity duration-700 ease-in-out ${
                visibleBenefits.includes(benefit.id) ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-glam-light-pink flex items-center justify-center mb-4">
                <span className="text-2xl" role="img" aria-label={benefit.title}>
                  {benefit.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-glam-dark mb-2">{benefit.title}</h3>
              <p className="text-glam-dark/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
