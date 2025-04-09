import User from "../../models/User.js";

const register = async (req, res, next) => {
    try {
        let user = req.body
        user.online = false
        user.role = 1
        let all = await User.create(user)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}
export { register }