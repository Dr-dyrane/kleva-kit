// src/components/Home/FeaturesSection/FeatureItem.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

// Abstract SVG Component for decoration
const AbstractSVG = () => (
    <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="absolute opacity-10 -top-20 -right-20 z-[-1]"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" stroke="currentColor" strokeWidth="5">
            <circle cx="100" cy="100" r="80" />
            <circle cx="100" cy="100" r="60" />
            <circle cx="100" cy="100" r="40" />
        </g>
    </svg>
);

const FeatureItem = ({ icon, title, description, delay }) => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: delay }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative flex items-center justify-center border rounded-2xl p-6 flex-col text-left gap-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all ease-in-out duration-100"
        >
            {/* Abstract SVG Decoration */}
            <AbstractSVG />

            {/* Icon */}
            <motion.div
                className="text-secondary text-4xl w-full flex justify-center items-center"
                initial={{ scale: 0.8, rotate: 0 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
            >
                {icon}
            </motion.div>

            {/* Text Section */}
            <div className='w-full flex flex-col gap-4'>
                <h3 className="text-xl font-semibold text-contrast dark:text-contrast-dark">
                    {title}
                </h3>
                <p className="text-base font-light text-contrast/75 dark:text-contrast-dark/75">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default FeatureItem;
