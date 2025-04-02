
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Search, Menu, X, Sparkles, LogIn } from 'lucide-react';
import Button from './Button';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Coupons', path: '/results' },
    { name: 'Insights', path: '/insights' },
    { name: 'Rewards', path: '/rewards' },
  ];

  // Track scrolling for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple",
        isScrolled ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="h-8 w-8 bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center rounded-lg text-white">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-bold text-2xl text-gradient">SaveSmart</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-apple",
                location.pathname === link.path
                  ? "text-primary bg-primary/5"
                  : "text-foreground/80 hover:text-foreground hover:bg-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/">
            <Button 
              variant="ghost" 
              size="sm"
              icon={<Search className="h-4 w-4" />}
            >
              Search
            </Button>
          </Link>
          
          <Link to="/join-rewards">
            <Button 
              variant="primary" 
              size="sm"
            >
              Join Rewards
            </Button>
          </Link>
          
          <Link to="/join-rewards">
            <Button 
              variant="ghost" 
              size="sm"
              icon={<LogIn className="h-4 w-4" />}
              iconPosition="left"
            >
              Sign In
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-4 transform transition-transform duration-300 ease-apple md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "py-3 px-4 rounded-xl text-lg font-medium",
                location.pathname === link.path
                  ? "text-primary bg-primary/5"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="border-t border-border my-4"></div>
          
          <Link to="/join-rewards">
            <Button variant="primary" className="w-full mb-2">
              Join Rewards
            </Button>
          </Link>
          
          <Link to="/join-rewards">
            <Button variant="ghost" className="w-full" icon={<LogIn className="h-4 w-4" />} iconPosition="left">
              Sign In
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
