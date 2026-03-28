import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  define: {
    global: "window",
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  
  // Build optimizations
  build: {
    // Vite 8 uses Rolldown's built-in oxc minifier (faster than terser)
    minify: true,
    
    // Generate source maps for debugging (disable in production)
    sourcemap: false,
    
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    
    // Rollup/Rolldown output options
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'ui-vendor': ['@headlessui/react', '@heroicons/react'],
          'editor-vendor': ['draft-js', 'react-draft-wysiwyg', 'draft-js-export-html'],
          'animation-vendor': ['aos', 'swiper'],
        },
        
        // Asset file naming
        assetFileNames: (assetInfo: { name?: string }) => {
          const info = assetInfo.name?.split('.') || [];
          const extType = info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        
        // Chunk file naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  
  // Development server options
  server: {
    port: 5173,
    host: true, // Allow external connections
    open: true, // Auto-open browser
  },
  
  // Preview server options
  preview: {
    port: 4173,
    host: true,
  },
  
  // CSS options
  css: {
    devSourcemap: true,
  },
  
  // Resolve options
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

