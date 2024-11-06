import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaPiggyBank, FaUserFriends } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaRocket className="w-16 h-16 text-primary" />,
    title: 'Quantum Efficiency',
    description: 'Harness the power of quantum computing to streamline your operations at light speed.',
  },
  {
    icon: <FaPiggyBank className="w-16 h-16 text-secondary" />,
    title: 'AI-Driven Savings',
    description: 'Our AI algorithms continuously optimize your resources, maximizing cost-effectiveness.',
  },
  {
    icon: <FaUserFriends className="w-16 h-16 text-accent" />,
    title: 'Neural Interface',
    description: 'Experience seamless interaction with our brain-computer interface technology.',
  },
];

const BenefitItem = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex flex-col items-center text-center p-8 bg-gradient-to-br from-background/10 to-background-dark/10 rounded-3xl shadow-2xl backdrop-blur-md border border-primary/5 transform transition-all duration-300 perspective-1000"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl filter blur-xl opacity-50 z-0"></div>
      <motion.div
        animate={{ rotateY: isHovered ? 360 : 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="relative z-10"
      >
        {icon}
      </motion.div>
      <h3 className="mt-6 text-2xl font-bold text-contrast dark:text-contrast-dark relative z-10">
        {title}
      </h3>
      <p className="mt-3 text-contrast/75 dark:text-contrast-dark/75 font-light relative z-10 tracking-wide">
        {description}
      </p>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl filter blur-sm z-0"
          ></motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-background dark:bg-background-dark overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl z-0"
        ></motion.div>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-contrast dark:text-contrast-dark tracking-tight relative z-10"
        >
          Why Choose{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            KlevaKit
          </span>
          ?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}