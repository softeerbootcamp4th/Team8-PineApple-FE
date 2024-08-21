import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';
import prerender from '@prerenderer/rollup-plugin';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    prerender({
      routes: [
        '/',
        '/event',
        '/event/worldCup',
        '/event/miniQuiz',
        '/introduce',
      ],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 500,
      },
      postProcess(renderedRoute) {
        const apiUrl = process.env.VITE_API_URL;
        renderedRoute.html = renderedRoute.html
          .replace(/http:/i, 'https:')
          .replace(/(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i, apiUrl);
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@pages', replacement: resolve(__dirname, 'src/pages') },
    ],
  },
});
