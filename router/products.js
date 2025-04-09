import { Router } from "express";
import { create } from "../controllers/products/create.js";
import { readAll } from "../controllers/products/read.js";
import { readByID } from "../controllers/products/read.js";
import { updateProduct } from "../controllers/products/update.js";
import { deleteProduct } from "../controllers/products/delete.js";

const router = Router();

router.get('/all', readAll)
router.get('/id/:id', readByID)
router.post('/create', create)
router.put('/update/:id', updateProduct)
router.delete('/delete/:id', deleteProduct)

export default router