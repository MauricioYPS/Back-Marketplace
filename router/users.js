import { Router } from "express";
import { userById } from "../controllers/users/read.js";
import { allUsers } from "../controllers/users/read.js";
import { oneUser } from "../controllers/users/read.js";
import { register } from "../controllers/users/register.js";
import { updateUser } from "../controllers/users/update.js";
import { updateUserByEmail } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";

const router = Router();

router.get('/all', allUsers)
router.get('/id/:id', userById)
router.get('/me', oneUser)
router.post('/register', register)
router.put('/update/:id', updateUser)
router.put('/update/email/:email', updateUserByEmail)
router.delete('/delete/:id', deleteUser)

export default router
