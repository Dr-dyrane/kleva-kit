import React from 'react';
import HeroSection from '../components/Home/Hero/HeroSection';
// import FeaturesSection from '../components/Home/FeaturesSection';
// import BenefitsSection from '../components/Home/BenefitsSection';
// import PricingSection from '../components/Home/PricingSection';
// import TestimonialsSection from '../components/Home/TestimonialsSection';
// import FAQSection from '../components/Home/FAQSection';

const Home = () => {
  return (
    <div className='shadow-md min-h-screen justify-center items-center scrollbar-hide'>
      <HeroSection />
      {/* <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection /> */}
    </div>
  );
};

export default Home;
