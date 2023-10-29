import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import { Alumno } from "../Dtos/Alumno";
import { InscribirAlumno } from "../Libs/Inscripcion/InscribirAlumno";
//console.log('Abriendo controllers.ts');

const prisma = new PrismaClient();

export const RegistrarAlumno = async (request: Request, response: Response) => {
    const AlumnoNuevo: Alumno = request.body;
    const hasNuevoAlumno = await InscribirAlumno(AlumnoNuevo)
    if(!hasNuevoAlumno)
        response.status(400).json({ Message: 'Registro Incorrecto' })
    else
        response.status(200).json({ Message: 'Registro Correcto' })
}

export const test = (request: Request, response: Response) => {
    console.log('Hola')
    response.json({ message: 'Mensaje ok test in controller' })
}