import Products from "../../models/Product.js";

let deleteProduct = async (req, res, next) => {
    try {
        let destroy = await Products.findByIdAndDelete(req.params.id)
        if (destroy) {
            return res.status(200).json({
                response: destroy
            })
        } else {
            return res.status(404).json({
                message: "Product not found"
            })
        }
    } catch (error) {
        next(error)
    }
}

export { deleteProduct }