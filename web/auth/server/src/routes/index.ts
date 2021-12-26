import { Router } from "express";
import AuthRouter from "./AuthRouter";
import ProtectedRouter from "./ProtectedRouter";
import UserRouter from "./UserRouter";

const router = Router();

router.get("/", (_, res) => {
    return res.json({ message: "pong" });
});

router.use("/auth", AuthRouter);
router.use("/users", UserRouter);
router.use("/protected", ProtectedRouter);

export default router;
