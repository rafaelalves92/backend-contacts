import 'dotenv/config'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const ensureAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization

    if (!token) {
        return res.status(401).json({
            message: "Token is missing"
        })
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded) => {
        if (error) {
            return res.status(401).json({
                message: "Invalid token"
            })
        }

        req.user = {
            id: `${decoded!.sub}`
        }

        return next()
    })
}

export default ensureAuthMiddleware
