import Products from "../../models/Product.js";

let updateProduct = async (req, res, next) => {
    try {
        let update = await Products.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        if (update) {
            return res.status(200).json({
                response: { update },
                message: { msg: "Product updated" }
            })
        } else {
            return res.status(404).json({
                message: { msg: "Product not found" }
            })
        }
    } catch (error) {
     next(error)   
    }
}

export { updateProduct }