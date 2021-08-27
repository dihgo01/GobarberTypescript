import { Router } from "express";
import CreateUserService from "../service/CreateUserService";


const Usersroutes = Router()

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


export default Usersroutes;
