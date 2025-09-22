import bcrypt from "bcryptjs";

export default async (req, res, next) => {
    let passwotd = req.body.password
    let hashPassword = bcrypt.hashSync(
        passwotd, 10)
    req.body.password = hashPassword
    return next()
}