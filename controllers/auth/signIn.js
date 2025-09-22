import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            {email: req.body.email || req.user.email},
            {online: true})

            return res.status(200).json({
                success: true,
                message: "User signed in",
                user:{
                    email: req.user.email,
                    role: req.user.role,
                    photoUrl: req.user.photoUrl

                },
                token: req.token
            })
    } catch (error) {
        next(error)
    }
}