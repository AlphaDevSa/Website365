import { Router, type IRouter } from "express";
import healthRouter from "./health";
import domainRouter from "./domain";
import contactRouter from "./contact";

const router: IRouter = Router();

router.use(healthRouter);
router.use(domainRouter);
router.use(contactRouter);

export default router;
