
import React from 'react';
import { ShoppingBag, Tag, BarChart3, Percent } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
  imageSrc?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, imageSrc }) => {
  return (
    <div className={cn(
      "card group hover:translate-y-[-5px] opacity-0 animate-fade-up overflow-hidden",
      delay
    )}>
      {imageSrc && (
        <div className="h-40 -mx-6 -mt-6 mb-6 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="bg-emerald-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Tag className="h-6 w-6" />,
      title: "Exclusive Coupons",
      description: "Access thousands of verified coupon codes and promotions for your favorite stores.",
      delay: "delay-1",
      imageSrc: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80"
    },
    {
      icon: <Percent className="h-6 w-6" />,
      title: "Cashback Rewards",
      description: "Earn cashback when you shop through our platform at participating retailers.",
      delay: "delay-2",
      imageSrc: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&q=80"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Price Insights",
      description: "View price history and get recommendations on the best time to buy.",
      delay: "delay-3",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Store Comparisons",
      description: "Compare prices across multiple retailers to find the best deal.",
      delay: "delay-4",
      imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-up">
          <h2 className="heading-2 mb-4">How We Help You Save</h2>
          <p className="text-lg text-muted-foreground">
            Our suite of money-saving tools helps you shop smarter and spend less on every purchase.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              imageSrc={feature.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
