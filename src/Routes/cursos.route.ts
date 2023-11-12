import { Router } from "express";
import * as CtrlCursos from '../Controllers/cursos.controller'
import * as CtrlJwt from '../Libs/middleware/auth/authjwt.middleware'
const router = Router()

router.get('/curso', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlCursos.GetCursos)
router.post('/curso', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlCursos.AddCurso)
router.put('/curso', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlCursos.UpdateCurso)
router.delete('/curso', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlCursos.DeleteCurso)

export default router