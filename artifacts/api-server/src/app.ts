import express, { type Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import pinoHttp from "pino-http";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes";
import { logger } from "./lib/logger";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api", router);

// API 404 fallback - prevents Express from returning HTML text "Cannot GET /api/..."
app.use("/api", (req, res) => {
  res.status(404).json({ error: "API endpoint not found" });
});

// Serve static frontend files if they exist (Unified Deployment)
const frontendPath = path.join(__dirname, "..", "public");
app.use(express.static(frontendPath));

import fs from "fs";

// Fallback for React Router (SPA) with Dynamic Meta Tag Injection
app.use((req, res, next) => {
  if (req.path.startsWith("/api") || req.method !== "GET") {
    return next();
  }
  
  const indexPath = path.join(frontendPath, "index.html");
  const metadataPath = path.join(frontendPath, "metadata.json");

  fs.readFile(indexPath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("[SSR] Error reading index.html", err);
      return res.status(500).send("Error loading application");
    }

    fs.readFile(metadataPath, "utf8", (metaErr, metaData) => {
      let modifiedHtml = htmlData;
      
      if (!metaErr && metaData) {
        try {
          const metadata = JSON.parse(metaData);
          // Find the exact metadata for the requested path, or use default '/'
          const routeMeta = metadata[req.path] || metadata["/"] || {};
          
          if (routeMeta.title) {
            // Replace existing title
            modifiedHtml = modifiedHtml.replace(
              /<title>(.*?)<\/title>/,
              `<title>${routeMeta.title}</title>`
            );
            
            // Build injection string for OpenGraph and Twitter tags
            let metaTags = `\n    <meta property="og:title" content="${routeMeta.title}" />`;
            if (routeMeta.description) {
              modifiedHtml = modifiedHtml.replace(
                /<meta name="description" content="(.*?)"\s*\/?>/,
                `<meta name="description" content="${routeMeta.description}" />`
              );
              metaTags += `\n    <meta property="og:description" content="${routeMeta.description}" />`;
              metaTags += `\n    <meta name="twitter:description" content="${routeMeta.description}" />`;
            }
            
            metaTags += `\n    <meta property="og:url" content="https://website365.co.za${req.path}" />`;
            metaTags += `\n    <meta property="og:type" content="website" />`;
            metaTags += `\n    <meta property="og:site_name" content="Website365" />`;
            metaTags += `\n    <meta name="twitter:card" content="summary_large_image" />`;
            metaTags += `\n    <meta name="twitter:title" content="${routeMeta.title}" />`;
            
            // Inject after <title>
            modifiedHtml = modifiedHtml.replace(
              /<\/title>/,
              `</title>${metaTags}`
            );
          }
        } catch (e) {
          console.error("[SSR] Error parsing metadata.json", e);
        }
      }

      res.send(modifiedHtml);
    });
  });
});

export default app;
