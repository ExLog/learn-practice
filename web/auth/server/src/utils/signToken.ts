import jwt from "jsonwebtoken";

const SECRET = "secret test only";

export default (payload: Object, subject: string) => {
    return jwt.sign(payload, SECRET, { subject, expiresIn: "30d" });
};
