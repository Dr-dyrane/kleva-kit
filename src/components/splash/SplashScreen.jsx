// src/components/SplashScreen.jsx
import React from 'react';
import { motion } from 'framer-motion';
import LogoAnimation from './LogoAnimation';

const SplashScreen = ({ onFinish }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50"
    >
      <LogoAnimation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
        onAnimationComplete={onFinish}
      />
    </motion.div>
  );
};

export default SplashScreen;
