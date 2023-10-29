import express from 'express'
import Formularios from './Routes/forms.routes'
import cors from 'cors'

const app = express()
app.use(cors())

app.use(express.json())

app.use('/formularios', Formularios)

export default app