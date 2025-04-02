
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-8 bg-secondary mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-bold text-xl">SaveSmart</span>
              <p className="text-sm text-muted-foreground mt-1">
                © {new Date().getFullYear()} SaveSmart. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <Link to="/join-rewards" className="text-muted-foreground hover:text-foreground transition-colors">
                Join Rewards
              </Link>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
