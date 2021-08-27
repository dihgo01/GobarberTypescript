import User from '../model/User'
import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

interface Response {
    name : string;
    email: string;
    password: string;
}

class CreateUserService {

   public async execute ({ name, email, password }:Response ):Promise<User>{
        const usersRepository = getRepository (User)

        const checkUserExist = await usersRepository.findOne ({
            where: { email }
        })

        if (checkUserExist) {
            throw new Error ('Email address already used.')
        }

        const hashpassword = await hash(password , 8);
        const user = usersRepository.create({
            name,
            email,
            password : hashpassword
        })

        await usersRepository.save(user)

        return user
    }
}

 export default CreateUserService
