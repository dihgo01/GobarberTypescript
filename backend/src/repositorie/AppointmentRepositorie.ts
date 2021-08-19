import Appointment from "../model/Appointment"
import { EntityRepository, Repository} from 'typeorm'

@EntityRepository(Appointment)

class AppointmentRepositorie extends Repository<Appointment>{

    public async findByAppointment(date: Date): Promise< Appointment | null> {

        const findAppointment = await this.findOne(
            {
                where: { date }
            }
        )

        return findAppointment || null

    }
}

export default AppointmentRepositorie
