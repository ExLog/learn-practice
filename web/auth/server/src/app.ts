import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import "passport";
import Router from "./routes";
import passport from "passport";
import initLocalStrategy from "./strategies/LocalStrategy";
import initJwtStrategy from "./strategies/JwtStrategy";

createConnection().then(async (_connection) => {
    const app = express();
    app.use(passport.initialize());
    app.use(express.urlencoded({ extended: true }));

    initLocalStrategy(passport);
    initJwtStrategy(passport);

    app.use("/", Router);

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () =>
        console.log(`Listening on http://localhost:${PORT}`)
    );
});
