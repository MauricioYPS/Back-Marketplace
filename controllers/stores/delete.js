import Store from "../../models/Store.js";

let deleteStore = async (req, res, next) => {
    try {
        let destroy = await Store.findByIdAndDelete(req.params.id)
        if (destroy) {
            return res.status(200).json({
                response: destroy
            })
        } else {
            return res.status(404).json({
                message: "Store not found"
            })
        }
    } catch (error) {
        next(error)
    }
}

export  {deleteStore}