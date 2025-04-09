import {Schema, model} from "mongoose";

let collection = 'Users'
let schema = new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    photoUrl: {type: String, required: true},
    role: {type: Number, required: true},
    online: {type: Boolean, required: true},
    age: {type: Number, required: true},
    phone: {type: Number, required: true},
},{
    timestamps: true
})

let User = model(collection, schema)
export default User
