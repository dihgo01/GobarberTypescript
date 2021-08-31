import Appointment from "../model/Appointment";
import AppointmentRepositorie from "../repositorie/AppointmentRepositorie";
import { getCustomRepository } from 'typeorm'
import { startOfHour } from 'date-fns'
import AppError from '../error/AppError'

interface RequestDTO {
    provider_id: string;
    date: Date;
}
class CreateAppointmentService {

    public async execute({provider_id , date }: RequestDTO ): Promise< Appointment >{
        const appointmentRepository = getCustomRepository(AppointmentRepositorie)

        const startHour = startOfHour(date)
        const findAppointmentInSameDay = await appointmentRepository.findByAppointment(startHour)

        if (findAppointmentInSameDay) {
            throw new AppError ('This appointment is already booked')
        }

        const appointment = appointmentRepository.create({ provider_id, date: startHour })

        await appointmentRepository.save( appointment);

        return appointment
    }
}
export default CreateAppointmentService
