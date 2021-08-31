import User from '../model/User'
import { getRepository } from 'typeorm'
import path from 'path'
import UploadConfig from '../config/multer'
import fs from 'fs'
import AppError from '../error/AppError'

interface Request {
    user_id: string,
    avatarFilename : string,
}

class UploadAvatar {
    public async execute( {user_id , avatarFilename }: Request ):Promise<User>{
        const usersRepository = getRepository (User)

        const user = await usersRepository.findOne( user_id)

        if(!user) {
            throw new AppError('Only authenticated users can change avatar')
        }
        if(user.avatar) {
            const uploadAvatarFile = path.join( UploadConfig.directory, user.avatar)
            const userAvatarfileExist = await fs.promises.stat(uploadAvatarFile)

            if(userAvatarfileExist) {
                await fs.promises.unlink(uploadAvatarFile)
            }
        }

        user.avatar = avatarFilename

        await usersRepository.save(user)

        return user

    }
}

export default UploadAvatar
