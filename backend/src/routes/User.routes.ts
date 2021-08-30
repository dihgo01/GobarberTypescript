import { request, response, Router } from "express";
import CreateUserService from "../service/CreateUserService";
import Auth from '../middleware/auth'
import multer from 'multer'
import UploadConfig from '../config/multer'
import UploadFileAvatarService from "../service/UploadFileAvatar";


const Usersroutes = Router()
const upload = multer(UploadConfig)

Usersroutes.post('/', async (request,response) => {
    try {
        const { name, email, password} = request.body

        const UserService = new CreateUserService ()

        const user = await UserService.execute({
            name,
            email,
            password,
        })

        return response.json(user)
    }
    catch (err) {
        return response.status(400).json( {error : err.message})
    }
})

Usersroutes.patch('/avatar', Auth, upload.single('avatar') , async (request, response) => {
    try {
        const updateUserAvatar = new UploadFileAvatarService()

        const user = await updateUserAvatar.execute({
            user_id : request.user.id,
            avatarFilename: request.file.filename,
        })

        delete user.password;

        return response.json(user)
    }catch(err) {
        return response.status(400).json( {error : err.message})
    }

})
export default Usersroutes;
