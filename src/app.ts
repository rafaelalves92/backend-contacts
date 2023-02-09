import express from 'express'
import 'reflect-metadata'
import userRoutes from './routes/users.routes'
import contactRoutes from './routes/contacts.routes'
import sessionRoutes from './routes/sessions.routes'
import handleErrorMiddleware from './middlewares/handleError.middleware'

const app = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/contacts', contactRoutes)
app.use('/login', sessionRoutes)

app.use(handleErrorMiddleware)
app.listen(3000, () => {
    console.log('Listening on port 3000')
})
