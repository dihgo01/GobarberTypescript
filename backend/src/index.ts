import express ,{ Request, Response, NextFunction }from 'express'
import 'express-async-errors'

import Appointmentroutes from './routes/Appointment.routes'
import Usertroutes from './routes/User.routes'
import Authroutes from './routes/Session.routes'
import Auth from './middleware/auth'
import multerConfig from './config/multer'
import AppError from './error/AppError'


import 'reflect-metadata'
import './database'

const app = express()
const PORT = 3333

app.use(express.json())
app.use('/file', express.static(multerConfig.directory))
app.use( '/session' , Authroutes)
app.use('/appointment',Auth, Appointmentroutes)
app.use( '/users' ,Auth, Usertroutes)


app.use((err: Error , request: Request, response: Response, next: NextFunction ) => {
    if( err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message
        })
    }

    console.error(err)
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

app.listen( 3333,() => console.log('Server run in port'+ PORT))
