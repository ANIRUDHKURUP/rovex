import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        ViteImageOptimizer({
            svg: {
                multipass: true,
                plugins: [
                    { name: 'preset-default', params: { overrides: { removeViewBox: false, cleanupIds: false } } }
                ]
            },
            png: { quality: 82, compressionLevel: 9 },
            jpeg: { quality: 82 },
            jpg: { quality: 82 },
            webp: { quality: 82, effort: 6 }
        })
    ],
    build: {
        // Target modern browsers for smaller bundles
        target: 'es2020',
        // Inline assets smaller than 4KB
        assetsInlineLimit: 4096,
        // Enable CSS code splitting
        cssCodeSplit: true,
        // Optimize chunk size
        rollupOptions: {
            output: {
                // Split vendor chunks for better caching
                manualChunks: {
                    'react-vendor': ['react', 'react-dom'],
                    'motion': ['framer-motion'],
                    'router': ['react-router-dom'],
                    'lenis': ['@studio-freight/lenis'],
                    'icons': ['lucide-react'],
                },
            },
        },
    },
});
