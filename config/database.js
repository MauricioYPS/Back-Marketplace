import mongoose from "mongoose";

let url = process.env.URI_MONGO;

console.log(url);

async function connectDB() {
    try {
        await mongoose.connect(url);
        console.log("Database is connected");
    } catch (error) {
        console.log(error);
        
    }
}

connectDB();