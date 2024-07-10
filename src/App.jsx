// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer";

const App = () => {
	return (
		<Router>
			<div className="bg-background dark:bg-background-dark min-h-screen flex flex-col  text-contrast dark:text-contrast-dark">
				<Navbar />
				<div className="flex-1 justify-center items-center font-bold text-center">
					<AppRoutes />
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
