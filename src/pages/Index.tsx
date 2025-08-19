import React from 'react';
import TPHeader from '@/components/TPHeader';
import TPHero from '@/components/TPHero';
import TPFeatures from '@/components/TPFeatures';
import TPBenefits from '@/components/TPBenefits';

const Index = () => {
  return (
    <div className="min-h-screen">
      <TPHeader />
      <main>
        <TPHero />
        <TPFeatures />
        <TPBenefits />
      </main>
    </div>
  );
};

export default Index;
