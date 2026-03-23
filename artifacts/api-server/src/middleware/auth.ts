import { type Request, type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env["JWT_SECRET"] || "changeme-set-JWT_SECRET-env";

export function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  const token =
    req.cookies?.["admin_token"] ||
    req.headers["authorization"]?.replace("Bearer ", "");

  if (!token) {
    res.status(401).json({ error: "Unauthorised" });
    return;
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { sub: string; role: string };
    if (payload.role !== "admin") {
      res.status(403).json({ error: "Forbidden" });
      return;
    }
    // attach to request for downstream use
    (req as Request & { adminUser?: string }).adminUser = payload.sub;
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}

export function signAdminToken(username: string): string {
  return jwt.sign({ sub: username, role: "admin" }, JWT_SECRET, { expiresIn: "8h" });
}
