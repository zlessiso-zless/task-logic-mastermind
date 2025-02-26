
import { useState, useEffect } from 'react';

// This would be fetched from an API in a real implementation
const mockUserData = {
  name: "Jessica",
  memberSince: "2022",
  tier: "Gold"
};

export const Header = () => {
  const [greeting, setGreeting] = useState("");
  
  useEffect(() => {
    const hours = new Date().getHours();
    let timeGreeting = "Welcome";
    
    if (hours < 12) {
      timeGreeting = "Good morning";
    } else if (hours >= 12 && hours < 17) {
      timeGreeting = "Good afternoon";
    } else {
      timeGreeting = "Good evening";
    }
    
    setGreeting(timeGreeting);
  }, []);

  return (
    <header className="w-full px-6 py-4 sm:px-10 md:px-16 lg:px-24 relative z-10">
      <div className="animate-fadeIn max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="https://www.glamsteals.com.au/cdn/shop/files/logo-gold_140x.png?v=1614309235"
                alt="GlamSteals Logo"
                className="h-10 mr-2"
              />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-glam-dark hover:text-primary transition-colors">Benefits</a>
            <a href="#rewards" className="text-glam-dark hover:text-primary transition-colors">Rewards</a>
            <a href="#exclusives" className="text-glam-dark hover:text-primary transition-colors">Exclusives</a>
          </nav>
          
          <div className="flex items-center">
            <span className="hidden sm:inline-block mr-3 text-sm font-medium text-glam-dark">{mockUserData.tier} Member</span>
            <div className="w-10 h-10 rounded-full bg-glam-light-pink flex items-center justify-center border-2 border-primary">
              <span className="text-primary font-semibold">{mockUserData.name.charAt(0)}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 mb-12 text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-glam-light-pink text-primary rounded-full mb-4 animate-scaleIn">
            {mockUserData.tier} Member Since {mockUserData.memberSince}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-glam-dark animate-fadeIn animate-delay-100">
            {greeting}, <span className="text-primary">{mockUserData.name}</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-glam-dark/80 max-w-xl mx-auto animate-fadeIn animate-delay-200">
            Welcome back to your personalized Glam Steals rewards dashboard. Discover your rewards, track your progress, and enjoy exclusive offers.
          </p>
          
          <div className="mt-8 flex justify-center space-x-4 animate-fadeIn animate-delay-300">
            <button className="px-5 py-2.5 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-colors">
              Browse Rewards
            </button>
            <button className="px-5 py-2.5 bg-white border border-primary/20 text-primary rounded-lg shadow-sm hover:bg-glam-light-pink transition-colors">
              View Account
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
