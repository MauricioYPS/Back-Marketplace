import "dotenv/config.js"
import "../../config/database.js"
import Product from "../Product.js"

let products = [
    {
        name: "Mouse",
        description: "Mouse Gamer",
        price: 1000,
        stock: 10,
        photoUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczP7ymu60vcAOdllrNW_W973C8HSQmZkgOkxLqUaJcJSu2twX9ks5zAzEw=w707-h945-s-no-gm?authuser=0",
        category: "Electronics",
        userId: "67f497d0405d33c9532e85a8"
    }
]

Product.insertMany(products)