import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
        plugins: [
                react(),
                VitePWA({
                        registerType: "autoUpdate",
                        includeAssets: ["Klevakit.png"], // Update this array to include only existing assets
                        manifest: {
                                name: "KlevaKit",
                                short_name: "KlevaKit",
                                description: "Revolutionize Your Business Operations",
                                theme_color: "#F2F5FA",
                                icons: [
                                        {
                                                src: "Klevakit.png",
                                                sizes: "192x192",
                                                type: "image/png",
                                        },
                                        {
                                                src: "Klevakit.png",
                                                sizes: "512x512",
                                                type: "image/png",
                                        },
                                ],
                        },
                }),
        ],
});