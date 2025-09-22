import { Router } from "express";
import { validateBody, validateParams } from "../middlewares/validator.js";
import userCreateSchema from "../schemas/users/create.js";
import userUpdateSchema from "../schemas/users/update.js";
import { userIdParamSchema, userEmailParamSchema } from "../schemas/users/params.js";
import { userById, allUsers, oneUser } from "../controllers/users/read.js";
import { register } from "../controllers/users/register.js";
import { updateUser, updateUserByEmail } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";

const router = Router()

router.get('/all', allUsers)
router.get('/id/:id', validateParams(userIdParamSchema), userById)
router.get('/me', oneUser)
router.post('/register', validateBody(userCreateSchema), register)
router.put('/update/:id', validateParams(userIdParamSchema), validateBody(userUpdateSchema), updateUser)
router.put('/update/email/:email', validateParams(userEmailParamSchema), validateBody(userUpdateSchema), updateUserByEmail)
router.delete('/delete/:id', validateParams(userIdParamSchema), deleteUser)

export default router
