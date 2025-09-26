import { Router } from "express";
import {create} from "../controllers/aws/create.js";
import {read} from "../controllers/aws/read.js";
import {deleter} from "../controllers/aws/delete.js";

const router = Router();

router.post("/presign-upload", create);
router.get("/presign-download",read);
router.delete("/object", deleter);




export default router;
