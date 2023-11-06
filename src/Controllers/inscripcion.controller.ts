import { Request, Response } from "express";
import { Alumno } from "../Dtos/Inscripcion/Alumno";
import * as CtrlRepository from "../Libs/Repositories/inscritos.repository";
//console.log('Abriendo controllers.ts');


export const ListInscritos = async (request: Request, response: Response) => {
    const Inscritos = await CtrlRepository.ListInscritos()

    response.status(200).json(Inscritos)
}

export const test = (request: Request, response: Response) => {
    console.log('Hola')
    response.json({ message: 'Mensaje ok test in controller' })
}