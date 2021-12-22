import { registerAs } from '@nestjs/config'
import * as Joi from 'joi'

export default registerAs('config', async () => {
    return {
        database: {
            name: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT,
        },
        apiKey: process.env.API_KEY
    }
})

export const validationSchema = () => {
    return {
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required()
    }
}