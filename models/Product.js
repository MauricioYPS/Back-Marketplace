import {Schema, model} from "mongoose";

let collection = 'Products'
let schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    photoUrl: {type: String, required: true},
    category: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId,ref: "Users", required: true},
},{
    timestamps: true
})

let Products = model (collection, schema)
export default Products