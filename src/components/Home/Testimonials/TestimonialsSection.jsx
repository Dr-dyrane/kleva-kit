import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroSVG from "../../../assets/hero.svg"; // Import SVG file


const testimonials = [
	{
		id: 1,
		name: "Alex Johnson",
		role: "CEO, TechInnovate",
		content:
			"KlevaKit has revolutionized our workflow. It's not just a tool; it's a game-changer.",
		rating: 5,
	},
	{
		id: 2,
		name: "Samantha Lee",
		role: "Marketing Director, Pine",
		content:
			"The insights we've gained through KlevaKit have propelled our marketing strategies to new heights.",
		rating: 4,
	},
	{
		id: 3,
		name: "Michael Chen",
		role: "CTO, FutureSoft",
		content:
			"As a tech leader, I'm impressed by KlevaKit's robust features and seamless integration capabilities.",
		rating: 5,
	},
	{
		id: 4,
		name: "Lily Roberts",
		role: "Product Manager, BrightSpark",
		content:
			"KlevaKit helps us stay ahead with unmatched efficiency and insights.",
		rating: 5,
	},
];

const fanTweets = [
	{
		id: 1,
		username: "@techEnthusiast",
		content: "Just discovered #KlevaKit and I'm blown away! 🚀",
	},
	{
		id: 2,
		username: "@productivityGuru",
		content:
			"KlevaKit has doubled my team's efficiency. Absolute must-have! 💯",
	},
	{
		id: 3,
		username: "@futureCTO",
		content: "Can't believe how much easier my job is with #KlevaKit!",
	},
	{
		id: 4,
		username: "@theTechie",
		content: "KlevaKit is definitely on another level!",
	}
];

const TestimonialCard = ({ testimonial }) => {
	const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 30 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.5 }}
			className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transform transition hover:scale-105"
			style={{
				border: "1px solid #e0e0e0",
				boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
				color: "#e6e8ec",
			}}
		>
			<div className="flex items-center mb-4 bg-slate-100 dark:bg-slate-800 p-2 rounded-xl flex-row">
				<div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold text-lg rounded-full">
					{testimonial.name.charAt(0)}
				</div>
				<div className="ml-4 flex flex-col w-full flex-1">
					<h3 className="text-lg text-right font-semibold text-gray-800 dark:text-white">
						{testimonial.name}
					</h3>
					<p className="text-sm text-right text-gray-500 dark:text-gray-400 font-normal">
						{testimonial.role}
					</p>
				</div>
			</div>
			<p className="text-gray-700 text-right dark:text-gray-300 mb-4 font-light leading-relaxed">
				"{testimonial.content}"
			</p>
			<div className="flex justify-end">
				{[...Array(5)].map((_, i) => (
					<svg
						key={i}
						className={`w-5 h-5 ${
							i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
						}`}
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
				))}
			</div>
		</motion.div>
	);
};

const TweetBubble = ({ tweet, index }) => {
	const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={inView ? { opacity: 1, scale: 1 } : {}}
			transition={{ duration: 0.3, delay: index * 0.1 }}
			className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold leading-snug transform transition hover:scale-105"
			style={{
				maxWidth: "100%",
				boxShadow: "0 4px 20px rgba(0, 0, 255, 0.3)",
				color: "#e6e8ec",
			}}
		>
			{/* Floating particles */}
			{[...Array(20)].map((_, i) => (
				<FloatingParticle
					key={i}
					color={
						i % 3 === 0
							? "bg-blue-500"
							: i % 3 === 1
							? "bg-blue-300"
							: "bg-blue-200"
					}
				/>
			))}
			<p className="text-lg font-bold">{tweet.username}</p>
			<p className="text-gray-100 font-light">{tweet.content}</p>
		</motion.div>
	);
};

const FloatingParticle = ({ color }) => {
	const [position, setPosition] = useState({
		x: Math.random() * 100,
		y: Math.random() * 100,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setPosition({
				x: Math.random() * 100,
				y: Math.random() * 100,
			});
		}, Math.random() * 5000 + 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<motion.div
			className={`absolute w-2 h-2 rounded-full ${color} blur-sm`}
			animate={position}
			transition={{ duration: 5, ease: "linear" }}
			style={{ boxShadow: "0 0 10px rgba(0, 180, 255, 0.7)" }}
		/>
	);
};

export default function TestimonialsAndFanSection() {
	return (
		<section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
			{/* SVG Background */}
		<div
			className="absolute inset-0 bg-cover bg-repeat opacity-20 dark:opacity-10 z-0"
			style={{
				backgroundImage: `url(${heroSVG})`,
				backgroundSize: "contain",
			}}
			aria-hidden="true"
		></div>
			<div className="container mx-auto px-4 relative">
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-gray-800 dark:text-white"
				>
					What Our Users Are Saying
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
					{testimonials.map((testimonial) => (
						<TestimonialCard key={testimonial.id} testimonial={testimonial} />
					))}
				</div>

				<motion.h3
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-5xl md:text-6xl font-bold text-center mb-12 text-gray-800 dark:text-white"
				>
					Join the Conversation
				</motion.h3>

				<div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{fanTweets.map((tweet, index) => (
						<TweetBubble key={tweet.id} tweet={tweet} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
