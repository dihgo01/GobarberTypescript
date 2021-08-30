import {Request, Response, NextFunction, request} from 'express'
import key from '../config/auth'
import { verify } from 'jsonwebtoken'

interface TokenPayload {
    iat : number,
    exp : number,
    sub : string,
}

export default function authenticateUser (request: Request, response: Response, next:NextFunction ): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error(' JWT token is missing');
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
        throw new Error ('Token invalid!')
    }
}
