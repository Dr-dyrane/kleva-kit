// utils/emailUtils.js

import axios from "axios";

const BASE_URL = "https://api.klevakit.com"; // Replace with your actual backend URL

// Function to send email using backend API
export const sendEmail = async (email) => {
	try {
		const response = await axios.post(`${BASE_URL}/send-email`, {
			email,
			subject: "Welcome to Klevakit!",
			message: "Thank you for joining our waitlist.",
		});

		console.log("Email sent successfully to", email);
		return response.data; // Assuming backend sends some response
	} catch (error) {
		console.error("Error sending email:", error.message);
		throw new Error("Failed to send email");
	}
};
