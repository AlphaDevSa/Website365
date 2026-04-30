import { Router, type IRouter } from "express";
import healthRouter from "./health";
import domainRouter from "./domain";
import contactRouter from "./contact";
import adminRouter from "./admin";

const router: IRouter = Router();

// Add a root API endpoint so GET /api doesn't return 404
router.get("/", (req, res) => {
  res.json({ message: "Website365 API Server is running", version: "1.0.0" });
});

router.use(healthRouter);
router.use(domainRouter);
router.use(contactRouter);
router.use(adminRouter);

export default router;
