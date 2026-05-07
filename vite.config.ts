import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		// Optimizaciones de build
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: false,
				drop_debugger: true
			}
		},
		// Code splitting
		rollupOptions: {
			output: {
				manualChunks: {
					'vendor': ['@sveltejs/kit'],
					'components': ['./src/lib/components/']
				}
			}
		},
		// Otros optimizaciones
		cssCodeSplit: true,
		sourcemap: false,
		reportCompressedSize: false,
		chunkSizeWarningLimit: 500
	},
	// Optimizaciones de servidor
	server: {
		middlewareMode: false,
		headers: {
			'Cache-Control': 'public, max-age=31536000, immutable'
		}
	}
});
