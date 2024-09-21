// src/components/Home/Features/FeaturesSection.js
import React from 'react';
import { motion } from 'framer-motion';
import FeatureItem from './FeatureItem';
import { FaRegStar, FaGlobe, FaChartLine, FaPencilAlt, FaVideo } from 'react-icons/fa';

const FeaturesSection = () => {
    const features = [
        {
            icon: <FaRegStar />,
            title: 'Business Brand Generator',
            description: 'Create a distinctive brand identity with our easy-to-use generator.',
            delay: 0.2
        },
        {
            icon: <FaGlobe />,
            title: 'Landing Page Maker',
            description: 'Build stunning landing pages without any coding experience.',
            delay: 0.4
        },
        {
            icon: <FaChartLine />,
            title: 'Business Analytics',
            description: 'Gain deep insights into your business performance with advanced analytics.',
            delay: 0.6
        },
        {
            icon: <FaPencilAlt />,
            title: 'Pitch Deck Maker',
            description: 'Craft professional pitch decks with customizable templates.',
            delay: 0.8
        },
        {
            icon: <FaVideo />,
            title: 'Marketing & YouTube Video Maker',
            description: 'Create engaging marketing and YouTube videos effortlessly.',
            delay: 1.0
        }
    ];

    return (
        <section className="py-16 bg-background dark:bg-background-dark">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold text-contrast dark:text-contrast-dark text-center mb-12"
                >
                    Features That Empower Your Business
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            delay={feature.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
