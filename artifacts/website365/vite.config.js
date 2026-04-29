import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = parseInt(process.env.PORT || '5173', 10);
  const apiServerOrigin = env.API_SERVER_ORIGIN || process.env.API_SERVER_ORIGIN || 'http://localhost:3001';
  const isDevServer = command === 'serve';

  const plugins = [react()];

  // Only add dev API middleware in dev mode
  if (isDevServer) {
    plugins.push({
      name: 'website365-dev-api',
      configureServer(devServer) {
        let handlersPromise;
        const loadHandlers = async () => {
          if (!handlersPromise) {
            handlersPromise = Promise.all([
              import('./server/domainCheckHandler.mjs'),
              import('./server/domainPricingHandler.mjs'),
              import('./server/contactFormHandler.mjs'),
            ]).then(([domainCheck, domainPricing, contact]) => ({
              handleDomainCheck: domainCheck.handleDomainCheck,
              handleDomainPricing: domainPricing.handleDomainPricing,
              handleContactForm: contact.handleContactForm,
            }));
          }
          return handlersPromise;
        };

        devServer.middlewares.use('/api/domain/check', async (req, res) => {
          const { handleDomainCheck } = await loadHandlers();
          await handleDomainCheck(req, res, { origin: devServer.config.server.origin || `http://localhost:${port}`, env });
        });
        devServer.middlewares.use('/api/domain/pricing', async (req, res) => {
          const { handleDomainPricing } = await loadHandlers();
          await handleDomainPricing(req, res, { origin: devServer.config.server.origin || `http://localhost:${port}`, env });
        });
        devServer.middlewares.use('/api/contact', async (req, res) => {
          const { handleContactForm } = await loadHandlers();
          await handleContactForm(req, res, { origin: devServer.config.server.origin || `http://localhost:${port}`, env });
        });
      }
    });
  }

  return {
    plugins,
    server: {
      port,
      host: '0.0.0.0',
      allowedHosts: true,
      proxy: {
        '/api/admin': {
          target: apiServerOrigin,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    build: {
      outDir: 'dist/public',
    }
  };
});
