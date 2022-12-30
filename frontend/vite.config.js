import react from "@vitejs/plugin-react";
import path from 'path';
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '')

	const DOMAIN = mode === 'development'
		? env.VITE_DOMAIN_DEV
		: env.VITE_DOMAIN_PROD;

	return {
		plugins: [react()],
		server: {
			host: true,
			proxy: {
				'/api': {
					target: DOMAIN,
					changeOrigin: true,
					secure: true,
				},
			},
		},
		resolve: {
			alias: {
				src: path.resolve('src/'),
				'~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
			},
		},
		build: {
			// to make tests faster
			minify: false,
		},
	}
})
