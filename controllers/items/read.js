import Items from "../../models/Item.js";

let readAll = async (req, res, next) => {
    try {
        let all = await Items.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let readById = async (req, res, next) => {
    try {
        let itemQuery = req.params.id
        let item = await Items.find({ _id: itemQuery })
        return res.status(200).json({
            response: item
        })
    } catch (error) {
        next(error)
    }
}

let readByStoreID = async (req, res, next) => {
    try {
        let itemQuery = req.params.id
        let item = await Items.find({ storeId: itemQuery })
        return res.status(200).json({
            response: item
        })
    } catch (error) {
        next(error)
    }
}

export { readAll, readByStoreID, readById }