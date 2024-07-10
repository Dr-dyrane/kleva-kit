// src/routes/routes.js
import Home from "../pages/Home";
// import Features from "../pages/Features";
// import Pricing from "../pages/Pricing";
// import Testimonials from "../pages/Testimonials";
// import FAQ from "../pages/FAQ";
// import Contact from "../pages/Contact";
// import NotFound from "../pages/NotFound"; // Create a NotFound component for 404

const  RouteConfig = [
	{ path: "/", element: Home },
	// { path: "/features", element: Features },
	// { path: "/pricing", element: Pricing },
	// { path: "/testimonials", element: Testimonials },
	// { path: "/faq", element: FAQ },
	// {
	// 	path: "/login",
	// 	element: Login,
	// },
	// {
	// 	path: "/logout",
	// 	element: Logout,
	// },
	// {
	// 	path: "/register",
	// 	element: Register,
	// },
	// { path: "/contact", element: Contact },
	// { path: "*", element: NotFound }, // Catch-all route for undefined paths
];

export default  RouteConfig;
