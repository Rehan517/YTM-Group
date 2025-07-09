import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Path aliases for cleaner imports
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@atoms': fileURLToPath(new URL('./src/components/atoms', import.meta.url)),
      '@molecules': fileURLToPath(new URL('./src/components/molecules', import.meta.url)),
      '@organisms': fileURLToPath(new URL('./src/components/organisms', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },

  // Development server configuration
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true,
    },
  },

  // Preview server configuration (for testing production builds)
  preview: {
    port: 4173,
    open: true,
  },

  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    target: 'esnext',
    
    // Rollup options for code splitting and optimization
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // React and core dependencies
          vendor: ['react', 'react-dom'],
          
          // Separate chunks for different component types
          // This will be useful as the project grows
        },
        
        // Asset file naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) {
            return 'assets/[name]-[hash][extname]';
          }
          
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(extType)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[ext]/[name]-[hash][extname]`;
        },
      },
      
      // External dependencies (if needed)
      external: [],
    },
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Asset inlining threshold (4kb)
    assetsInlineLimit: 4096,
    
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },

  // CSS configuration
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      // Future CSS preprocessing options can go here
    },
  },

  // Environment variables configuration
  envPrefix: 'VITE_',

  // Dependency optimization
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: [],
  },

  // Base public path
  base: '/',

  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
