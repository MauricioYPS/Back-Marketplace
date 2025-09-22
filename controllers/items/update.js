import Items from "../../models/Item.js";

let updateItem = async (req, res, next) => {
    try {
        let update = await Items.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        if (update) {
            return res.status(200).json({
                response: { update },
                message: { msg: "Item updated" }
            })
        } else {
            return res.status(404).json({
                message: { msg: "Item not found" }
            })
        }
    } catch (error) {
        next(error)
    }
}

export  {updateItem}