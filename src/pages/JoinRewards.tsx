
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { 
  Award, 
  Gift, 
  CreditCard, 
  TrendingUp, 
  ChevronRight,
  Lock,
  Check
} from 'lucide-react';

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const FeatureBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center text-sm text-muted-foreground mb-3">
    <div className="mr-2 h-4 w-4 text-emerald-500">
      <Check size={16} />
    </div>
    {children}
  </div>
);

const PlanCard = ({ 
  title, 
  price, 
  description, 
  features,
  recommended = false 
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}) => (
  <Card className={cn(
    "relative transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
    recommended && "border-emerald-500 shadow-md"
  )}>
    {recommended && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full">
        Recommended
      </div>
    )}
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <div className="mt-2">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Free" && <span className="text-sm text-muted-foreground">/month</span>}
      </div>
      <CardDescription className="mt-2">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        {features.map((feature, i) => (
          <FeatureBadge key={i}>{feature}</FeatureBadge>
        ))}
      </div>
    </CardContent>
    <CardFooter>
      <Button 
        className={cn("w-full", recommended ? "bg-emerald-500 hover:bg-emerald-600" : "")}
        onClick={() => toast.success(`You've selected the ${title} plan!`)}
      >
        Choose Plan
      </Button>
    </CardFooter>
  </Card>
);

const MembershipTiers = () => {
  const tiers = [
    {
      title: "Basic",
      price: "Free",
      description: "Essential savings for casual shoppers",
      features: [
        "Access to basic coupons",
        "Weekly savings newsletter",
        "Limited price tracking",
        "Standard support"
      ],
      recommended: false
    },
    {
      title: "Premium",
      price: "$4.99",
      description: "Enhanced savings for regular shoppers",
      features: [
        "All basic features",
        "Exclusive coupon codes",
        "Unlimited price tracking",
        "Personalized deal alerts",
        "Priority support"
      ],
      recommended: true
    },
    {
      title: "Elite",
      price: "$9.99",
      description: "Maximum savings for serious shoppers",
      features: [
        "All premium features",
        "Early access to deals",
        "Cashback on all purchases",
        "Price match guarantee",
        "Dedicated account manager",
        "API access"
      ],
      recommended: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
      {tiers.map((tier, i) => (
        <PlanCard
          key={i}
          title={tier.title}
          price={tier.price}
          description={tier.description}
          features={tier.features}
          recommended={tier.recommended}
        />
      ))}
    </div>
  );
};

const BenefitCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex space-x-4">
    <div className="mt-1">
      <div className="bg-emerald-100 text-emerald-600 p-2 rounded-full">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

const JoinRewards = () => {
  const [formStep, setFormStep] = useState<'signup' | 'plans'>('signup');
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Account created successfully!");
    setFormStep('plans');
  }

  const benefits = [
    {
      icon: <Gift size={20} />,
      title: "Exclusive Rewards",
      description: "Earn points on every purchase and redeem them for discounts or gift cards."
    },
    {
      icon: <CreditCard size={20} />,
      title: "Cashback Offers",
      description: "Get cash back when shopping through our platform at partner retailers."
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Price Drop Alerts",
      description: "Receive notifications when prices drop for items on your wishlist."
    },
    {
      icon: <Award size={20} />,
      title: "Member-Only Deals",
      description: "Access special promotions and coupon codes only available to members."
    }
  ];

  return (
    <MainLayout>
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="heading-2 mb-4">Join SaveSmart Rewards</h1>
            <p className="text-lg text-muted-foreground">
              Unlock exclusive deals, earn points, and save more on your favorite products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column - Benefits and Form */}
            <div className="col-span-1 lg:col-span-3">
              {formStep === 'signup' ? (
                <>
                  <div className="space-y-8 mb-10">
                    {benefits.map((benefit, i) => (
                      <BenefitCard
                        key={i}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                      />
                    ))}
                  </div>

                  <div className="bg-secondary p-6 rounded-xl mt-8">
                    <div className="flex items-center mb-4">
                      <Lock className="text-emerald-500 mr-2 h-5 w-5" />
                      <h3 className="font-medium">Secure Sign Up</h3>
                    </div>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <Input type="password" placeholder="••••••••" {...field} />
                              </FormControl>
                              <FormDescription>
                                Must be at least 8 characters
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button type="submit" className="w-full">
                          Create Account & Join Rewards
                        </Button>
                      </form>
                    </Form>
                    
                    <div className="text-center mt-6 text-sm">
                      <p className="text-muted-foreground">
                        Already have an account?{" "}
                        <a href="#" onClick={() => toast.info("Sign in coming soon!")} className="text-emerald-500 hover:underline">
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl font-semibold mb-4">Choose Your Rewards Plan</h2>
                  <p className="text-muted-foreground mb-8">
                    Select the rewards tier that matches your shopping habits and maximize your savings.
                  </p>
                  
                  <MembershipTiers />
                  
                  <div className="mt-8 text-center">
                    <Button 
                      variant="outline" 
                      onClick={() => navigate('/rewards')}
                      className="mt-4"
                    >
                      View All Rewards Benefits
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Column - Image */}
            <div className="col-span-1 lg:col-span-2">
              <div className="sticky top-24">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80" 
                    alt="SaveSmart Rewards" 
                    className="w-full h-auto" 
                  />
                </div>
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-xl mt-6">
                  <h3 className="font-semibold text-xl mb-3">Member Testimonial</h3>
                  <p className="italic mb-4">
                    "I've saved over $500 in the past 3 months using SaveSmart Rewards. The exclusive coupons and cashback offers are incredible!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-white/70">Premium Member</div>
                    </div>
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

export default JoinRewards;
