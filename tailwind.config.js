/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			blue: 'rgb(52, 112, 224)',
			base: 'white',
			text: '#434449',
			gray: '#f1f2f7',
			gray10: '#f1f1f4',
			gray20: '#e4e5e9',
			gray80: '#6f7077',
			indigo: '#3f51b5',
			indigoDarken10: '#364495',
			indigoLighten80: '#b7c1f8',
			yellow: '#ffc107',
			green: '#4caf50',
			danger: '#ef5350',
			orange: 'orange',
		},
		extend: {
			boxShadow: {
				styled: '0 5px 15px -5px rgba(0,0,0,.08)',
			},
		},
	},
	plugins: [],
};
