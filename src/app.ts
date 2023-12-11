import express from 'express'
import Formularios from './Routes/forms.routes'
import Inscripcion from './Routes/instripcion.routes'
import Eventos from './Routes/evento.route'
import Cursos from './Routes/cursos.route'
import Codigo from './Routes/codigo.route'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/formularios', Formularios)
app.use('/inscripcion', Inscripcion)
app.use('/api', Eventos)
app.use('/api', Cursos)
app.use('/api', Codigo)

export default app