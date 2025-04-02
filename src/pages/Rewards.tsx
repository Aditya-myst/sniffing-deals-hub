
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { 
  Gift, 
  CreditCard, 
  ShoppingBag, 
  Zap, 
  Award, 
  TrendingUp, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';

// Partner Offer Card
const PartnerOfferCard = ({ 
  logo, 
  name, 
  discount, 
  description 
}: { 
  logo: string;
  name: string;
  discount: string;
  description: string;
}) => (
  <div className="card group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center shrink-0 overflow-hidden">
        <img src={logo} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg">{name}</h3>
          <span className="text-emerald-500 font-bold">{discount}</span>
        </div>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
        <div className="mt-3">
          <Button 
            variant="secondary" 
            size="sm" 
            icon={<ShoppingBag className="h-4 w-4" />}
            iconPosition="left"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  </div>
);

// Reward Category Card
const RewardCategoryCard = ({ 
  icon, 
  title, 
  description, 
  color
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) => (
  <div className="card group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className={cn(
      "w-12 h-12 rounded-full flex items-center justify-center mb-4",
      color
    )}>
      {icon}
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
    <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
      Learn More
      <ChevronRight className="h-4 w-4 ml-1" />
    </div>
  </div>
);

const Rewards = () => {
  const partnerOffers = [
    {
      logo: "https://images.unsplash.com/photo-1662576303712-a29cfa594c94?auto=format&fit=crop&q=80&w=200&h=200",
      name: "Amazon",
      discount: "5% Cashback",
      description: "On all purchases through SaveSmart"
    },
    {
      logo: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&q=80&w=200&h=200",
      name: "Target",
      discount: "7% Cashback",
      description: "Limited time offer for electronics"
    },
    {
      logo: "https://images.unsplash.com/photo-1530890105946-39e9e95b7dc4?auto=format&fit=crop&q=80&w=200&h=200",
      name: "Best Buy",
      discount: "6% Cashback",
      description: "Plus exclusive coupons for members"
    },
    {
      logo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=200&h=200",
      name: "Walmart",
      discount: "4% Cashback",
      description: "On groceries and household items"
    }
  ];

  const rewardCategories = [
    {
      icon: <Gift className="h-6 w-6 text-white" />,
      title: "Gift Cards",
      description: "Redeem your points for gift cards from top retailers",
      color: "bg-emerald-500"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-white" />,
      title: "Cash Rewards",
      description: "Transfer your earnings directly to your bank account",
      color: "bg-blue-500"
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Exclusive Deals",
      description: "Unlock special offers only available to members",
      color: "bg-amber-500"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "Point Multipliers",
      description: "Shop during bonus periods to earn extra points",
      color: "bg-purple-500"
    }
  ];

  return (
    <MainLayout>
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="heading-2 mb-4">Earn Rewards & Save More</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Shop through SaveSmart and earn cashback, points, and exclusive offers from your favorite retailers.
            </p>
            <Link to="/join-rewards">
              <Button 
                icon={<Award className="h-5 w-5" />}
                iconPosition="left"
                className="mx-auto"
              >
                Join Rewards Program
              </Button>
            </Link>
          </div>

          {/* User Rewards Summary - Simulated */}
          <div className="mb-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-white/70 text-sm">Available Points</div>
                <div className="text-3xl font-bold">2,450</div>
                <div className="text-xs text-white/70">≈ $24.50 in rewards</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-white/70 text-sm">Lifetime Cashback</div>
                <div className="text-3xl font-bold">$135.75</div>
                <div className="text-xs text-white/70">From 23 purchases</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-white/70 text-sm">Current Tier</div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold">Silver</span>
                </div>
                <div className="text-xs text-white/70">550 points to Gold tier</div>
              </div>
            </div>
          </div>

          {/* Partner Offers */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">Featured Partner Offers</h2>
              <Button variant="ghost" size="sm" className="text-emerald-500" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                View All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerOffers.map((offer, index) => (
                <PartnerOfferCard
                  key={index}
                  logo={offer.logo}
                  name={offer.name}
                  discount={offer.discount}
                  description={offer.description}
                />
              ))}
            </div>
          </div>

          {/* Reward Categories */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">Ways to Earn & Redeem</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rewardCategories.map((category, index) => (
                <RewardCategoryCard
                  key={index}
                  icon={category.icon}
                  title={category.title}
                  description={category.description}
                  color={category.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Rewards;
