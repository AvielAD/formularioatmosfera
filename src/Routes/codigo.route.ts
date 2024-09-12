import { Router } from "express";
import * as CtrlCodigoDescuento from '../Controllers/codigodescuento.controller'
import * as CtrlJwt from '../Libs/middleware/auth/authjwt.middleware'
const router = Router()


router.get('/codigo', [CtrlJwt.VerifyToken], CtrlCodigoDescuento.GetCodigoDescuento)
router.post('/codigo', [CtrlJwt.VerifyToken], CtrlCodigoDescuento.AddCodigoDescuento)
router.delete('/codigo', [CtrlJwt.VerifyToken], CtrlCodigoDescuento.DeleteCurso )

export default router