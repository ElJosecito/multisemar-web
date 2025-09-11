/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // primary color changed from blue to requested red #E12926
        primary: "#E12926",
        secondary: "#011632",
  // legacy name kept (darkblue) but now points to a very dark variant of primary red
  // dark variant chosen to be visually 'bien dark' while matching the brand red
  darkblue: "#3B0B0A",
        back_white: "#f4f4f4",
      },
      animation: {
				'infinite-scroll': 'infinite-scroll 120s linear infinite',
        'infinite-inverse-scroll': 'inverse-infinite-scroll 120s linear infinite',
        
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
        'inverse-infinite-scroll': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
			},
    },
  },
  plugins: [],
};
