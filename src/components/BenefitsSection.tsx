
import { useState, useEffect } from 'react';

const benefits = [
  {
    id: 1,
    title: "Exclusive Discounts",
    description: "Get up to 25% off on select premium brands and collections",
    icon: "💎",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Early Access",
    description: "Shop new arrivals 24 hours before they're available to everyone else",
    icon: "🔑",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Free Shipping",
    description: "Enjoy free standard shipping on all your orders, no minimum purchase required",
    icon: "🚚",
    image: "https://images.unsplash.com/photo-1565307528294-f70f3c7094e0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Birthday Treat",
    description: "Receive a special gift or discount during your birthday month",
    icon: "🎁",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Points Multipliers",
    description: "Earn double or triple points during special events and promotions",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Member-Only Events",
    description: "Get invited to exclusive shopping events and beauty workshops",
    icon: "📅",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"
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
    <section id="benefits" className="py-16 px-6 sm:px-10 md:px-16 lg:px-24">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div
              id={`benefit-${benefit.id}`}
              key={benefit.id}
              className={`glass-card rounded-xl overflow-hidden hover-scale transition-opacity duration-700 ease-in-out ${
                visibleBenefits.includes(benefit.id) ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-full h-40 overflow-hidden">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3" role="img" aria-label={benefit.title}>
                    {benefit.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-glam-dark">{benefit.title}</h3>
                </div>
                <p className="text-glam-dark/70">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-colors">
            Explore All Benefits
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
