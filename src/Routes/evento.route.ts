import { Router } from "express";
import * as CtrlEventos from '../Controllers/evento.controller'
import * as CtrlJwt from '../Libs/middleware/auth/authjwt.middleware'
const router = Router()

router.get('/eventos', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlEventos.GetEventoCursos)
router.post('/eventos', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlEventos.AddEventoCursos)
router.put('/eventos', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlEventos.UpdateEventoCursos)
router.delete('/eventos', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlEventos.DeleteEventoCursos)

export default router