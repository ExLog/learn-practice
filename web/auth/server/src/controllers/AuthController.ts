import type { NextFunction, Request, Response } from "express";
import passport from "passport";
import signToken from "../utils/signToken";

export const login = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("local", { session: false }, (err, user, opt) => {
        if (opt) return res.json({ message: opt.message });
        if (err) {
            console.error(err);
            return res.json({ message: "Unexpected error occurred." });
        }

        const token = signToken(
            { username: user.username },
            user.id.toString()
        );
        return res.json({ token });
    })(req, res, next);
};
