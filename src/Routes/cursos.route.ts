import { Router } from "express";
import * as CtrlCursos from '../Controllers/cursos.controller'
import * as CtrlJwt from '../Libs/middleware/auth/authjwt.middleware'
const router = Router()

router.get('/cursos', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlCursos.GetCursos)
router.post('/cursos', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlCursos.AddCursos)
router.put('/cursos', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlCursos.UpdateCursos)
router.delete('/cursos', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlCursos.DeleteCursos)

export default router