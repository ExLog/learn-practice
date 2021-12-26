import { Router } from "express";
import { getMyData } from "../controllers/UserController";
import isAuthenticated from "../middlewares/authenticated";

const router = Router();

router.use(isAuthenticated);

router.get("/", getMyData);

export default router;
