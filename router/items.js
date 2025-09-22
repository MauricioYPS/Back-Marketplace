import { Router } from "express";
import { validateBody, validateParams } from "../middlewares/validator.js";
import itemCreateSchema from "../schemas/items/create.js";
import itemUpdateSchema from "../schemas/items/update.js";
import { itemIdParamSchema } from "../schemas/items/params.js";
import { create } from "../controllers/items/create.js";
import { readAll, readByStoreID, readById } from "../controllers/items/read.js";
import { updateItem } from "../controllers/items/update.js";
import { deleteItem } from "../controllers/items/delete.js";

const router = Router()

router.get('/all', readAll)
router.get('/id/:id', validateParams(itemIdParamSchema), readById)
router.get('/store/:id', validateParams(itemIdParamSchema), readByStoreID)
router.post('/create', validateBody(itemCreateSchema), create)
router.put('/update/:id', validateParams(itemIdParamSchema), validateBody(itemUpdateSchema), updateItem)
router.delete('/delete/:id', validateParams(itemIdParamSchema), deleteItem)

export default router
