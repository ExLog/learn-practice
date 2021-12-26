import { NextFunction, Request, Response } from "express";
import passport from "passport";

export default (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("jwt", { session: false }, (err, user, opt) => {
        if (opt) return res.json({ message: opt.message });
        if (err) {
            console.error(err);
            return res.status(500).json({
                message: "Something went wrong when authenticating with JWT",
            });
        }

        console.log("Authenticated!");
        console.log(user);
        req.user = user;

        return next();
    })(req, res, next);
};
