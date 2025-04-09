import "dotenv/config.js"
import "../../config/database.js"
import Store from "../Store.js"

let stores = [
    {
        name: "Tienda 1",
        description: "Tienda de ropa",
        photoUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczP7ymu60vcAOdllrNW_W973C8HSQmZkgOkxLqUaJcJSu2twX9ks5zAzEw=w707-h945-s-no-gm?authuser=0",
        address: "Calle 1",
        phone: 3227682475,
        userId: "67f497d0405d33c9532e85a8"
    }
]

Store.insertMany(stores)