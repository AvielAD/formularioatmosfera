import { Router } from "express";
import * as CtrlCodigoDescuento from '../Controllers/codigodescuento.controller'
import * as CtrlJwt from '../Libs/middleware/auth/authjwt.middleware'
const router = Router()


router.get('/codigo', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlCodigoDescuento.GetCodigoDescuento)
router.post('/codigo', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlCodigoDescuento.AddCodigoDescuento)
router.delete('/codigo', [CtrlJwt.VerifyToken, CtrlJwt.isAdmin], CtrlCodigoDescuento.DeleteCurso )

export default router