import { Router } from "express";
import userRouter from "./users.js";
import productRouter from "./products.js";
import items from "./items.js";
import stores from "./stores.js";
import routerAuth from "./auth.js";


const router = Router();

router.use('/users',userRouter)
router.use('/products',productRouter)
router.use('/items',items)
router.use('/stores',stores)
router.use('/auth',routerAuth)

export default router