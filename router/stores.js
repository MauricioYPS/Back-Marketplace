import {Router} from "express";
import { validateBody, validateParams } from "../middlewares/validator.js";
import storeCreateSchema from "../schemas/stores/create.js";
import storeUpdateSchema from "../schemas/stores/update.js";
import { storeIdParamSchema } from "../schemas/stores/params.js";
import { create } from "../controllers/stores/create.js";
import { readAll, readById, readByUserID } from "../controllers/stores/read.js";
import { updateStore } from "../controllers/stores/update.js";
import { deleteStore } from "../controllers/stores/delete.js";

const router = Router()

router.get('/all', readAll)
router.get('/id/:id', validateParams(storeIdParamSchema), readById)
router.get('/user/:id', validateParams(storeIdParamSchema), readByUserID)
router.post('/create', validateBody(storeCreateSchema), create)
router.put('/update/:id', validateBody(storeUpdateSchema), updateStore)
router.delete('/delete/:id', validateParams(storeIdParamSchema), deleteStore)

export default router
