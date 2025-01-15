import React from 'react';
import Navbar from '../components/Navbar';
import PricingComponent from '../components/Pricing';
import Footer from '../components/Footer';

const PricingPage = () => {
  return (
    <div className="bg-neutral-900 min-h-screen">
      <Navbar />
      <div className="pt-20">
        <div className="text-center mb-12 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent <span className="text-purple-400">Pricing</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </p>
        </div>
        <PricingComponent />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
