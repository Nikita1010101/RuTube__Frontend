import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
				'primary': '#1f1d2b',
				'secondary': '#353340',
        'tertiary': '#ff7551'
			},
    },
  },
  plugins: [],
}
export default config
