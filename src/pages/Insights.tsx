
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { cn } from '@/lib/utils';
import { ArrowRight, ArrowDown, ArrowUp, Calendar, Info, Lightbulb, CheckCircle2, CalendarDays, Percent } from 'lucide-react';
import Button from '@/components/Button';

const InsightCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  color: string;
  className?: string;
}> = ({ title, description, icon, color, className }) => {
  return (
    <div className={cn(
      "card transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      className
    )}>
      <div className={cn(
        "flex items-center justify-center w-12 h-12 rounded-full mb-4",
        color
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Insights: React.FC = () => {
  return (
    <MainLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="heading-2 mb-4">Shopping Insights</h1>
            <p className="text-xl text-muted-foreground">
              Make smarter shopping decisions with our data-driven insights.
            </p>
          </div>
          
          {/* General Insights */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Today's Shopping Recommendations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <InsightCard
                title="Best Day to Shop"
                description="According to our data, Tuesdays and Wednesdays typically have the best deals this month."
                icon={<Calendar className="h-6 w-6 text-white" />}
                color="bg-blue-500"
              />
              
              <InsightCard
                title="Price Drop Alert"
                description="Electronics prices are expected to drop significantly in the next 2 weeks."
                icon={<ArrowDown className="h-6 w-6 text-white" />}
                color="bg-green-500"
              />
              
              <InsightCard
                title="Seasonal Trends"
                description="Winter apparel prices are starting to rise as we approach the colder months."
                icon={<ArrowUp className="h-6 w-6 text-white" />}
                color="bg-amber-500"
              />
            </div>
          </div>
          
          {/* Product Specific Insights */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">iPhone 15 Pro Insights</h2>
            
            <div className="card p-6 bg-background border border-border/50">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="aspect-square bg-secondary/50 rounded-lg mb-4"></div>
                  <h3 className="font-medium text-lg">iPhone 15 Pro</h3>
                  <div className="flex items-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className="h-4 w-4 fill-current text-yellow-400" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">(4,256)</span>
                  </div>
                  <p className="text-lg font-semibold">$999.00</p>
                </div>
                
                <div className="md:w-2/3 space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Price Prediction</h4>
                      <p className="text-sm text-muted-foreground">
                        Based on historical data, we predict the price may drop by ~$50-100 in 
                        the next 3-4 weeks. Consider waiting if you're not in a hurry.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/10">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Best Purchase Time</h4>
                      <p className="text-sm text-muted-foreground">
                        The optimal time to buy this product is typically mid-November, 
                        just before Black Friday sales begin.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
                    <CalendarDays className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Historical Price Range</h4>
                      <p className="text-sm text-muted-foreground">
                        In the past 6 months, this product has been priced between $899 and $1,099.
                        The current price is in the middle of this range.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                    <Percent className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Discount Frequency</h4>
                      <p className="text-sm text-muted-foreground">
                        This product is discounted approximately every 45 days, with an average
                        discount of 8%. The last discount was 27 days ago.
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    icon={<Info className="h-4 w-4" />}
                    className="mt-2"
                  >
                    View Detailed Analysis
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Alternate Products */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Alternatives You Might Like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Samsung Galaxy S23', 'Google Pixel 7 Pro', 'OnePlus 11', 'Xiaomi 13 Pro'].map((product, idx) => (
                <div key={idx} className="card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="aspect-square bg-secondary/50 rounded-lg mb-4"></div>
                  <h3 className="font-medium">{product}</h3>
                  <div className="flex items-center space-x-1 my-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className="h-3 w-3 fill-current text-yellow-400" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-muted-foreground">(2,100+)</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">Starting from</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">$799.00</span>
                    <Button variant="ghost" size="sm" className="p-2">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Insights;
