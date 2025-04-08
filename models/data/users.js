import 'dotenv/config.js';
import '../../config/database.js';
import User from '../User.js';

let users = [
    {
        name: "Mauricio",
        lastName: "Yepes",
        email: "yepes060@gmail.com",
        password: "1234",
        photoUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczP7ymu60vcAOdllrNW_W973C8HSQmZkgOkxLqUaJcJSu2twX9ks5zAzEw=w707-h945-s-no-gm?authuser=0",
        role: 4,
        age: 21,
        phone: 3227682475
    },{
        name: "Patrics",
        lastName: "Prieto",
        email: "ypsplay@gmail.com",
        password: "1234",
        photoUrl: "https://photos.fife.usercontent.google.com/pw/AP1GczP7ymu60vcAOdllrNW_W973C8HSQmZkgOkxLqUaJcJSu2twX9ks5zAzEw=w707-h945-s-no-gm?authuser=0",
        role: 4,
        age: 21,
        phone: 7777777
    }
]

User.insertMany(users)