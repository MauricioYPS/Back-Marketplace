import { Router } from "express";
import { validateBody, validateParams } from "../middlewares/validator.js";
import productCreateSchema from "../schemas/products/create.js";
import productUpdateSchema from "../schemas/products/update.js";
import { productIdParamSchema } from "../schemas/products/params.js";
import { create } from "../controllers/products/create.js";
import { readAll, readByID, readByUserID } from "../controllers/products/read.js";
import { updateProduct } from "../controllers/products/update.js";
import { deleteProduct } from "../controllers/products/delete.js";

const router = Router()

router.get('/all', readAll)
router.get('/id/:id', validateParams(productIdParamSchema), readByID)
router.get('/user/:id', validateParams(productIdParamSchema), readByUserID)
router.post('/create', validateBody(productCreateSchema), create)
router.put('/update/:id', validateParams(productIdParamSchema), validateBody(productUpdateSchema), updateProduct)
router.delete('/delete/:id', validateParams(productIdParamSchema), deleteProduct)

export default router
