import { Router } from "express";
import AuthService from "../service/AuthSessionService";


const Sessionroutes = Router()

Sessionroutes.post('/', async (request,response) => {
    try {
        const { email, password} = request.body

        const AuthenticateUser = new AuthService ()

        const {user} = await AuthenticateUser.execute({
            email,
            password,
        })


        return response.json({ user })
    }
    catch (err) {
        return response.status(400).json( {error : err.message})
    }
})


export default Sessionroutes;