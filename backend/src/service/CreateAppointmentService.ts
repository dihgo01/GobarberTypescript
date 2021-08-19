import Appointment from "../model/Appointment";
import AppointmentRepositorie from "../repositorie/AppointmentRepositorie";
import { getCustomRepository } from 'typeorm'
import { startOfHour } from 'date-fns'

interface RequestDTO {
    provider: String;
    date: Date;
}
class CreateAppointmentService {

    public async execute({provider , date }: RequestDTO ): Promise< Appointment >{
        const appointmentRepository = getCustomRepository(AppointmentRepositorie)

        const startHour = startOfHour(date)
        const findAppointmentInSameDay = await appointmentRepository.findByAppointment(startHour)

        if (findAppointmentInSameDay) {
            throw Error ('This appointment is already booked')
        }

        const appointment = appointmentRepository.create({ provider, date: startHour })

        await appointmentRepository.save( appointment);

        return appointment
    }
}
export default CreateAppointmentService
