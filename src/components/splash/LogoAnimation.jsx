// src/components/LogoAnimation.jsx
import React from "react";
import { motion } from "framer-motion";

const LogoAnimation = () => {
	const logoAnimation = {
		initial: { opacity: 0, scale: 0.8, rotate: 0, y: -20 },
		animate: {
			opacity: 1,
			scale: 1,
			rotate: 360,
			y: 0,
			duration: 1.8,
			transition: {
				ease: [0.6, 0.05, 0.2, 0.9],
			},
		},
	};

	return (
		<motion.div
			initial={logoAnimation.initial}
			animate={logoAnimation.animate}
			className="mb-8 relative flex items-center justify-center"
		>
			{/* Halo Effect */}
			<motion.div
				className="absolute w-60 h-60 rounded-full"
				animate={{ rotate: -360 }} // Reverse rotation for futuristic feel
				transition={{ duration: 8, ease: "linear", repeat: Infinity }}
				style={{
					background: `
            radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 70%),
            conic-gradient(from 0deg, rgba(125, 95, 255, 0.4), rgba(85, 150, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 100%)
          `,
					filter: "blur(15px)",
				}}
			/>

			{/* Main Logo */}
			<div className="w-48 h-48 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center shadow-lg animate-pulse hover:animate-none">
				<div className="w-40 h-40 flex items-center justify-center">
					<motion.img
src={'/Klevakit.png'}
						alt="Pine Innovations Logo"
						className="w-full h-full object-contain"
						style={{ filter: "drop-shadow(0 0 8px white)" }}
					/>
				</div>
			</div>

			{/* Inner Noise Waves */}
			<motion.div
				className="absolute w-72 h-72 rounded-full"
				animate={{ rotate: 360 }} // Opposite rotation for added depth
				transition={{ duration: 12, ease: "linear", repeat: Infinity }}
				style={{
					background: `
            conic-gradient(from 0deg, rgba(125, 95, 255, 0.3), rgba(85, 150, 255, 0) 50%, rgba(125, 95, 255, 0.1) 100%),
            radial-gradient(circle, rgba(255, 255, 255, 0.05), transparent 80%)
          `,
					filter: "blur(20px)",
				}}
			/>
		</motion.div>
	);
};

export default LogoAnimation;
