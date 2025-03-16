
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import SearchBar from './SearchBar';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  // Refs for animation elements
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add animation classes after mount
    const elements = [
      { ref: titleRef, className: 'animate-fade-up opacity-0' },
      { ref: subtitleRef, className: 'animate-fade-up opacity-0 delay-1' },
      { ref: searchRef, className: 'animate-fade-up opacity-0 delay-2' }
    ];
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      elements.forEach(({ ref, className }) => {
        if (ref.current) {
          ref.current.className = cn(ref.current.className, className);
        }
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge - Optional */}
        <div className="inline-flex items-center rounded-full border border-border bg-background/50 px-3 py-1 text-sm mb-6 shadow-sm backdrop-blur-sm">
          <span className="text-muted-foreground">Introducing DealSniffer</span>
          <ArrowRight className="ml-1 h-3.5 w-3.5 text-muted-foreground" />
        </div>
        
        {/* Title */}
        <h1 
          ref={titleRef}
          className="opacity-0 heading-1 mb-6 tracking-tight"
        >
          <span className="text-gradient">Sniff Out</span> The Best Deals Online
        </h1>
        
        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="opacity-0 text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Find coupons, compare prices, and get valuable shopping insights with just one search.
        </p>
        
        {/* Search Bar */}
        <div ref={searchRef} className="opacity-0 w-full flex justify-center">
          <SearchBar variant="large" className="w-full" />
        </div>
        
        {/* Example Searches */}
        <div className="mt-6 text-sm text-muted-foreground flex flex-wrap justify-center gap-2">
          <span>Try searching:</span>
          <button className="text-primary hover:underline transition-all">Nike Shoes</button>
          <span>•</span>
          <button className="text-primary hover:underline transition-all">Amazon.com</button>
          <span>•</span>
          <button className="text-primary hover:underline transition-all">iPhone 15</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
