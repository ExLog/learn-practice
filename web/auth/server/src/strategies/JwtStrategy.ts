import type { PassportStatic } from "passport";
import {
    ExtractJwt,
    Strategy as JwtStrategy,
    StrategyOptions,
    VerifiedCallback,
} from "passport-jwt";
import { getRepository } from "typeorm";
import User from "../entity/User";

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secret test only",
};

export default (passport: PassportStatic) => {
    passport.use(
        new JwtStrategy(opts, async (payload, done: VerifiedCallback) => {
            const userRepo = getRepository(User);
            const user = await userRepo.findOne(payload.sub, {
                select: ["id", "username", "password"],
            });

            if (!user) {
                return done(null, false, { message: "Account doesn't exist" });
            }

            const userPayload = {
                id: user.id,
                username: user.username,
            };

            return done(null, userPayload);
        })
    );
};
