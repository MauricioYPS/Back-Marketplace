import Items from "../../models/Item.js";

let create = async (req, res, next) => {
    try {
        let item = req.body
        let all = await Items.create(item)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export  {create}