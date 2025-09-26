import { Router } from "express";
import userRouter from "./users.js";
import productRouter from "./products.js";
import items from "./items.js";
import stores from "./stores.js";
import routerAuth from "./auth.js";
import s3Routes from "./s3Routes.js"

const router = Router();

router.use('/users',userRouter)
router.use('/products',productRouter)
router.use('/items',items)
router.use('/stores',stores)
router.use('/auth',routerAuth)
router.use('/s3',s3Routes)

export default router