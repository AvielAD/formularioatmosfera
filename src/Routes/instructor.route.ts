import { Router } from "express";
import * as CtrlCursos from '../Controllers/instructor.controller'
import * as CtrlJwt from '../Libs/middleware/auth/authjwt.middleware'
const router = Router()

router.get('/instructor', [CtrlJwt.VerifyToken], CtrlCursos.GetInstructor)
router.post('/instructor', [CtrlJwt.VerifyToken], CtrlCursos.AddInstructor)

export default router