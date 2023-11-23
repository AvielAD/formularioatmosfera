import express from 'express'
import Formularios from './Routes/forms.routes'
import Inscripcion from './Routes/instripcion.routes'
import Eventos from './Routes/evento.route'
import Cursos from './Routes/cursos.route'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use('/formularios', Formularios)
app.use('/inscripcion', Inscripcion)
app.use('/api', Eventos)
app.use('/api', Cursos)

export default app