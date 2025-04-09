import User from "../../models/User.js";

let deleteUser = async (req, res, next) => {
    try {
        let destroy = await User.findByIdAndDelete(req.params.id)
        if (destroy) {
            return res.status(200).json({
                response: destroy
            })
        } else {
            return res.status(404).json({
                message: "User not found"
            })
        }
    } catch (error) {
        next(error)
    }
}
export { deleteUser }