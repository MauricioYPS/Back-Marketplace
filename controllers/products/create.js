import Products from "../../models/Product.js";

let create = async (req, res, next) => {
    try {
        let product = req.body
        let all = await Products.create(product)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { create }