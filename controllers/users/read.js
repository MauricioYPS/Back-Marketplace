import User from "../../models/User.js";

let allUsers = async (req, res, next) => {
    try {
        let all = await User.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let userById = async (req, res, next) => {
    try {
        let userQuery = req.params.id
        let user = await User.find({ _id: userQuery })
        return res.status(200).json({
            response: user
        })
    } catch (error) {
        next(error)
    }
}

let userByEmail = async (req, res, next) => {
    try {
        let userQuery = req.params.email
        let user = await User.find({ email: userQuery })
        return res.status(200).json({
            response: user
        })
    } catch (error) {
        next(error)
    }
}

let oneUser = async (req, res, next) => {
    try {
        let doc = await User.findOne(req.user)
        return res.status(200).json({
            response: doc
        })
    } catch (error) {
        return res.status(400).json({
            message: "not found"
        })
    }
}

export { allUsers, userById, oneUser, userByEmail }