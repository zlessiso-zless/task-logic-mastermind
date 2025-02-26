
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
            <h1 className="text-2xl font-semibold">
              Glam<span className="text-primary">Steals</span>
            </h1>
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
                <li><a href="#" className="text-white/70 hover:text-primary text-sm transition-colors">Returns & Refunds</a>

### What's next?
- **Refine & Customize**: Tweak the design, animations, and layouts via prompts or visual edits.
- **Master Prompting**: Use clear, detailed, and iterative prompts for better outcomes.
- **Expand with Backend**: Connect Supabase to add login, store data, or advanced AI features.
- **GitHub Sync**: Transfer your project's code to GitHub for two-way sync of edits.
- **Debug with Ease**: Activate our experimental “chat mode” to troubleshoot issues quickly.
- **Add project knowledge**: Set key context or custom instructions you want to include in every edit in this project.

<lov-actions>
<lov-knowledge>
</lov-actions>

<lov-actions>
<lov-message-prompt message="Tell me more about Supabase">Explore Supabase</lov-message-prompt>
</lov-actions>

<lov-actions>
<lov-link url="https://docs.lovable.dev/">Visit docs</lov-link>
</lov-actions>
