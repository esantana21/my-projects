import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			// Custom design system colors
  			"surface-custom": "#080e19",
  			"surface-container-custom": "#0d1320",
  			"surface-container-low-custom": "#0a101d",
  			"surface-container-high-custom": "#121a29",
  			"surface-container-highest-custom": "#1a2436",
  			"surface-bright-custom": "#162030",
  			"primary-custom": "#8ff5ff",
  			"primary-dim-custom": "#48d4f3",
  			"secondary-custom": "#00e5ff",
  			"tertiary-custom": "#00b8d4",
  			"on-surface-custom": "#e1e7f0",
  			"on-surface-variant-custom": "#a6abba",
  			"outline-custom": "#424855",
  			"outline-variant-custom": "#2d3442",
  			"on-primary-custom": "#00363d",
  		},
  		fontFamily: {
  			headline: ["Space Grotesk"],
  			body: ["Inter"],
  			label: ["Manrope"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			DEFAULT: "0.25rem",
  			xl: "0.75rem",
  			full: "9999px"
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
