
import { useState, useEffect } from 'react';

// Mock data - would come from API in real implementation
const mockUserData = {
  currentPoints: 750,
  nextTierPoints: 1000,
  currentTier: "Gold",
  nextTier: "Platinum",
  pointsHistory: [
    { month: "Jan", points: 120 },
    { month: "Feb", points: 85 },
    { month: "Mar", points: 200 },
    { month: "Apr", points: 145 },
    { month: "May", points: 200 }
  ]
};

export const ProgressTracker = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const progress = (mockUserData.currentPoints / mockUserData.nextTierPoints) * 100;
  const pointsToNext = mockUserData.nextTierPoints - mockUserData.currentPoints;
  
  return (
    <section className={`max-w-4xl mx-auto mb-16 px-6 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="glass-card rounded-2xl p-8 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h3 className="text-xl font-semibold text-glam-dark">Your Rewards Progress</h3>
            <p className="text-sm text-glam-dark/70 mt-1">Track your journey to the next tier</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-sm font-medium text-glam-dark/70">Current Tier:</span>
            <span className="ml-2 px-3 py-1 bg-glam-light-gold text-glam-gold rounded-full text-sm font-medium">
              {mockUserData.currentTier}
            </span>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-primary">{mockUserData.currentPoints} points</span>
            <span className="font-medium text-glam-dark/70">{mockUserData.nextTierPoints} points</span>
          </div>
          <div className="h-3 bg-glam-light-pink rounded-full overflow-hidden progress-bar-shine">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="mt-3 text-sm text-center text-glam-dark/70">
            <span className="font-medium">{pointsToNext} more points</span> to reach {mockUserData.nextTier}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {mockUserData.pointsHistory.map((month, index) => (
            <div 
              key={month.month} 
              className={`text-center p-3 rounded-lg hover-scale animate-slideUp`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="h-16 md:h-20 rounded-md bg-glam-light-pink flex items-end justify-center p-2">
                <div 
                  className="w-full bg-primary rounded-sm transition-height duration-1000 ease-out"
                  style={{ height: `${(month.points / 200) * 100}%` }}
                ></div>
              </div>
              <p className="mt-2 text-xs font-medium text-glam-dark">{month.month}</p>
              <p className="text-sm font-semibold text-primary">{month.points}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;
