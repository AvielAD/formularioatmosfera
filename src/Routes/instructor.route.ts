import { Router } from "express";
import * as CtrlCursos from '../Controllers/instructor.controller'
import * as CtrlJwt from '../Libs/middleware/auth/authjwt.middleware'
const router = Router()

router.get('/instructor', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlCursos.GetInstructor)
router.post('/instructor', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlCursos.AddInstructor)

export default router