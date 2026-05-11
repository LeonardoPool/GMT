import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		// Optimizaciones de build
		minify: 'esbuild',
		// Otros optimizaciones
		cssCodeSplit: true,
		sourcemap: false,
		reportCompressedSize: false,
		chunkSizeWarningLimit: 500
	},
	// Optimizaciones de servidor (desactivar cache agresivo en desarrollo)
	server: {
		middlewareMode: false,
		headers: {
			// Evita cache agresivo durante desarrollo para que HMR y cambios CSS se reflejen
			'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate'
		}
	}
});
