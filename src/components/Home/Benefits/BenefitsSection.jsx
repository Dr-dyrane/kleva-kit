import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaRocket,
	FaPiggyBank,
	FaUserFriends,
	FaShieldAlt,
} from "react-icons/fa";
import {
	SiApple,
	SiMicrosoft,
	SiAmazon,
	SiGoogle,
	SiFacebook,
	SiTesla,
} from "react-icons/si";
import heroSVG from "../../../assets/hero.svg"; // Import SVG file

const benefits = [
	{
		icon: <FaRocket className="w-20 h-20 text-primary" />,
		title: "Increased Efficiency",
		description:
			"Streamline your operations with our cutting-edge AI-powered workflows.",
	},
	{
		icon: <FaPiggyBank className="w-20 h-20 text-secondary" />,
		title: "Cost Savings",
		description:
			"Save money with our cost-effective tool that optimizes resource allocation.",
	},
	{
		icon: <FaUserFriends className="w-20 h-20 text-accent" />,
		title: "User-Friendly Interface",
		description:
			"Enjoy an intuitive design that is easy to use for everyone in your team.",
	},
	{
		icon: <FaShieldAlt className="w-20 h-20 text-warning" />,
		title: "Enhanced Security",
		description:
			"Protect your data and ensure privacy with robust security features built into every aspect of our platform.",
	},
];

const customerLogos = [
	{ icon: SiApple, name: "Apple" },
	{ icon: SiMicrosoft, name: "Microsoft" },
	{ icon: SiAmazon, name: "Amazon" },
	{ icon: SiGoogle, name: "Google" },
	{ icon: SiFacebook, name: "Facebook" },
	{ icon: SiTesla, name: "Tesla" },
];

const BenefitItem = ({ icon, title, description }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, rotateY: -90 }}
			animate={{ opacity: 1, rotateY: 0 }}
			transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
			whileHover={{ scale: 1.05, rotateY: 10 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			className="relative flex flex-col items-center text-center p-8 bg-gradient-to-br from-background/10 to-background-dark/10 rounded-3xl shadow-2xl backdrop-blur-md border border-primary/5 transform transition-all duration-300 perspective-1000"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl filter blur-xl opacity-50 z-0"></div>
			<motion.div
				animate={{ rotateY: isHovered ? 360 : 0 }}
				transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
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

const CustomerLogo = ({ Icon, name }) => (
	<motion.div
		whileHover={{ scale: 1.1 }}
		className="flex flex-col items-center justify-center p-4"
	>
		<Icon
			className="w-8 h-8 text-gray-400 dark:text-gray-600"
			aria-label={`${name} logo`}
		/>
		<span className="mt-2 text-sm text-gray-500 dark:text-gray-400">
			{name}
		</span>
	</motion.div>
);

export default function BenefitsSection() {
	return (
		<section className="py-24 bg-background dark:bg-background-dark overflow-hidden relative">
			{/* SVG Background */}
			<div
				className="absolute inset-0 bg-cover bg-repeat opacity-10 z-0"
				style={{
					backgroundImage: `url(${heroSVG})`,
					backgroundSize: "contain",
				}}
				aria-hidden="true"
			></div>

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
					Why Choose{" "}
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
						KlevaKit
					</span>
					?
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 mb-20">
					{benefits.map((benefit, index) => (
						<BenefitItem key={index} {...benefit} />
					))}
				</div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="relative z-10"
				>
					<h3 className="text-3xl font-bold text-center mb-10 text-contrast dark:text-contrast-dark">
						Trusted by Industry Leaders
					</h3>
					<div className="flex flex-wrap justify-center items-center gap-8">
						{customerLogos.map((logo, index) => (
							<CustomerLogo key={index} Icon={logo.icon} name={logo.name} />
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
