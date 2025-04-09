import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        let account = await User.findOne({email: req.body.email})
        if (account){
            req.user = {
                email: account.email,
                photo: account.photo,
                role: account.role,
                password: account.password
            }
            return next()
        }
        return res.status(400).json({
            success: false,
            message: 'Account does not exist'
        })
    } catch (error) {
        next(error)
    }
}