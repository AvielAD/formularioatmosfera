import { Request, Response } from "express";
import * as CtrlService from '../Libs/Services/eventos/eventos.service'
import { EventoCurso, EventoCursoUpdate } from "../Dtos/eventocurso/eventocurso.dto";

export const GetEventoCursos = async (req: Request, res: Response) => {
    const result = await CtrlService.GetEventoCursos()

    res.status(200).json(result)
}

export const AddEventoCurso = async (req: Request, res: Response) => {
    const newCurso: EventoCurso = req.body

    const result = await CtrlService.AddEventoCurso(newCurso);
    if (result != null && result.succeeded)
        res.status(200).json(result)
    else
        res.status(400).json(result)

}

export const UpdateEventoCurso = async (req: Request, res: Response) => {
    const updateCurso: EventoCursoUpdate = req.body

    const result = await CtrlService.UpdateEventoCurso(updateCurso);
    if (result != null && result.succeeded)
        res.status(200).json(result)
    else
        res.status(400).json(result)
}

export const DeleteEventoCurso = async (req: Request, res: Response) => {
    const id:string = String( req.query.id) ?? "0"

    const IdCurso = parseInt(id)
    const result = await CtrlService.DeleteEventoCurso(IdCurso);
    if (result != null && result.succeeded)
        res.status(200).json(result)
    else
        res.status(400).json(result)
}

