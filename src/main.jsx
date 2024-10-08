import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const rootElement = document.getElementById("root");

// Create a root using ReactDOM.createRoot
if (!rootElement._reactRootContainer) {
	const root = ReactDOM.createRoot(rootElement);

	function Main() {
		return (
			<React.StrictMode>
				<AuthProvider>
					<ThemeProvider>
						<App />
					</ThemeProvider>
				</AuthProvider>
			</React.StrictMode>
		);
	}

	root.render(<Main />);
}
