import express from "express";
import "dotenv/config.js";
import "./config/database.js"
import cors from "cors";
import morgan from "morgan";
import indexRouter from "./router/index.js";
import error_handler from "./middlewares/error_handler.js";
import invalid_json_error_handler from "./middlewares/invalid_json_error_handler.js";
import forbidden_error_handler from "./middlewares/forbidden_error_handler.js";
import error_timeout_handler from "./middlewares/error_timeout_handler.js";
import bad_request_error_handler from "./middlewares/bad_request_error_handler.js";
import not_found_handler from "./middlewares/not_found_handler.js";
import unauthorized_error_handler from "./middlewares/unauthorized_error_handler.js";
import validation_error_handler from "./middlewares/validation_error_handler.js";


const server = express();
const PORT = process.env.PORT || 8080;
const ready = ()=> console.log("Sever is ready in port : ", PORT);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'))

server.use(invalid_json_error_handler)

server.use('/api',indexRouter)

server.use(bad_request_error_handler)
server.use(validation_error_handler)
server.use(unauthorized_error_handler)
server.use(forbidden_error_handler)
server.use(not_found_handler)
server.use(error_timeout_handler)
server.use(error_handler)

server.listen(PORT, ready);


