import React, { useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="relative p-8 flex flex-col md:flex-row items-center justify-between min-h-screen bg-background dark:bg-background-dark bg-cover bg-center"
		>
			{/* <div className="absolute inset-0 bg-gradient-primary-secondary-dark opacity-50"></div> */}
			<div className="relative z-10 text-center flex flex-col justify-center md:justify-between space-y-10 md:space-y-16 lg:space-y-20 max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl flex-grow">
				<motion.h1
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-contrast dark:text-contrast-dark text-left"
				>
					Revolutionize Your Business Operations!
				</motion.h1>
				<motion.p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="mt-4 text-contrast/85 dark:text-contrast-dark/80 text-left leading-7 sm:leading-8 md:leading-9 lg:leading-10 xl:leading-loose 2xl:leading-relaxed md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
				>
					Streamline processes, boost productivity, and drive growth with our
					all-in-one business tool. Enhance your brand, analyze performance, and
					create effective marketing strategies effortlessly.
				</motion.p>

				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row md:justify-start"
				>
					<a
						href="/login"
						className="relative inline-block px-8 py-4 md:text-lg font-semibold shadow-lg text-contrast-dark bg-secondary/75 rounded-xl transition duration-300 ease-in-out transform hover:bg-primary/75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-opacity-50"
					>
						JOIN NOW FOR FREE
					</a>
					<a
						href="#"
						className="relative border hover:border-none inline-block px-8 py-4 md:text-lg font-semibold shadow-lg text-contrast dark:text-contrast-dark bg-transparent rounded-xl transition duration-300 ease-in-out transform hover:bg-gray-200/75 hover:text-primary-dark dark:hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 focus:ring-opacity-50"
					>
						LEARN MORE
					</a>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default HeroSection;
