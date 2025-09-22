import Store from "../../models/Store.js";

let create = async (req, res, next) => {
    try {
        let store = req.body
        let all = await Store.create(store)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export  {create}