import React from "react";
import HeroSection from "../components/Home/Hero/HeroSection";
import FeaturesSection from "../components/Home/Features/FeaturesSection";
import BenefitsSection from "../components/Home/Benefits/BenefitsSection";
import PricingSection from "../components/Home/Pricing/PricingSection";
import TestimonialsSection from "../components/Home/Testimonials/TestimonialsSection";
// import FAQSection from '../components/Home/FAQSection';

const Home = () => {
    return (
        <div className="shadow-md min-h-screen justify-center items-center scrollbar-hide">
            <HeroSection />
            <FeaturesSection />
            <BenefitsSection />
            <PricingSection />
            <TestimonialsSection />
            {/*
      <FAQSection /> */}
        </div>
    );
};

export default Home;
