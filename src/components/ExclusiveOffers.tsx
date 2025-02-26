
import { useState, useEffect } from 'react';

// Mock data - would come from API in real implementation
const mockOffers = [
  {
    id: 1,
    title: "Limited Edition Summer Collection",
    discount: "15% OFF",
    expiry: "3 days left",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    code: "SUMMER15",
    personalized: true
  },
  {
    id: 2,
    title: "Premium Skincare Bundle",
    discount: "20% OFF",
    expiry: "1 week left",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    code: "SKINGLOW20",
    personalized: false
  },
  {
    id: 3,
    title: "Gold Member Exclusive: Hair Care",
    discount: "Buy One Get One Free",
    expiry: "2 weeks left",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
    code: "GOLDHAIR2X",
    personalized: true
  }
];

export const ExclusiveOffers = () => {
  const [activeOffer, setActiveOffer] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isCopied, setIsCopied] = useState<number | null>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const copyCode = (code: string, id: number) => {
    navigator.clipboard.writeText(code);
    setIsCopied(id);
    setTimeout(() => setIsCopied(null), 2000);
  };
  
  return (
    <section id="exclusives" className={`py-16 px-6 sm:px-10 md:px-16 lg:px-24 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-xs font-medium bg-glam-light-gold text-glam-gold rounded-full">
            Just For You
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-glam-dark">
            Exclusive Offers
          </h2>
          <p className="mt-4 text-base md:text-lg text-glam-dark/70 max-w-2xl mx-auto">
            Special deals curated based on your preferences and shopping history.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 space-y-4">
            {mockOffers.map((offer, index) => (
              <div
                key={offer.id}
                className={`p-4 rounded-xl hover-scale cursor-pointer transition-all duration-300 ${
                  activeOffer === index 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'glass-card hover:border-primary'
                }`}
                onClick={() => setActiveOffer(index)}
              >
                <div className="flex items-center">
                  <div 
                    className={`w-14 h-14 rounded-lg overflow-hidden mr-4 ${
                      activeOffer === index ? 'border-2 border-white' : 'border border-glam-light-pink'
                    }`}
                  >
                    <img 
                      src={offer.image} 
                      alt={offer.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className={`font-medium ${activeOffer === index ? 'text-white' : 'text-glam-dark'}`}>
                      {offer.title}
                    </h3>
                    <p className={`text-sm ${activeOffer === index ? 'text-white/80' : 'text-glam-dark/70'}`}>
                      {offer.discount} • {offer.expiry}
                    </p>
                  </div>
                </div>
                {offer.personalized && (
                  <div 
                    className={`mt-2 text-xs px-2 py-0.5 rounded-full inline-flex items-center ${
                      activeOffer === index 
                        ? 'bg-white/20 text-white' 
                        : 'bg-glam-light-pink text-primary'
                    }`}
                  >
                    <span>Personalized</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="lg:w-2/3">
            <div className="glass-card rounded-2xl overflow-hidden animate-scaleIn h-full">
              <div className="aspect-w-16 aspect-h-9 w-full h-48 md:h-64 lg:h-80 overflow-hidden">
                <img
                  src={mockOffers[activeOffer].image}
                  alt={mockOffers[activeOffer].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-glam-dark">
                      {mockOffers[activeOffer].title}
                    </h3>
                    <p className="text-glam-dark/70 mt-1">
                      {mockOffers[activeOffer].discount}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-glam-light-pink text-primary rounded-full text-sm">
                    {mockOffers[activeOffer].expiry}
                  </span>
                </div>
                
                <div className="mt-6 flex items-center justify-between p-3 bg-glam-light-pink/50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-primary font-medium mr-3">Your Code:</span>
                    <code className="text-glam-dark font-mono font-semibold bg-white px-3 py-1 rounded-md">
                      {mockOffers[activeOffer].code}
                    </code>
                  </div>
                  <button
                    onClick={() => copyCode(mockOffers[activeOffer].code, mockOffers[activeOffer].id)}
                    className="text-sm px-3 py-1 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    {isCopied === mockOffers[activeOffer].id ? "Copied!" : "Copy"}
                  </button>
                </div>
                
                <div className="mt-8">
                  <button className="w-full py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveOffers;
