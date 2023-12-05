import { Router } from "express";
import * as FormsCtrl from '../Controllers/inscripcion.controller'
import * as CtrlJwt from '../Libs/middleware/auth/authjwt.middleware'
const router = Router()
//console.log('Abriendo routes.ts');

router.get('/inscritos', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin],FormsCtrl.ListInscritos)
router.get('/inscritobyid', FormsCtrl.GetInscritoById)

export default router