import { Router } from "express";
import * as CtrlEventos from '../Controllers/evento.controller'
import * as CtrlJwt from '../Libs/middleware/auth/authjwt.middleware'
const router = Router()

router.get('/evento', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlEventos.GetEventoCursos)
router.post('/evento', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlEventos.AddEventoCurso)
router.put('/evento', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlEventos.UpdateEventoCurso)
router.delete('/evento', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlEventos.DeleteEventoCurso)

export default router