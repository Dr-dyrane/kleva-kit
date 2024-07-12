import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const images = [
	"/hero/branding.jpg",
	"/hero/analytics_dark.jpg",
	"/hero/analytics.jpg",
	"/hero/marketing_dark.jpg",
	"/hero/marketing.jpg",
];

const HeroSection = () => {
	const controls = useAnimation();

	useEffect(() => {
		const cycleImages = async () => {
			const duration = 1.5;
			const delay = 3;

			while (true) {
				for (let i = 0; i < images.length; i++) {
					await controls.start((index) => ({
						zIndex: index === i ? images.length : index,
						opacity: index === i ? 1 : 0.7,
						scale: index === i ? 1 : 0.9,
						rotate: index === i ? 0 : (index - i) * 5,
						transition: { duration },
					}));
					await new Promise((resolve) => setTimeout(resolve, delay * 1000));
				}
			}
		};

		cycleImages();
	}, [controls]);

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
			className="relative p-8 flex flex-col md:flex-row items-center justify-between min-h-[50vh] xl:min-h-[60vh] 2xl:min-h-[70vh] bg-gradient-primary-secondary dark:bg-gradient-primary-secondary-dark bg-cover bg-center"
		>
			<div className="relative z-10 text-center flex flex-col justify-between space-y-14 max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl min-h-full flex-grow">
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
					all-in-one business tool.
					<span className="hidden lg:flex">
						{" "}
						Enhance your brand, analyze performance, and create effective
						marketing strategies effortlessly.
					</span>
				</motion.p>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className="mt-8 space-x-4 flex justify-start"
				>
					<a
						href="/login"
						className="relative inline-block px-8 py-4 md:text-lg font-semibold shadow-lg text-white bg-secondary rounded-xl transition duration-300 ease-in-out transform hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-opacity-50"
					>
						Try It Free
					</a>
					<a
						href="#"
						className="relative inline-block px-8 py-4 md:text-lg font-semibold shadow-lg text-contrast-dark bg-transparent rounded-xl transition duration-300 ease-in-out transform hover:bg-gray-200 hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 focus:ring-opacity-50"
					>
						Learn More
					</a>
				</motion.div>
			</div>
			<div className="relative p-8 mt-8 md:mt-0 md:ml-8 flex-shrink-0 w-full md:w-1/2">
				{images.map((src, index) => (
					<motion.div
						key={src}
						custom={index}
						initial={{
							zIndex: index,
							opacity: 0.7,
							scale: 0.9,
							rotate: index * 5,
						}}
						animate={controls}
						className="absolute top-0 left-0 w-full h-full"
					>
						<img
							src={src}
							alt="Hero"
							className="w-full h-auto 2xl:h-[40vh] object-cover rounded-2xl shadow-lg"
						/>
					</motion.div>
				))}
				<motion.div
					initial={{ opacity: 0, skewX: -10 }}
					animate={{ opacity: 1, skewX: 0 }}
					transition={{ duration: 1 }}
					className="bg-none rounded-2xl shadow-lg relative overflow-hidden"
				>
					<img
						src="/hero/hero.jpg"
						alt="Hero"
						className="w-full h-auto 2xl:h-[40vh] object-cover"
					/>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default HeroSection;
