import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	root: '',
	base: '/portfolio2023/',
	build: {
		outDir: 'dist',
		emptyOutDir: true,
	},
})
