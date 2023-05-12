/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				styled: '0 5px 15px -5px rgba(0,0,0,.08)',
			},
		},
	},
	plugins: [],
};
