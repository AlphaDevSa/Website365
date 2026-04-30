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

// Fallback for React Router (SPA)
app.use((req, res, next) => {
  if (req.path.startsWith("/api") || req.method !== "GET") {
    return next();
  }
  res.sendFile(path.join(frontendPath, "index.html"));
});

export default app;

