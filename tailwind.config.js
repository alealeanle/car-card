/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,tsx}"],
	theme: {
		colors: {
			'my-yellow': '#FDE000',
			'black': '#000',
			'white': '#fff',
			'modalBg': '#F6F4F2',
		},
		borderRadius: {
			'none': '0',
			'circle': '50%',
			'sm': '0.125rem',
			'20px': '20px',
			'50px': '50px',
			DEFAULT: '0.25rem',
			DEFAULT: '4px',
			'md': '0.375rem',
			'lg': '0.5rem',
			'full': '9999px',
			'large': '12px',
		},
		extend: {
			screens: {
				's': '467px',
				'sm': '640px',
				'md': '768px',
				'wrap': '846px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1450px',
			},
		},
	},
	plugins: [],
}

