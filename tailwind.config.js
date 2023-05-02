/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"main-blue": "#d2e5ff",
				"main-blue-selected": "#8bb2dd",
			},
		},
	},
	plugins: [],
};
