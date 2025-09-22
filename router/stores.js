import {Router} from "express";
import { create } from "../controllers/stores/create.js";
import { readAll } from "../controllers/stores/read.js";
import { readById } from "../controllers/stores/read.js";
import { updateStore } from "../controllers/stores/update.js";
import { deleteStore } from "../controllers/stores/delete.js";

const router = Router();

router.get('/all', readAll)
router.get('/id/:id', readById)
router.post('/create', create)
router.put('/update/:id', updateStore)
router.delete('/delete/:id', deleteStore)

export default router