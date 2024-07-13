// src/utils/avatarFetcher.js

import axios from "axios";

const PEXELS_API_URL = "https://api.pexels.com/v1/search";

export const fetchAvatars = async (count) => {
	try {
		const response = await axios.get(PEXELS_API_URL, {
			headers: {
				Authorization: import.meta.env.VITE_PEXELS_API_KEY,
			},
			params: {
				query: "profile",
				per_page: count * 100, // Fetch more images to increase the chances of finding square ones
			},
		});

		const { photos } = response.data;
		const avatars = photos
			.filter((photo) => {
				const { width, height } = photo;
				return Math.abs(width - height) <= 700; // Allow a tolerance of 10 pixels for near-square images
			})
			.slice(0, count) // Take the first 'count' square images
			.map((photo) => ({
				url: photo.src.medium,
				width: photo.width,
				height: photo.height,
			}));

		return avatars;
	} catch (error) {
		console.error("Error fetching avatars from Pexels:", error);
		return [];
	}
};
