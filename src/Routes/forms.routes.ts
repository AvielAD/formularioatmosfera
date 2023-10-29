import { Router } from "express";
import * as FormsCtrl from '../Controllers/forms.controller'
const router = Router()
//console.log('Abriendo routes.ts');

router.post('/inscribir', FormsCtrl.RegistrarAlumno)

export default router