import { Router } from "express";
import * as CtrlCursos from '../Controllers/cursos.controller'
import * as CtrlJwt from '../Libs/middleware/auth/authjwt.middleware'
const router = Router()

router.get('/curso', [CtrlJwt.VerifyToken], CtrlCursos.GetCursos)
router.post('/curso', [CtrlJwt.VerifyToken], CtrlCursos.AddCurso)
router.put('/curso', [CtrlJwt.VerifyToken], CtrlCursos.UpdateCurso)
router.delete('/curso', [CtrlJwt.VerifyToken], CtrlCursos.DeleteCurso)

export default router