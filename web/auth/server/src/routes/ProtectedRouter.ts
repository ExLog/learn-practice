import { Router } from "express";
import { getProtected } from "../controllers/ProtectedController";
import isAuthenticated from "../middlewares/authenticated";

const router = Router();

router.use(isAuthenticated);

router.get("/", getProtected);

export default router;
