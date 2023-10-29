import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import { Alumno } from "../Dtos/Inscripcion/Alumno";
import * as serviceCTRL from "../Libs/Services/Inscripcion/InscribirAlumno.service";
//console.log('Abriendo controllers.ts');

const prisma = new PrismaClient();

export const RegistrarAlumno = async (request: Request, response: Response) => {
    const AlumnoNuevo: Alumno = request.body;
    const hasNuevoAlumno = await serviceCTRL.InscribirAlumno(AlumnoNuevo)
    if(!hasNuevoAlumno.succeeded)
        response.status(400).json(hasNuevoAlumno)
    else
        response.status(200).json(hasNuevoAlumno)
}

export const test = (request: Request, response: Response) => {
    console.log('Hola')
    response.json({ message: 'Mensaje ok test in controller' })
}