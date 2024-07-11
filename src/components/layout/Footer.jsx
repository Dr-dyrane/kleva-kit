import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../theme/DarkModeToggle";


const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t-[1px] text-contrast/85 dark:text-contrast-dark/50 border-slate-300 dark:border-background/15">
			<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
				<span className="text-xs md:text-sm sm:text-center font-light">
					© {currentYear}{" "}
					<Link to="/" className="hover:underline">
						<span className="text-secondary">
							Kleva
						</span>
						<span className="text-accent dark:text-accent-dark">Kit</span>™
					</Link>
					. All Rights Reserved.
				</span>
				<div className="flex items-center mt-3 text-xs font-medium sm:mt-0">
					<img
						src="/vite.svg" // Replace with the actual path to your logo
						alt="Logo"
						className="h-5 w-auto"
					/>
					<a
						href="https://easynetsurveco.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline ml-4"
					>
						Designed by Easynet.
					</a>
				</div>
				<div className="flex justify-start items-center p-2">
				<DarkModeToggle />

				</div>
				<ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
					<li>
						<Link to="#" className="hover:underline me-4 md:me-6">
							About
						</Link>
					</li>
					<li>
						<Link to="#" className="hover:underline me-4 md:me-6">
							Privacy Policy
						</Link>
					</li>
					<li>
						<Link to="#" className="hover:underline me-4 md:me-6">
							Licensing
						</Link>
					</li>
					<li>
						<Link to="#" className="hover:underline">
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
