import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { handleDomainCheck } from './server/domainCheckHandler.mjs';
import { handleDomainPricing } from './server/domainPricingHandler.mjs';
import { handleContactForm } from './server/contactFormHandler.mjs';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = parseInt(process.env.PORT || '5173', 10);

  return {
    plugins: [
      react(),
      {
        name: 'website365-domain-check',
        configureServer(devServer) {
          devServer.middlewares.use('/api/domain/check', async (req, res) => {
            await handleDomainCheck(req, res, { origin: devServer.config.server.origin || `http://localhost:${port}`, env });
          });
          devServer.middlewares.use('/api/domain/pricing', async (req, res) => {
            await handleDomainPricing(req, res, { origin: devServer.config.server.origin || `http://localhost:${port}`, env });
          });
          devServer.middlewares.use('/api/contact', async (req, res) => {
            await handleContactForm(req, res, { origin: devServer.config.server.origin || `http://localhost:${port}`, env });
          });
        }
      }
    ],
    server: {
      port,
      host: '0.0.0.0',
      allowedHosts: true,
    },
    build: {
      outDir: 'dist/public',
    }
  };
});
