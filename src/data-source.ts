import 'dotenv/config'
import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    synchronize: false,
    logging: true,
    entities: ['src/entities/*.ts'],
    migrations: ['src/migrations/*.ts']
})

AppDataSource.initialize().then(() => {
    console.log('Database connected')
}).catch((error) => {
    console.log(error)
})

export { AppDataSource }
