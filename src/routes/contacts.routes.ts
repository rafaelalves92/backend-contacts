import { Router } from 'express'
import { createContactController, listContactsUserController, updateContactController, deleteContactController } from '../controllers/contacts.controller'
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'
import ensureIsOwnerMiddleware from '../middlewares/ensureIsOwner.middleware'

const contactRoutes = Router()

contactRoutes.get('', ensureAuthMiddleware, listContactsUserController)
contactRoutes.post('', ensureAuthMiddleware, createContactController)
contactRoutes.patch('/:id', ensureAuthMiddleware, ensureIsOwnerMiddleware, updateContactController)
contactRoutes.delete('/:id', ensureAuthMiddleware, ensureIsOwnerMiddleware, deleteContactController)

export default contactRoutes
