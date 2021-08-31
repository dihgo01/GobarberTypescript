import {Request, Response, NextFunction, request} from 'express'
import key from '../config/auth'
import { verify } from 'jsonwebtoken'
import AppError from '../error/AppError'

interface TokenPayload {
    iat : number,
    exp : number,
    sub : string,
}

export default function authenticateUser (request: Request, response: Response, next:NextFunction ): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError(' JWT token is missing',401);
    }

    const [, token] = authHeader.split(' ');

    try {
        const decode = verify(token, key.jwt.secretKey)

        const { sub } = decode as TokenPayload

        request.user = {
            id: sub,
        }

        return next()
    }catch {
        throw new AppError ('Token invalid!',401)
    }
}
