import bcrypt from "bcryptjs";

export default async (req, res, next) => {
    let passwordBody = req.body.password
    let passwordDB = req.user.password
    let compare = bcrypt.compareSync(passwordBody, passwordDB)
    if (compare) {
        delete req.body.password
        return next()
    }
    return res.status(400).json({
        success: false,
        message: 'Password is incorrect'
    })

}