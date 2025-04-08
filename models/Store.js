import {Schema, model} from "mongoose";

let collection = 'Stores'
let schema = new Schema({
    userId: {type: Schema.Types.ObjectId,ref: "Users", required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    photoUrl: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true}
},{
    timestamps: true
})
let Store = model(collection, schema)
export default Store