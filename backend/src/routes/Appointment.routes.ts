import { Router } from "express";
import AppointmentRepositorie from "../repositorie/AppointmentRepositorie";
import CreateAppointmentService from "../service/CreateAppointmentService";
import { parseISO} from 'date-fns'
import { getCustomRepository } from 'typeorm'


const Appointmentroutes = Router()




Appointmentroutes.post('/', async (request,response) => {
    try {

        const { provider_id, date} = request.body

    const parseDate = parseISO(date)
    const createAppointment = new CreateAppointmentService()
    const appointment = await createAppointment.execute({provider_id , date:parseDate})
    return response.json({appointment})
    }
    catch (err) {
        return response.status(400).json( {error : err.message})
    }
})

Appointmentroutes.get('/' , async (request, response) => {
    const AppointmentRepository =  getCustomRepository(AppointmentRepositorie)
    const appointment = await AppointmentRepository.find()

    return response.json(appointment)
})

export default Appointmentroutes;
