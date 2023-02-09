import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities/contact.entity'
import { AppError } from '../../errors/appError'

const deleteContactService = async (id: number) => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const contact = await contactRepository.findOneBy({ id })

    if (!contact) {
        throw new AppError("Contact not found", 401)
    }

    await contactRepository.delete(id)
}

export default deleteContactService
