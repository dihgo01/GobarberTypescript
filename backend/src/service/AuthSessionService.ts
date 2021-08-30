import User from '../model/User'
import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import key from '../config/auth'

interface Request {
    email: string,
    password: string,
}

interface Response {
    user: User,
    token: string,

}

class AuthSessionService {
    public async execute ( { email, password }: Request): Promise<Response> {
        const userRepository = getRepository (User)

        const user = await userRepository.findOne({
            where: { email }
        })

        if(!user) {
            throw new Error(' Incorrect email/password combination.')
        }

        const passwordMatched = await compare(password , user.password)

        if(!passwordMatched) {
            throw new Error(' Incorrect email/password combination.')
        }

            const token = sign({}, key.jwt.secretKey,{
                subject: user.id,
                expiresIn: key.jwt.expiresIn
            })

        return { user , token }
    }
}

export default AuthSessionService
