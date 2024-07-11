import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsFillMenuButtonFill, BsFillMenuButtonWideFill } from "react-icons/bs";
import { menuItems, userDropdownItems } from "./navbarData";
import UserSection from "./UserSection";
import DarkModeToggle from "../../theme/DarkModeToggle";
import { useAuth } from "../../../context/AuthContext";

const Menu = ({ to, label }) => {
	const location = useLocation();

	return (
		<li>
			<Link
				to={to}
				className={`block py-2 px-3 md:p-0 ${
					location.pathname === to
						? "bg-accent rounded md:bg-transparent md:text-accent md:dark:text-accent-dark"
						: "rounded hover:bg-accent/75 md:hover:bg-transparent md:hover:text-accent md:dark:hover:text-golden dark:text-warm dark:hover:bg-golden/85 dark:hover:text-warm md:dark:hover:bg-transparent dark:border-slate-700"
				}`}
				aria-current={location.pathname === to ? "page" : undefined}
			>
				{label}
			</Link>
		</li>
	);
};

const MenuButton = ({ isMenuOpen, toggleMenu }) => {
	return (
		<button
			data-collapse-toggle="navbar-cta"
			type="button"
			className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-accent dark:text-accent-dark rounded-lg md:hidden hover:bg-accent/10 dark:hover:bg-accent-dark/25 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent/85"
			aria-controls="navbar-cta"
			aria-expanded="false"
			onClick={toggleMenu}
		>
			<span className="sr-only">Open main menu</span>
			{isMenuOpen ? (
				<BsFillMenuButtonWideFill size={20} />
			) : (
				<BsFillMenuButtonFill size={19} />
			)}
		</button>
	);
};

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [isUserOpen, setUserOpen] = useState(false);
	const [navbarOpacity, setNavbarOpacity] = useState(1);

	const menuRef = useRef(null);
	const userDropdownRef = useRef(null);

	const { user } = useAuth();

	useEffect(() => {
		if (user) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false); // Reset isLoggedIn state when user logs out
		}
	}, [user]);

	const toggleMenu = (event) => {
		event.stopPropagation(); // Stop the event from propagating
		setMenuOpen(!isMenuOpen);
		setUserOpen(false);
	};

	const toggleUserDropdown = (event) => {
		event.stopPropagation();
		if (isLoggedIn) {
			setUserOpen(!isUserOpen);
		}
	};

	const handleClickOutside = (event) => {
		if (
			!menuRef?.current?.contains(event.target) &&
			!userDropdownRef?.current?.contains(event.target)
		) {
			setMenuOpen(false);
			setUserOpen(false);
		}
	};

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		// Adjust opacity based on the scroll position
		if (window.scrollY > 400) {
			setMenuOpen(false);
		}
		const maxScroll = isMenuOpen ? 2000 : 200; // Adjust this value based on when you want the opacity to start changing
		const opacity = Math.min(1, 1 - scrollPosition / maxScroll);
		setNavbarOpacity(opacity);
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		window.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("click", handleClickOutside);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleClickOutside]);

	return (
		<nav
			className="bg-background dark:bg-background-dark sticky top-0 z-50 border-b-[1px] border-slate-300 dark:border-background/15"
			style={{ opacity: navbarOpacity }}
		>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link to="/" className="text-xl font-bold">
					<span className="text-secondary">Kleva</span>
					<span className="text-accent dark:text-accent-dark">Kit</span>
				</Link>
				<div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
					<UserSection
						isLoggedIn={isLoggedIn}
						isUserOpen={isUserOpen}
						toggleUserDropdown={toggleUserDropdown}
						userDropdownRef={userDropdownRef}
						userDropdownItems={userDropdownItems}
					/>
					{/* <DarkModeToggle /> */}
					<MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
				</div>
				<div
					className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
						isMenuOpen
							? "block absolute right-0 top-[71px] p-4 bg-background dark:bg-background-dark rounded-b-xl opacity-95"
							: "hidden"
					}`}
					id="navbar-cta"
					ref={menuRef}
				>
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-slate-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-warm dark:bg-background-dark/85 md:dark:bg-background-dark/85 dark:border-accent-dark shadow md:shadow-none">
						{menuItems.map((item) => (
							<Menu key={item.to} to={item.to} label={item.label} />
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
