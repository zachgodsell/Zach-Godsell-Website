/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"z-gray": "#212121",
				"z-l-blue": "#A8EAFF",
			},
			fontFamily: {
				TerminaBlack: ["Termina-Black"],
				TerminaHeavy: ["Termina-Heavy"],
				TerminaMedium: ["Termina-Medium"],
				TerminaLight: ["Termina-Light"],
			},
		},
	},
	plugins: [],
};
