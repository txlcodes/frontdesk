import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      preview: {
        host: '0.0.0.0',
        port: 3000,
        allowedHosts: [
          'frontdesk-vs14.onrender.com',
          '.onrender.com', // Allow all Render subdomains
          'localhost',
        ],
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.VITE_VAPI_PUBLIC_KEY': JSON.stringify(env.VITE_VAPI_PUBLIC_KEY),
        'process.env.VITE_VAPI_ASSISTANT_ID': JSON.stringify(env.VITE_VAPI_ASSISTANT_ID),
        'process.env.VITE_VAPI_DEMO_ASSISTANT_ID': JSON.stringify(env.VITE_VAPI_DEMO_ASSISTANT_ID),
        'process.env.VITE_VAPI_SERVER_KEY': JSON.stringify(env.VITE_VAPI_SERVER_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
