
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';

const Index: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
    </MainLayout>
  );
};

export default Index;
