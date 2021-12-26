import { getRepository } from "typeorm";
import type { Controller } from "../../@types/controller";
import User from "../entity/User";

export const getMyData: Controller = async (req, res, next) => {
    const userRepo = getRepository(User);
    const user = await userRepo.findOne(req.user.id);

    return res.json(user);
};
