import { Router } from "express";
import { validateBody, validateParams } from "../middlewares/validator.js";
import userCreateSchema from "../schemas/users/create.js";
import userUpdateSchema from "../schemas/users/update.js";
import { userIdParamSchema, userEmailParamSchema } from "../schemas/users/params.js";
import { userById, allUsers, oneUser, userByEmail } from "../controllers/users/read.js";
import { register } from "../controllers/users/register.js";
import { updateUser, updateUserByEmail } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";
import passport from "../middlewares/auth/passport.js";
import createHash from "../middlewares/auth/createHash.js";
import accountExist from "../middlewares/accountExist.js";

const router = Router()

router.get('/all', allUsers)
router.get('/validationToken', passport.authenticate('jwt', { session: false }), oneUser)
router.get('/id/:id', validateParams(userIdParamSchema), userById)
router.get('/email/:email', validateParams(userEmailParamSchema), userByEmail)
router.post('/register', validateBody(userCreateSchema), accountExist, createHash, register)
router.put('/update/:id', validateParams(userIdParamSchema), validateBody(userUpdateSchema), updateUser)
router.put('/update/email/:email', validateParams(userEmailParamSchema), validateBody(userUpdateSchema), updateUserByEmail)
router.delete('/delete/:id', validateParams(userIdParamSchema), deleteUser)

export default router
