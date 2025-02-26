
import { useState } from 'react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // In a real app, this would send the email to a backend
    }
  };
  
  return (
    <footer className="bg-glam-dark text-white py-12 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center mb-4">
              <img 
                src="https://www.glamsteals.com.au/cdn/shop/files/logo-gold_140x.png?v=1614309235"
                alt="GlamSteals Logo"
                className="h-8"
              />
            </a>
            <p className="mt-4 text-white/70 text-sm">
              Elevate your style with exclusive rewards and personalized experiences.
            </p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium mb-4 text-white">Loyalty Program</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-primary text-sm transition-colors">How It Works</a></li>
                <li><a href="#" className="text-white/70 hover:text-primary text-sm transition-colors">Point System</a></li>
                <li><a href="#" className="text-white/70 hover:text-primary text-sm transition-colors">Tiers & Benefits</a></li>
                <li><a href="#" className="text-white/70 hover:text-primary text-sm transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-white">Help & Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-primary text-sm transition-colors">FAQs</a></li>
                <li><a href="#" className="text-white/70 hover:text-primary text-sm transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-white/70 hover:text-primary text-sm transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-primary text-sm transition-colors">Returns & Refunds</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-white">Stay Connected</h4>
              {isSubscribed ? (
                <div className="text-white/70 text-sm">
                  Thanks for subscribing! We'll keep you updated.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <p className="text-white/70 text-sm">Subscribe for exclusive offers and updates.</p>
                  <div className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="px-3 py-2 text-sm bg-glam-dark border border-white/20 rounded-l-md text-white w-full focus:outline-none focus:border-primary"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-primary px-3 py-2 text-white text-sm rounded-r-md hover:bg-primary/90"
                    >
                      Join
                    </button>
                  </div>
                </form>
              )}
              
              <div className="flex items-center space-x-4 mt-4">
                <a href="#" className="text-white hover:text-primary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195