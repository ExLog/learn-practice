import type { PassportStatic } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { getRepository } from "typeorm";
import User from "../entity/User";

export default (passport: PassportStatic) => {
    passport.use(
        new LocalStrategy(
            { session: false },
            async (username, password, done) => {
                const userRepo = getRepository(User);
                const user = await userRepo.findOne(
                    { username },
                    {
                        select: ["id", "username", "password"],
                    }
                );

                if (!user) {
                    return done(null, false, {
                        message: "Account doesn't exist",
                    });
                }

                if (!(await user.verifyPassword(password))) {
                    return done(null, false, { message: "Incorrect password" });
                }
                const userPayload = {
                    id: user.id,
                    username: user.username,
                };

                return done(null, userPayload);
            }
        )
    );
};
