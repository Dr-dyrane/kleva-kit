import React from "react";
import { motion } from "framer-motion";

const CongratulationSplashScreen = ({ onClose }) => {
  return (
    <div className="fixed p-8 inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-300"
        >
          &times;
        </button>
        <h2 className="text-2xl font-normal mb-4">Congratulations!</h2>
        <p className="text-gray-600 dark:text-gray-300 font-thin">
          You've successfully joined the waiting list.
        </p>
        <button
          onClick={onClose}
          className="mt-4 p-3 px-4 bg-primary text-white rounded-2xl hover:bg-primary-dark font-normal"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default CongratulationSplashScreen;
