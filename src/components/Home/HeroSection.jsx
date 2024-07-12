import React, { useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="relative p-8 flex flex-col md:flex-row items-center justify-between min-h-[50vh] xl:min-h-[60vh] 2xl:min-h-[70vh] bg-hero-pattern bg-cover bg-center"
		>
			<div className="absolute inset-0 bg-gradient-primary-secondary dark:bg-gradient-primary-secondary-dark opacity-50"></div>
			<div className="relative z-10 text-center flex flex-col justify-center md:justify-between space-y-14 max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl min-h-full flex-grow">
				<motion.h1
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="text-4xl md:text-5xl font-bold text-white text-left"
				>
					Revolutionize Your Business Operations!
				</motion.h1>
				<motion.p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="mt-4 md:text-xl text-white text-left"
				>
					Streamline processes, boost productivity, and drive growth with our
					all-in-one business tool. Enhance your brand, analyze performance, and
					create effective marketing strategies effortlessly.{" "}
				</motion.p>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className="mt-8 space-x-4 flex justify-start"
				>
					<a
						href="/login"
						className="relative inline-block px-8 py-4 md:text-lg font-semibold shadow-lg text-white bg-secondary/75 rounded-xl transition duration-300 ease-in-out transform hover:bg-primary/75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-opacity-50"
					>
						Try It Free
					</a>
					<a
						href="#"
						className="relative border hover:border-none inline-block px-8 py-4 md:text-lg font-semibold shadow-lg text-contrast-dark bg-transparent rounded-xl transition duration-300 ease-in-out transform hover:bg-gray-200/75 hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 focus:ring-opacity-50"
					>
						Learn More
					</a>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default HeroSection;
