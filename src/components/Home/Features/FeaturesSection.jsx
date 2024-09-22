import React from "react";
import { motion } from "framer-motion";

const features = [
	{
		title: "Business Brand Generator",
		description:
			"Create a distinctive brand identity with our AI-powered generator.",
		gradient: "from-blue-400 to-indigo-600",
		delay: 0.2,
	},
	{
		title: "Landing Page Maker",
		description:
			"Build high-converting landing pages with drag-and-drop simplicity.",
		gradient: "from-green-400 to-emerald-600",
		delay: 0.4,
	},
	{
		title: "Business Analytics",
		description:
			"Gain actionable insights with our advanced AI-driven analytics platform.",
		gradient: "from-purple-400 to-fuchsia-600",
		delay: 0.6,
	},
	{
		title: "Pitch Deck Maker",
		description:
			"Craft compelling pitch decks with dynamic, data-driven templates.",
		gradient: "from-red-400 to-rose-600",
		delay: 0.8,
	},
	{
		title: "Video Content Creator",
		description:
			"Produce engaging marketing and social media videos effortlessly.",
		gradient: "from-yellow-400 to-amber-600",
		delay: 1.0,
	},
	{
		title: "No-Code Website Design",
		description:
			"Design professional websites with our intuitive no-code platform.",
		gradient: "from-cyan-400 to-teal-600",
		delay: 1.2,
	},
];

// Variants for the container's animation
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

// Main features section
export default function FeaturesSection() {
	return (
		<section className="py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
			<div className="container mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight"
				>
					Empower Your Business with Cutting-Edge Features
				</motion.h2>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
			damping: 12,
		},
	},
};

// Individual feature item component
function FeatureItem({ title, description, gradient, delay }) {
	return (
		<motion.div
			variants={itemVariants}
			className={`bg-gray-100 dark:bg-gray-800 rounded-3xl p-6 shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl overflow-hidden group`}
			style={{ transformStyle: "preserve-3d" }}
		>
			<div className="relative z-10">
				<div
					className={`h-16 w-16 rounded-full mb-6 bg-gradient-to-br ${gradient} flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110`}
				>
					<span className="text-2xl font-medium text-white">
						{title.charAt(0)}
					</span>
				</div>
				<h3 className="text-2xl font-medium mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 dark:group-hover:from-white group-hover:to-gray-600 dark:group-hover:to-gray-300 transition-all duration-300">
					{title}
				</h3>
				<p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light">
					{description}
				</p>
			</div>
			<div
				className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
			></div>
		</motion.div>
	);
}
