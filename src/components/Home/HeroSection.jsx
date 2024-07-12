import React, { useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
	useEffect(() => {
		const timer = setTimeout(() => {
			window.scrollTo({
				top: window.innerHeight,
				behavior: "smooth",
			});
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="relative p-8 flex items-center justify-center min-h-screen bg-hero-pattern bg-cover bg-center"
		>
			<div className="absolute inset-0 bg-black opacity-50"></div>
			<div className="relative z-10 text-center space-y-14">
				<motion.h1
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="text-5xl font-bold text-white"
				>
					Revolutionize Your Business Operations!
				</motion.h1>
				<motion.p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="mt-4 text-xl text-white"
				>
					Streamline processes, boost productivity, and drive growth with our
					all-in-one business tool.
				</motion.p>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className="mt-8 space-x-4"
				>
					<a
						href="/login"
						className="relative inline-block px-8 py-4 text-lg font-semibold text-white bg-secondary/50 rounded-lg transition duration-300 ease-in-out transform hover:bg-primary-dark/85 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-opacity-50"
					>
						<span className="absolute inset-1 border-2 border-white rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
						Try It Free
					</a>
					<a
						href="#"
						className="relative inline-block px-8 py-4 text-lg font-semibold text-secondary bg-white/50 rounded-lg transition duration-300 ease-in-out transform hover:bg-gray-200/85 hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 focus:ring-opacity-50"
					>
						<span className="absolute inset-1 border-2 border-primary-dark rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
						Learn More
					</a>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default HeroSection;
