import { Request, Response } from "express";
import { Alumno } from "../Dtos/Inscripcion/Alumno";
import * as CtrlRepository from "../Libs/Repositories/inscritos.repository";
//console.log('Abriendo controllers.ts');


export const ListInscritos = async (request: Request, response: Response) => {
    const Inscritos = await CtrlRepository.ListInscritos()

    response.status(200).json(Inscritos)
}

export const GetInscritoById = async (req: Request, res: Response) => {
    const id:string = String( req.query.id) ?? "0"

    const result = await CtrlRepository.GetInscritoById(id);
    if (result != null)
        res.status(200).json(result)
    else
        res.status(400).json(result)
}