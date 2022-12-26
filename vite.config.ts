import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
	plugins: [
		react(),
		svgLoader({
			defaultImport: 'url',
		}),
	],
	css: { modules: { localsConvention: 'camelCase' } },
})

