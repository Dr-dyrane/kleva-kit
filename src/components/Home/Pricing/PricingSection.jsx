import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa';
import * as Dialog from '@radix-ui/react-dialog';
import * as Separator from '@radix-ui/react-separator';

const pricingTiers = [
  {
    name: 'Basic',
    price: 19,
    period: '/month',
    features: [
      { name: '5 Projects', included: true },
      { name: '10 GB Storage', included: true },
      { name: 'Basic Analytics', included: true },
      { name: 'Email Support', included: true },
      { name: 'Advanced Features', included: false },
      { name: 'Priority Support', included: false },
    ],
    description: 'Perfect for individuals and small teams just getting started with KlevaKit.',
  },
  {
    name: 'Pro',
    price: 49,
    period: '/month',
    features: [
      { name: 'Unlimited Projects', included: true },
      { name: '100 GB Storage', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Advanced Features', included: true },
      { name: 'Priority Support', included: false },
    ],
    highlighted: true,
    description: 'Ideal for growing businesses that need more power and advanced features.',
  },
  {
    name: 'Business',
    price: 99,
    period: '/month',
    features: [
      { name: 'Unlimited Projects', included: true },
      { name: 'Unlimited Storage', included: true },
      { name: 'Custom Analytics', included: true },
      { name: 'Dedicated Support', included: true },
      { name: 'Advanced Features', included: true },
      { name: 'Priority Support', included: true },
    ],
    description: 'For established businesses requiring robust solutions and dedicated support.',
  },
  {
    name: 'Enterprise',
    price: 299,
    period: '/month',
    features: [
      { name: 'Unlimited Projects', included: true },
      { name: 'Unlimited Storage', included: true },
      { name: 'Custom Analytics', included: true },
      { name: 'Dedicated Account Manager', included: true },
      { name: 'Custom Integrations', included: true },
      { name: 'On-site Training', included: true },
    ],
    description: 'Tailored solutions for large organizations with complex requirements and global teams.',
  },
];

const PricingTier = ({ name, price, period, features, highlighted, description, isYearly }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`flex flex-col p-8 bg-gradient-to-br from-background/30 to-background-dark/30 rounded-3xl backdrop-blur-md border ${
        highlighted ? 'border-primary' : 'border-gray-200 dark:border-gray-700'
      } shadow-xl transform transition-all duration-300 relative overflow-hidden`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl filter blur-xl opacity-50 z-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-50'}`}></div>
      <h3 className="text-2xl font-bold text-contrast dark:text-contrast-dark mb-4 relative z-10">{name}</h3>
      <div className="text-4xl font-bold text-primary mb-2 relative z-10">
        ${isYearly ? Math.round(price * 0.8 * 12) : price}
        <span className="text-base font-normal text-contrast/60 dark:text-contrast-dark/60">{isYearly ? '/year' : period}</span>
      </div>
      <p className="text-sm text-contrast/80 dark:text-contrast-dark/80 mb-6 relative z-10">{description}</p>
      <ul className="mt-6 space-y-4 flex-grow relative z-10">
        {features.slice(0, 4).map((feature, index) => (
          <li key={index} className="flex items-center">
            {feature.included ? (
              <FaCheck className="mr-2 text-green-500" />
            ) : (
              <FaTimes className="mr-2 text-red-500" />
            )}
            <span className={feature.included ? 'text-contrast dark:text-contrast-dark' : 'text-contrast/60 dark:text-contrast-dark/60'}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="mt-4 text-primary underline cursor-pointer relative z-10">View all features</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background dark:bg-background-dark p-6 rounded-2xl shadow-2xl max-w-md w-full z-50">
            <Dialog.Title className="text-2xl font-bold mb-4 text-contrast dark:text-contrast-dark">{name} Plan Features</Dialog.Title>
            <Dialog.Description className="text-contrast/80 dark:text-contrast-dark/80 mb-4">
              {description}
            </Dialog.Description>
            <Separator.Root className="h-px bg-gray-200 dark:bg-gray-700 my-4" />
            <ul className="space-y-2 mb-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  {feature.included ? (
                    <FaCheck className="mr-2 text-green-500" />
                  ) : (
                    <FaTimes className="mr-2 text-red-500" />
                  )}
                  <span className={feature.included ? 'text-contrast dark:text-contrast-dark' : 'text-contrast/60 dark:text-contrast-dark/60'}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
            <Dialog.Close asChild>
              <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors duration-300">Close</button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`mt-8 px-6 py-3 rounded-full font-semibold text-white relative z-10 ${
          highlighted ? 'bg-primary hover:bg-primary-dark' : 'bg-secondary hover:bg-secondary-dark'
        } transition-colors duration-300`}
      >
        Get Started
      </motion.button>
      {highlighted && (
        <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg font-semibold text-sm">
          Most Popular
        </div>
      )}
    </motion.div>
  );
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 bg-background dark:bg-background-dark overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full filter blur-3xl z-0"
        ></motion.div>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-contrast dark:text-contrast-dark tracking-tight relative z-10"
        >
          Choose Your{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Plan
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center items-center mb-12 relative z-10"
        >
          <span className={`mr-3 ${isYearly ? 'text-contrast/60 dark:text-contrast-dark/60' : 'text-contrast dark:text-contrast-dark'}`}>Monthly</span>
          <div
            className="w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer"
            onClick={() => setIsYearly(!isYearly)}
          >
            <motion.div
              className="bg-primary w-5 h-5 rounded-full shadow-md"
              layout
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
              style={{ x: isYearly ? 28 : 0 }}
            />
          </div>
          <span className={`ml-3 ${isYearly ? 'text-contrast dark:text-contrast-dark' : 'text-contrast/60 dark:text-contrast-dark/60'}`}>Yearly</span>
          <span className="ml-2 text-sm text-primary font-semibold">Save 20%</span>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              {...tier}
              isYearly={isYearly}
            />
          ))}
        </div>
      </div>
    </section>
  );
}