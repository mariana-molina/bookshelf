/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			gray: '#374151',
			indigo: '#4338ca',
			blue: 'rgb(52, 112, 224)',
		},
		extend: {
			boxShadow: {
				styled: '0 5px 15px -5px rgba(0,0,0,.08)',
			},
		},
	},
	plugins: [],
};
