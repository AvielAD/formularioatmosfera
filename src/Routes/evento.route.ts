import { Router } from "express";
import * as CtrlEventos from '../Controllers/evento.controller'
import * as CtrlJwt from '../Libs/middleware/auth/authjwt.middleware'
const router = Router()

router.get('/evento', [CtrlJwt.VerifyToken], CtrlEventos.GetEventoCursos)
router.post('/evento', [CtrlJwt.VerifyToken], CtrlEventos.AddEventoCurso)
router.put('/evento', [CtrlJwt.VerifyToken], CtrlEventos.UpdateEventoCurso)
router.delete('/evento', [CtrlJwt.VerifyToken], CtrlEventos.DeleteEventoCurso)

export default router