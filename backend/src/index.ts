import express from 'express'

import Appointmentroutes from './routes/Appointment.routes'
import Usertroutes from './routes/User.routes'
import Authroutes from './routes/Session.routes'
import Auth from './middleware/auth'
import multerConfig from './config/multer'
import path from 'path'

import 'reflect-metadata'
import './database'

const app = express()
const PORT = 3333

app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname ,'..','temp')))
app.use( '/session' , Authroutes)
app.use('/appointment',Auth, Appointmentroutes)
app.use( '/users' ,Auth, Usertroutes)


app.listen( 3333,() => console.log('Server run in port'+ PORT))
