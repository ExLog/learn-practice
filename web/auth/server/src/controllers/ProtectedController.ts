import type { Controller } from "../../@types/controller";

export const getProtected: Controller = (_req, res) => {
    return res.json({ secret: "hehe" });
};
