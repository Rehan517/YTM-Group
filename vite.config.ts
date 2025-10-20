import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { visualizer } from 'rollup-plugin-visualizer';
import replace from '@rollup/plugin-replace';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    
    // PWA Plugin with Service Worker - temporarily disabled to test build
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,webp,avif,svg,woff2}'],
    //     navigateFallback: '/index.html',
    //     navigateFallbackAllowlist: [/^(?!\/__).*/],
    //     runtimeCaching: [
    //       // Images with cache-first strategy
    //       {
    //         urlPattern: /\.(?:png|jpg|jpeg|webp|avif|svg|gif)$/,
    //         handler: 'CacheFirst',
    //         options: {
    //           cacheName: 'images-cache',
    //           expiration: {
    //             maxEntries: 100,
    //             maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
    //           },
    //         },
    //       },
    //       // Fonts with cache-first strategy
    //       {
    //         urlPattern: /\.(?:woff|woff2|eot|ttf|otf)$/,
    //         handler: 'CacheFirst',
    //         options: {
    //           cacheName: 'fonts-cache',
    //           expiration: {
    //             maxEntries: 20,
    //             maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
    //           },
    //         },
    //       },
    //       // API calls with network-first strategy
    //       {
    //         urlPattern: /^https:\/\/api\./,
    //         handler: 'NetworkFirst',
    //         options: {
    //           cacheName: 'api-cache',
    //           expiration: {
    //             maxEntries: 50,
    //             maxAgeSeconds: 60 * 60 * 24, // 1 day
    //           },
    //           networkTimeoutSeconds: 10,
    //         },
    //       },
    //       // External CDN resources
    //       {
    //         urlPattern: /^https:\/\/cdn\./,
    //         handler: 'StaleWhileRevalidate',
    //         options: {
    //           cacheName: 'cdn-cache',
    //           expiration: {
    //             maxEntries: 50,
    //             maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
    //           },
    //         },
    //       },
    //       // Google Analytics
    //       {
    //         urlPattern: /^https:\/\/www\.googletagmanager\.com/,
    //         handler: 'StaleWhileRevalidate',
    //         options: {
    //           cacheName: 'google-analytics',
    //         },
    //       },
    //       // EmailJS API
    //       {
    //         urlPattern: /^https:\/\/api\.emailjs\.com/,
    //         handler: 'NetworkFirst',
    //         options: {
    //           cacheName: 'emailjs-cache',
    //           networkTimeoutSeconds: 5,
    //         },
    //       },
    //     ],
    //     cleanupOutdatedCaches: true,
    //     skipWaiting: true,
    //     clientsClaim: true,
    //   },
    //   includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
    //   manifest: {
    //     name: 'YTM Group - Financial Services',
    //     short_name: 'YTM Group',
    //     description: 'Professional financial planning, lending, legal services, and business advisory in Melbourne, Australia',
    //     theme_color: '#1e40af',
    //     background_color: '#ffffff',
    //     display: 'standalone',
    //     orientation: 'portrait',
    //     scope: '/',
    //     start_url: '/',
    //     icons: [
    //       {
    //         src: 'pwa-64x64.png',
    //         sizes: '64x64',
    //         type: 'image/png'
    //       },
    //       {
    //         src: 'pwa-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png'
    //       },
    //       {
    //         src: 'pwa-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png'
    //       },
    //       {
    //         src: 'maskable-icon-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'maskable'
    //       }
    //     ],
    //     categories: ['finance', 'business', 'professional'],
    //     lang: 'en-AU',
    //     dir: 'ltr',
    //   },
    //   devOptions: {
    //     enabled: mode === 'development',
    //     type: 'module',
    //   },
    // }),
    
    // Bundle analyzer - generates bundle analysis report
    mode === 'analyze' && visualizer({
      filename: 'dist/bundle-analysis.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap', // 'treemap', 'sunburst', 'network'
    }),

    // Replace environment variables and dead code elimination
    replace({
      'process.env.NODE_ENV': JSON.stringify(mode),
      'import.meta.env.MODE': JSON.stringify(mode),
      'console.log': mode === 'production' ? 'void 0; //' : 'console.log',
      'console.warn': mode === 'production' ? 'void 0; //' : 'console.warn',
      'console.info': mode === 'production' ? 'void 0; //' : 'console.info',
      preventAssignment: true,
    }),
  ].filter(Boolean) as PluginOption[],
  
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
      '@config': fileURLToPath(new URL('./src/config', import.meta.url)),
    },
  },

  // Development server configuration
  server: {
    port: 3006,
    host: true,
    // Enable HMR optimizations
    hmr: {
      overlay: true,
    },
  },

  // Build optimizations
  build: {
    // Target modern browsers for better optimization
    target: 'esnext',
    
    // Increase chunk size warning threshold
    chunkSizeWarningLimit: 800,
    
    // Enable minification and CSS code splitting
    minify: 'terser',
    cssCodeSplit: true,
    
    // Generate source maps in development
    sourcemap: mode === 'development',

    // Rollup options for advanced bundling
    rollupOptions: {
      output: {
        // Enhanced chunk file naming
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()?.replace(/\.(tsx?|jsx?)$/, '')
            : 'chunk';
          
          // Special naming for common chunks
          if (chunkInfo.name === 'vendor') return 'assets/js/vendor-[hash].js';
          if (chunkInfo.name?.includes('react')) return 'assets/js/react-[hash].js';
          if (chunkInfo.name?.includes('router')) return 'assets/js/router-[hash].js';
          
          return `assets/js/${facadeModuleId}-[hash].js`;
        },
        
        // Asset file naming with better organization
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') ?? [];
          const ext = info[info.length - 1];
          
          // Organize assets by type
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name ?? '')) {
            return 'assets/fonts/[name]-[hash].[ext]';
          }
          if (/\.(png|jpe?g|svg|gif|webp|avif)$/.test(assetInfo.name ?? '')) {
            return 'assets/images/[name]-[hash].[ext]';
          }
          if (ext === 'css') {
            return 'assets/css/[name]-[hash].[ext]';
          }
          
          return `assets/${ext}/[name]-[hash].[ext]`;
        },
        
        // Smart chunk organization
        manualChunks: (id) => {
          // Vendor libraries
          if (id.includes('node_modules')) {
            // React ecosystem
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react';
            }
            
            // Router
            if (id.includes('react-router')) {
              return 'router';
            }
            
            
            // SEO and meta
            if (id.includes('react-helmet')) {
              return 'seo';
            }
            
            // Animation libraries
            if (id.includes('framer-motion') || id.includes('lottie') || id.includes('gsap')) {
              return 'animations';
            }
            
            // Analytics
            if (id.includes('gtag') || id.includes('google-analytics')) {
              return 'analytics';
            }
            
            // Date libraries
            if (id.includes('date-fns') || id.includes('dayjs') || id.includes('moment')) {
              return 'dates';
            }
            
            // Utility libraries
            if (id.includes('lodash') || id.includes('ramda') || id.includes('classnames')) {
              return 'utils';
            }
            
            // UI libraries
            if (id.includes('headlessui') || id.includes('radix') || id.includes('ariakit')) {
              return 'ui-libs';
            }
            
            // Everything else goes to vendor
            return 'vendor';
          }
          
          // Application code chunks
          // Pages
          if (id.includes('/pages/')) {
            return 'pages';
          }
          
          // Components by atomic design
          if (id.includes('/components/sections/')) {
            return 'sections';
          }
          if (id.includes('/components/organisms/')) {
            return 'organisms';
          }
          if (id.includes('/components/molecules/')) {
            return 'molecules';
          }
          if (id.includes('/components/atoms/')) {
            return 'atoms';
          }
          
          // Other component categories
         
          if (id.includes('/components/layout/')) {
            return 'layout';
          }
          if (id.includes('/components/utils/')) {
            return 'utils-components';
          }
          if (id.includes('/components/seo/')) {
            return 'seo-components';
          }
          if (id.includes('/components/analytics/')) {
            return 'analytics-components';
          }
          
          // Configuration and utilities
          if (id.includes('/config/')) {
            return 'config';
          }
          if (id.includes('/utils/')) {
            return 'app-utils';
          }
          if (id.includes('/hooks/')) {
            return 'hooks';
          }
          if (id.includes('/types/')) {
            return 'types';
          }
        },
      },
    },
  },

  // Optimization settings
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-helmet-async',
    ],
    exclude: [
      // Large libraries that should be loaded on-demand
      'framer-motion',
    ],
  },

  // CSS processing optimizations
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
    },
    devSourcemap: mode === 'development',
    // PostCSS optimizations will be applied automatically by Tailwind
  },
}));
