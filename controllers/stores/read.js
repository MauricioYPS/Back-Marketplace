import Store from "../../models/Store.js";

let readAll = async (req, res, next) => {
    try {
        let all = await Store.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let readById = async (req, res, next) => {
    try {
        let storeQuery = req.params.id
        let store = await Store.find({ _id: storeQuery })
        return res.status(200).json({
            response: store
        })
    } catch (error) {
        next(error)
    }
}

export { readAll, readById }