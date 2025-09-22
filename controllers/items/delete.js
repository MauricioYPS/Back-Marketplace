import Items from "../../models/Item.js";

let deleteItem = async (req, res, next) => {
    try {
        let destroy = await Items.findByIdAndDelete(req.params.id)
        if (destroy) {
            return res.status(200).json({
                response: destroy
            })
            
        }else{
            return res.status(404).json({
                message: "Item not found"
            })
        }
    } catch (error) {
        next(error)
    }
}

export  {deleteItem}