#!/usr/bin/env node
/**
 * Production server for Website365
 * Serves the static frontend files and proxies API requests
 */

import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3000;
const API_ORIGIN = process.env.API_ORIGIN || 'http://localhost:3001';
const STATIC_DIR = path.join(__dirname, 'artifacts', 'website365', 'dist', 'public');

console.log(`Server configuration:`);
console.log(`  Port: ${PORT}`);
console.log(`  Static files: ${STATIC_DIR}`);
console.log(`  API Origin: ${API_ORIGIN}`);

const server = http.createServer(async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // API proxy
  if (req.url.startsWith('/api/')) {
    const apiUrl = new URL(req.url.slice(1), API_ORIGIN);
    
    try {
      const https = apiUrl.protocol === 'https:' ? (await import('https')).default : http;
      
      const apiReq = https.request(apiUrl, {
        method: req.method,
        headers: {
          ...req.headers,
          host: apiUrl.host,
        },
      }, (apiRes) => {
        res.writeHead(apiRes.statusCode, apiRes.headers);
        apiRes.pipe(res);
      });

      apiReq.on('error', (error) => {
        console.error('API proxy error:', error);
        res.writeHead(502, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Bad Gateway' }));
      });

      req.pipe(apiReq);
    } catch (error) {
      console.error('API proxy setup error:', error);
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Bad Gateway' }));
    }
    return;
  }

  // Static file serving
  let filePath = path.join(STATIC_DIR, req.url);

  // Default to index.html for root and non-file paths
  if (req.url === '/' || !path.extname(filePath)) {
    filePath = path.join(STATIC_DIR, 'index.html');
  }

  // Security: prevent directory traversal
  if (!path.resolve(filePath).startsWith(path.resolve(STATIC_DIR))) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  try {
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
      fs.accessSync(filePath);
    }

    // Set appropriate content type
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2',
      '.ttf': 'font/ttf',
      '.eot': 'application/vnd.ms-fontobject',
    };

    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    // Cache headers for static assets
    if (ext !== '.html') {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    }

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } catch (error) {
    console.error(`File not found: ${filePath}`, error.message);
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Not Found</h1>');
  }
});

server.listen(PORT, () => {
  console.log(`✓ Server listening on port ${PORT}`);
});

server.on('error', (error) => {
  console.error('Server error:', error);
  process.exit(1);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    process.exit(0);
  });
});
