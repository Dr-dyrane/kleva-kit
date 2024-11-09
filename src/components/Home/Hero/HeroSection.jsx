import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchAvatars } from "../../../utils/avatarFetcher";
import { FaCheckCircle } from "react-icons/fa";
import StarRating from "../../common/StarRating";
import { useTheme } from "../../../context/ThemeContext";
import JoinWaitingListModal from "./JoinWaitingListModal";
import CongratulationSplashScreen from "./CongratulationSplashScreen";
import LogoAnimation from "../../splash/LogoAnimation";
import TypewriterEffect from "../TypewriterEffect";

const HeroSection = () => {
    const [avatars, setAvatars] = useState([]);
    const { isDarkMode } = useTheme();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCongratulationVisible, setIsCongratulationVisible] =
        useState(false);

    const handleJoinClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleCongratulationClose = () => {
        setIsCongratulationVisible(false);
    };

    const handleEmailSubmit = email => {
        console.log("Email submitted:", email);
        setIsModalOpen(false);
        setIsCongratulationVisible(true);
    };

    useEffect(() => {
        const getAvatars = async () => {
            const fetchedAvatars = await fetchAvatars(6);
            setAvatars(fetchedAvatars);
        };

        getAvatars();
    }, []);

    const texts = [
        "Enhance your brand with tailored solutions.",
        "Analyze performance with advanced metrics.",
        "Create effective marketing strategies effortlessly.",
        "Develop professional pitch decks with ease."
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative p-8 md:mt-8 flex flex-col items-start justify-between min-h-auto bg-background dark:bg-background-dark bg-cover bg-center"
        >
            {/* Here is the SVG grid pattern */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="smallGrid"
                            width="10"
                            height="10"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 8 0 L 0 0 0 8"
                                fill="none"
                                stroke={
                                    isDarkMode
                                        ? "rgba(255, 255, 255, 0.125)"
                                        : "rgba(13, 13, 32, 0.125)"
                                }
                                strokeWidth="0.125"
                            />
                        </pattern>
                        <pattern
                            id="grid"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                width="100%"
                                height="100%"
                                fill="url(#smallGrid)"
                            />
                            <path
                                d="M 40 0 L 0 0 0 40"
                                fill="none"
                                stroke={
                                    isDarkMode
                                        ? "rgba(255, 255, 255, 0.25"
                                        : "rgba(13, 13, 32, 0.25)"
                                }
                                strokeWidth="0.125"
                            />
                        </pattern>
                    </defs>

                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            {/* End of SVG grid pattern */}
            <div className="relative z-10 text-center flex flex-col justify-center space-y-10 md:space-y-16 lg:space-y-20 flex-grow w-full items-center">
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl  lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-contrast dark:text-contrast-dark text-center
                    max-w-2xl 2xl:max-w-5xl leading-loose 
                    "
                >
                    <span className="underline decoration-4 md:decoration-8 decoration-secondary text-secondary hover:decoration-accent">
                        Revolutionize
                    </span>{" "}
                    Your Business Operations
                </motion.h1>
                <LogoAnimation />
                <div className="h-20 md:h-10 xl:h-auto min-h-[4rem] max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <TypewriterEffect texts={texts} />
                    </motion.h1>
                </div>

                {/* <motion.p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="mt-4 text-contrast/85 dark:text-contrast-dark/80 text-center leading-7 sm:leading-8 md:leading-9 font-medium lg:leading-10 xl:leading-loose 2xl:leading-relaxed text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
				>
					Streamline processes, boost productivity, and drive growth with our
					all-in-one business tool.
				</motion.p>
				<div className="mt-4 space-y-4 font-normal">
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 0.7 }}
						className="flex items-center justify-center space-x-2"
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
						className="flex items-center justify-center space-x-2"
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
						className="flex items-center justify-center space-x-2"
					>
						<FaCheckCircle className="text-accent" />
						<span className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
							Create effective marketing strategies effortlessly.
						</span>
					</motion.div>
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 1.3 }}
						className="flex items-center justify-center space-x-2"
					>
						<FaCheckCircle className="text-contrast dark:text-contrast-dark" />
						<span className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
							Develop professional pitch decks with ease.
						</span>
					</motion.div>
				</div> */}
                <div className="flex flex-col justify-center items-center">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="relative z-10 flex flex-col md:flex-row items-center mt-8 w-full justify-center"
                    >
                        <div className="flex flex-row">
                            {avatars.map((avatar, index) => (
                                <img
                                    key={index}
                                    src={avatar.url}
                                    alt={`User avatar ${index + 1}`}
                                    className="w-10 h-10 rounded-full border-2 border-gray-100 dark:border-gray-800 -ml-3 first:ml-0"
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
                        className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row md:justify-center mt-8 w-full"
                    >
                        <a
                            onClick={handleJoinClick}
                            className="relative inline-block px-8 py-4 md:text-lg font-semibold shadow-lg text-contrast-dark bg-secondary/75 rounded-xl transition duration-300 ease-in-out transform hover:bg-primary/75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-opacity-50"
                        >
                            JOIN NOW FOR FREE
                        </a>
                        <a
                            href="#"
                            className="relative border border-contrast dark:border-contrast-dark hover:border-primary inline-block px-8 py-4 md:text-lg font-semibold shadow-lg text-contrast dark:text-contrast-dark bg-transparent rounded-xl transition duration-300 ease-in-out transform hover:text-primary-dark dark:hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 focus:ring-opacity-50"
                        >
                            LEARN MORE
                        </a>
                    </motion.div>
                </div>
            </div>
            {/* Animated circle with smaller circles inside */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-[50%] right-0 w-80 h-80 md:h-[600px] md:w-[600px] border-[1px] border-gray-500/50 rounded-full overflow-hidden animate-pulse"
            >
                <svg
                    className="w-full h-full absolute inset-0"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {[...Array(10)].map((_, i) => (
                        <circle
                            key={i}
                            cx={Math.random() * 100}
                            cy={Math.random() * 100}
                            r={Math.random() * 8}
                            fill="transparent"
                            stroke="gray"
                            strokeWidth="0.25"
                        />
                    ))}
                </svg>
            </motion.div>
            {isModalOpen && (
                <JoinWaitingListModal
                    onClose={handleModalClose}
                    onSubmit={handleEmailSubmit}
                />
            )}

            {isCongratulationVisible && (
                <CongratulationSplashScreen
                    onClose={handleCongratulationClose}
                />
            )}
        </motion.section>
    );
};

export default HeroSection;
