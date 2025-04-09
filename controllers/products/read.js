import Products from "../../models/Product.js";

let readAll = async (req, res, next) => {
    try {
        let all = await Products.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let readByID = async (req, res, next) => {
    try {
        let productQuery = req.params.id
        let product = await Products.find({ _id: productQuery })
        return res.status(200).json({
            response: product
        })
    } catch (error) {
        next(error)
    }
}

export { readAll, readByID }