import { Router } from 'express'
import { createUserController, listUsersController, updateUserController, deleteUserController } from '../controllers/users.controller'
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', listUsersController)
userRoutes.patch('', ensureAuthMiddleware, updateUserController)
userRoutes.delete('', ensureAuthMiddleware, deleteUserController)

export default userRoutes
