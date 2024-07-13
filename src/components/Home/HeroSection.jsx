import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchAvatars } from "../../utils/avatarFetcher";
import { FaCheckCircle } from "react-icons/fa";
import StarRating from "../common/StarRating";

const HeroSection = () => {
	const [avatars, setAvatars] = useState([]);

	useEffect(() => {
		// Fetch 6 avatars for display
		const fetchedAvatars = fetchAvatars(6);
		setAvatars(fetchedAvatars);
	}, []);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="relative p-8 md:mt-8 flex flex-col md:flex-row items-start justify-between min-h-screen bg-background dark:bg-background-dark bg-cover bg-center"
		>
			<div className="relative z-10 text-center flex flex-col justify-center md:justify-between space-y-10 md:space-y-16 lg:space-y-20 flex-grow">
				<motion.h1
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-contrast dark:text-contrast-dark text-center md:text-left"
				>
					<span className="underline decoration-4 md:decoration-8 decoration-secondary text-secondary">
						Revolutionize
					</span>{" "}
					Your Business Operations
				</motion.h1>
				<motion.p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="mt-4 text-contrast/85 dark:text-contrast-dark/80 text-center md:text-left leading-7 sm:leading-8 md:leading-9 font-medium lg:leading-10 xl:leading-loose 2xl:leading-relaxed text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
				>
					Streamline processes, boost productivity, and drive growth with our
					all-in-one business tool.
				</motion.p>
				<div className="mt-4 space-y-4 font-normal">
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 0.7 }}
						className="flex items-center space-x-2"
					>
						<FaCheckCircle className="text-secondary" />
						<span className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
							Enhance your brand with tailored solutions.
						</span>
					</motion.div>
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 0.9 }}
						className="flex items-center space-x-2"
					>
						<FaCheckCircle className="text-primary" />
						<span className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
							Analyze performance with advanced metrics.
						</span>
					</motion.div>
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 1.1 }}
						className="flex items-center space-x-2"
					>
						<FaCheckCircle className="text-accent" />
						<span className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
							Create effective marketing strategies effortlessly.
						</span>
					</motion.div>
				</div>

				<div className="flex flex-col md:flex-row justify-center items-center">
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 1.5 }}
						className="relative z-10 flex flex-col md:flex-row items-center mt-8 md:mt-0 md:space-x-8 w-full"
					>
						<div className="flex flex-row">
							{avatars.map((avatar, index) => (
								<img
									key={index}
									src={avatar}
									alt={`User avatar ${index + 1}`}
									className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 -ml-3 first:ml-0"
								/>
							))}
						</div>

						<div className="mt-6 md:ml-4 md:mt-0 flex flex-col items-center">
							<StarRating rating={4.5} />
							<span className="text-contrast font-light dark:text-contrast-dark mt-2">
								1,234 happy users!
							</span>
						</div>
					</motion.div>

					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 1 }}
						className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row md:justify-start mt-8 md:mt-0 w-full"
					>
						<a
							href="/login"
							className="relative inline-block px-8 py-4 md:text-lg font-semibold shadow-lg text-contrast-dark bg-secondary/75 rounded-xl transition duration-300 ease-in-out transform hover:bg-primary/75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-opacity-50"
						>
							JOIN NOW FOR FREE
						</a>
						<a
							href="#"
							className="relative border border-contrast dark:border-contrast-dark hover:border-none inline-block px-8 py-4 md:text-lg font-semibold shadow-lg text-contrast dark:text-contrast-dark bg-transparent rounded-xl transition duration-300 ease-in-out transform hover:bg-gray-200/75 hover:text-primary-dark dark:hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 focus:ring-opacity-50"
						>
							LEARN MORE
						</a>
					</motion.div>
				</div>
			</div>
			<div className="w-40 h-40 absolute top-0 right-0">
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1.5 }}
					className=" w-full h-full bg-no-repeat bg-contain"
					style={{
						backgroundImage: "url('/path/to/abstract-image.png')",
					}}
				></motion.div>
			</div>
		</motion.section>
	);
};

export default HeroSection;
