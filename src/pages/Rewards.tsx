
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { cn } from '@/lib/utils';
import { Wallet, Gift, CreditCard, ShoppingBag, ExternalLink, Award, TrendingUp, Clock } from 'lucide-react';
import Button from '@/components/Button';

const RewardCard: React.FC<{
  title: string;
  description: string;
  reward: string;
  logo: React.ReactNode;
  color: string;
}> = ({ title, description, reward, logo, color }) => {
  return (
    <div className="card hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4",
          color
        )}>
          {logo}
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <div className="bg-secondary/50 py-1.5 px-3 rounded-full inline-block text-sm font-medium">
            {reward}
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <Button 
          variant="secondary" 
          size="sm" 
          className="w-full"
          icon={<ExternalLink className="h-4 w-4" />}
          iconPosition="right"
        >
          Visit & Earn
        </Button>
      </div>
    </div>
  );
};

const Rewards: React.FC = () => {
  const partnerRewards = [
    {
      title: 'Amazon',
      description: 'Earn cashback on all eligible purchases',
      reward: 'Up to 5% cashback',
      logo: <ShoppingBag className="h-6 w-6 text-white" />,
      color: 'bg-orange-500'
    },
    {
      title: 'Walmart',
      description: 'Special discount when paying with your linked card',
      reward: '3% instant discount',
      logo: <CreditCard className="h-6 w-6 text-white" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Best Buy',
      description: 'Points for every dollar spent in-store or online',
      reward: '2x points per $1',
      logo: <Gift className="h-6 w-6 text-white" />,
      color: 'bg-yellow-500'
    },
    {
      title: 'Target',
      description: 'Bonus cashback when shopping through DealSniffer',
      reward: 'Extra 2% cashback',
      logo: <Wallet className="h-6 w-6 text-white" />,
      color: 'bg-red-500'
    }
  ];

  return (
    <MainLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="heading-2 mb-4">Rewards Program</h1>
            <p className="text-xl text-muted-foreground">
              Earn cashback and rewards when you shop through DealSniffer.
            </p>
          </div>
          
          {/* User Rewards Summary */}
          <div className="card mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-16 w-16 text-primary" />
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h2 className="heading-3 mb-2">Your Rewards</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Sign up or log in to start earning rewards on your purchases.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button>Sign Up Now</Button>
                  <Button variant="secondary">Login</Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Shop Through Our Links</h3>
                <p className="text-muted-foreground">
                  Visit your favorite stores by clicking through our site or using our browser extension.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Earn Points & Cashback</h3>
                <p className="text-muted-foreground">
                  Automatically earn rewards points and cashback on qualifying purchases.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Wallet className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Redeem Your Rewards</h3>
                <p className="text-muted-foreground">
                  Cash out your earnings or redeem points for gift cards and exclusive deals.
                </p>
              </div>
            </div>
          </div>
          
          {/* Partner Rewards */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Partner Rewards</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerRewards.map((reward, idx) => (
                <RewardCard
                  key={idx}
                  title={reward.title}
                  description={reward.description}
                  reward={reward.reward}
                  logo={reward.logo}
                  color={reward.color}
                />
              ))}
            </div>
          </div>
          
          {/* Limited Time Offers */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Limited Time Offers</h2>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="card bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/4 flex items-center justify-center">
                    <div className="bg-primary/10 rounded-full p-6">
                      <Clock className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  
                  <div className="md:w-2/4">
                    <h3 className="text-xl font-semibold mb-2">Black Friday Rewards Boost</h3>
                    <p className="text-muted-foreground mb-4">
                      Earn double rewards points on all purchases made between November 24-28.
                      Limited time offer for all DealSniffer members!
                    </p>
                    <div className="flex items-center text-sm space-x-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-muted-foreground">Ends in 13 days</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/4 flex justify-center md:justify-end">
                    <Button>
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="card border-yellow-500/20 bg-gradient-to-r from-yellow-500/5 to-orange-500/5">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/4 flex items-center justify-center">
                    <div className="bg-yellow-500/10 rounded-full p-6">
                      <Gift className="h-12 w-12 text-yellow-500" />
                    </div>
                  </div>
                  
                  <div className="md:w-2/4">
                    <h3 className="text-xl font-semibold mb-2">Holiday Gift Card Bundle</h3>
                    <p className="text-muted-foreground mb-4">
                      Redeem your points for gift cards and receive a 15% bonus value.
                      Perfect for holiday shopping or gifting!
                    </p>
                    <div className="flex items-center text-sm space-x-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-muted-foreground">Ends in 21 days</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/4 flex justify-center md:justify-end">
                    <Button>
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Rewards;
