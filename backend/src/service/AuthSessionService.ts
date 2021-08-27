import User from '../model/User'
import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface Request {
    email: string,
    password: string,
}

class AuthSessionService {
    public async execute ( { email, password }: Request): Promise<{user:User}> {
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

        const token = sign()

        return { user }
    }
}

export default AuthSessionService
