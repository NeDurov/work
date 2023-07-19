import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/

export default defineConfig({
	resolve: {
		alias: {
			"@data": path.resolve(__dirname, "./src/data"),
			"@core": path.resolve(__dirname, "./src/core"),
			"@components": path.resolve(__dirname, "./src/components"),
		},
	},
	plugins: [react()],
});
