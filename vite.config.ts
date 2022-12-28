import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgLoader from 'vite-svg-loader'
import { splitVendorChunkPlugin } from 'vite'

export default defineConfig({
	plugins: [
		react(),
		splitVendorChunkPlugin(),
		svgLoader({
			defaultImport: 'url',
		}),
	],
	css: { modules: { localsConvention: 'camelCase' } },
})

