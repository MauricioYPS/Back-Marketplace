import { Router } from "express";
import { create } from "../controllers/items/create.js";
import { readAll } from "../controllers/items/read.js";
import { readByID } from "../controllers/items/read.js";
import { updateItem } from "../controllers/items/update.js";
import { deleteItem } from "../controllers/items/delete.js";

const router = Router();

router.get('/all', readAll)
router.get('/id/:id', readByID)
router.post('/create', create)
router.put('/update/:id', updateItem)
router.delete('/delete/:id', deleteItem)

export default router