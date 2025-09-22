import Store from "../../models/Store.js"

let updateStore =  async (req, res, next) => {
    try {
        let update = await Store.findByIdAndUpdate(
            { _id: req.params.id },
             req.body,
              { new: true })
        if (update) {
            return res.status(200).json({
                response: { update },
                message: { msg: "Store updated" }
            })
        } else {
            return res.status(404).json({
                message: { msg: "Store not found" }
            })
        }
    } catch (error) {
        next(error)
    }
}

export { updateStore }
