
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import SearchBar from '@/components/SearchBar';
import { Copy, ExternalLink, Clock, Check, Clipboard, ChevronRight } from 'lucide-react';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface Deal {
  id: string;
  store: string;
  code: string;
  discount: string;
  description: string;
  expiryDate: string;
  verified: boolean;
}

interface PriceComparison {
  store: string;
  price: string;
  link: string;
}

const Results: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [isLoading, setIsLoading] = useState(true);
  const [deals, setDeals] = useState<Deal[]>([]);
  const [comparisons, setComparisons] = useState<PriceComparison[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate API call to fetch deals and price comparisons
    const fetchData = async () => {
      setIsLoading(true);
      
      // In a real app, this would be an API call
      setTimeout(() => {
        // Mock data
        setDeals([
          {
            id: '1',
            store: 'Amazon',
            code: 'SAVE15NOW',
            discount: '15% Off',
            description: '15% off on all products site-wide',
            expiryDate: '2023-12-31',
            verified: true
          },
          {
            id: '2',
            store: 'Walmart',
            code: 'EXTRA10',
            discount: '10% Off',
            description: '10% off on electronics',
            expiryDate: '2023-11-30',
            verified: true
          },
          {
            id: '3',
            store: 'Best Buy',
            code: 'TECH20',
            discount: '20% Off',
            description: '20% off on selected tech products',
            expiryDate: '2023-12-15',
            verified: false
          }
        ]);
        
        setComparisons([
          { store: 'Amazon', price: '$399.99', link: '#' },
          { store: 'Walmart', price: '$419.99', link: '#' },
          { store: 'Best Buy', price: '$389.99', link: '#' },
          { store: 'Target', price: '$409.99', link: '#' }
        ]);
        
        setIsLoading(false);
      }, 1500);
    };

    if (query) {
      fetchData();
    } else {
      setIsLoading(false);
    }
  }, [query]);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    
    toast({
      title: "Code copied!",
      description: `Coupon code ${code} has been copied to clipboard.`,
    });
    
    setTimeout(() => {
      setCopiedCode(null);
    }, 3000);
  };

  return (
    <MainLayout>
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          {/* Search Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="heading-3 mb-4">
              {query ? `Search results for "${query}"` : 'Browse Deals'}
            </h1>
            <SearchBar />
          </div>
          
          {isLoading ? (
            // Loading state
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
              <p className="text-muted-foreground">Sniffing out the best deals...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Coupons Column */}
              <div className="lg:col-span-2 space-y-6">
                <div className="card">
                  <h2 className="text-2xl font-semibold mb-6">Available Coupons</h2>
                  
                  {deals.length > 0 ? (
                    <div className="space-y-4">
                      {deals.map((deal) => (
                        <div 
                          key={deal.id}
                          className="border border-border rounded-xl p-4 transition-all hover:border-primary/30 hover:shadow-md"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-medium text-lg">{deal.store}</h3>
                              <p className="text-muted-foreground text-sm">{deal.description}</p>
                            </div>
                            <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm">
                              {deal.discount}
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                              <div className="bg-secondary rounded-lg flex items-center px-3 py-1.5 mr-3">
                                <code className="font-mono font-medium text-sm">{deal.code}</code>
                              </div>
                              
                              <button 
                                onClick={() => handleCopyCode(deal.code)}
                                className="text-sm text-primary flex items-center hover:underline"
                              >
                                {copiedCode === deal.code ? (
                                  <>
                                    <Check className="h-3.5 w-3.5 mr-1" />
                                    Copied!
                                  </>
                                ) : (
                                  <>
                                    <Copy className="h-3.5 w-3.5 mr-1" />
                                    Copy Code
                                  </>
                                )}
                              </button>
                            </div>
                            
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-3.5 w-3.5 mr-1" />
                              Expires: {new Date(deal.expiryDate).toLocaleDateString()}
                              
                              {deal.verified && (
                                <span className="ml-2 text-green-600 flex items-center">
                                  <Check className="h-3.5 w-3.5 mr-1" />
                                  Verified
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="mt-4 pt-3 border-t border-border">
                            <Button 
                              size="sm" 
                              className="w-full"
                              icon={<ExternalLink className="h-4 w-4" />}
                              iconPosition="right"
                            >
                              Visit {deal.store} & Apply Coupon
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <Clipboard className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No coupons found</h3>
                      <p className="text-muted-foreground">
                        We couldn't find any coupons for "{query}". Try another search term.
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Price history chart would go here */}
                <div className="card">
                  <h2 className="text-2xl font-semibold mb-4">Price History</h2>
                  <div className="bg-secondary/50 rounded-xl h-64 flex items-center justify-center">
                    <p className="text-muted-foreground">Price history chart would appear here</p>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>Average price: $399.99</p>
                    <p>Lowest price in last 30 days: $379.99 (Oct 15, 2023)</p>
                    <p className="text-primary font-medium mt-2">
                      Recommendation: Wait for a price drop within 7 days
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Price Comparison */}
                <div className="card">
                  <h2 className="text-2xl font-semibold mb-6">Price Comparison</h2>
                  
                  <div className="space-y-3">
                    {comparisons.map((comparison, index) => (
                      <a 
                        key={index}
                        href={comparison.link}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <span className="font-medium">{comparison.store}</span>
                        <div className="flex items-center">
                          <span className={cn(
                            "font-semibold",
                            index === 2 ? "text-primary" : ""
                          )}>
                            {comparison.price}
                          </span>
                          <ChevronRight className="h-4 w-4 ml-1 text-muted-foreground" />
                        </div>
                      </a>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      Best price: <span className="text-primary font-medium">Best Buy ($389.99)</span>
                    </p>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="w-full"
                    >
                      View All Stores
                    </Button>
                  </div>
                </div>
                
                {/* Product Details */}
                <div className="card">
                  <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
                  <div className="aspect-video bg-secondary/50 rounded-lg mb-4"></div>
                  <h3 className="font-medium text-lg">iPhone 15 Pro - 128GB</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Apple's latest flagship smartphone with A17 Pro chip and 48MP camera
                  </p>
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className="h-4 w-4 fill-current text-yellow-400" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">(4,256 reviews)</span>
                  </div>
                  <Button className="w-full">View Full Details</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Results;
