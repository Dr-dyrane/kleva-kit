import React from "react";
import { motion } from "framer-motion";
import brand from "./images/brand.svg";
import page from "./images/page.svg";
import analytics from "./images/analytics.svg";
import pitch from "./images/pitch.svg";
import video from "./images/video.svg";
import web from "./images/web.svg";
import Vector from "./images/Vector.png";
import Vector_dark from "./images/Vector_dark.png";
import { useTheme } from "../../../context/ThemeContext";

const features = [
    {
        title: "Business Brand Generator",
        description:
            "Create a distinctive brand identity with our AI-powered generator.",
        gradient: "from-blue-200 to-indigo-600",
        icon: brand,
        delay: 0.2
    },
    {
        title: "Landing Page Maker",
        description:
            "Build high-converting landing pages with drag-and-drop simplicity.",
        gradient: "from-green-300 to-emerald-600",
        icon: page,
        delay: 0.4
    },
    {
        title: "Business Analytics",
        description:
            "Gain actionable insights with our advanced AI-driven analytics platform.",
        gradient: "from-purple-300 to-fuchsia-600",
        icon: analytics,
        delay: 0.6
    },
    {
        title: "Pitch Deck Maker",
        description:
            "Craft compelling pitch decks with dynamic, data-driven templates.",
        gradient: "from-red-400 to-rose-600",
        icon: pitch,
        delay: 0.8
    },
    {
        title: "Video Content Creator",
        description:
            "Produce engaging marketing and social media videos effortlessly.",
        gradient: "from-yellow-200 to-amber-600",
        icon: video,
        delay: 1.0
    },
    {
        title: "No-Code Website Design",
        description:
            "Design professional websites with our intuitive no-code platform.",
        gradient: "from-cyan-300 to-teal-600",
        icon: web,
        delay: 1.2
    }
];

// Variants for the container's animation
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

// Main features section
export default function FeaturesSection() {
    return (
        <section className="py-24 bg-background dark:bg-background-dark text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden flex flex-col justify-center items-center w-full">
            <div className="px-4 mx-auto container flex items-center justify-center w-full flex-col">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary max-w-2xl"
                >
                    Empower Your Business with Cutting-Edge Features
                </motion.h1>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                >
                    {features.map((feature, index) => (
                        <FeatureItem key={index} {...feature} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// Variants for individual feature items
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    }
};

// Individual feature item component
function FeatureItem({ title, description, gradient, icon, delay }) {
    const { isDarkMode } = useTheme();
    return (
        <motion.div
            variants={itemVariants}
            initial={{ scale: 1 }} // Initial scale state
            whileHover={{ scale: 1.05 }} // Smooth scale effect on hover
            transition={{ duration: 0.1 }} // Smooth transition
            className={`bg-background dark:bg-background-dark rounded-3xl p-6 xl:p-8 xl:py-10 shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl overflow-hidden group`}
            style={{ transformStyle: "preserve-3d" }}
        >
            <div className="relative z-10">
                <div
                    className={`flex h-16 w-16 rounded-full mb-6 bg-gradient-to-br ${gradient} flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110`}
                >
                    <img src={icon} className="w-auto  object-cover h-10" />
                </div>
                <h3 className="text-xl md:text-2xl xl:text-3xl font-medium mb-3 lg:mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 dark:group-hover:from-white group-hover:to-gray-600 dark:group-hover:to-gray-300 transition-all duration-300">
                    {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    {description}
                </p>
            </div>
            <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
            ></div>
            <div
                className={`absolute inset-0 opacity-100 transition-opacity duration-300 rounded-xl`}
            >
                <img
                    src={isDarkMode ? Vector : Vector_dark}
                    alt=""
                    className="w-full"
                />
            </div>
        </motion.div>
    );
}
