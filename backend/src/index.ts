import express from 'express'

import Appointmentroutes from './routes/Appointment.routes'
import Usertroutes from './routes/User.routes'
import Authroutes from './routes/Session.routes'

import 'reflect-metadata'
import './database'

const app = express()
const PORT = 3333

app.use(express.json())
app.use('/appointment', Appointmentroutes)
app.use( '/users' , Usertroutes)
app.use( '/session' , Authroutes)

app.listen( 3333,() => console.log('Server run in port'+ PORT))
