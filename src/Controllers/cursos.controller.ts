import { Request, Response } from "express";
import * as CtrlService from '../Libs/Services/cursos/cursos.service'
import { Curso } from "../Dtos/cursos/cursos.dto";
import { ServerResponse } from "../Types/ServerResponse.type";
import { UpdateCursoDto } from "../Dtos/cursos/updatecurso.dto";

export const GetCursos = async (req: Request, res: Response) => {
    const result = await CtrlService.GetCursos()

    res.status(200).json(result)
}

export const AddCurso = async (req: Request, res: Response) => {
    const newCurso: Curso = req.body

    const result = await CtrlService.AddCurso(newCurso);
    if (result != null && result.succeeded)
        res.status(200).json(result)
    else
        res.status(400).json(result)

}

export const UpdateCurso = async (req: Request, res: Response) => {
    const updateCurso: UpdateCursoDto = req.body

    const result = await CtrlService.UpdateCurso(updateCurso);
    if (result != null && result.succeeded)
        res.status(200).json(result)
    else
        res.status(400).json(result)
}

export const DeleteCurso = async (req: Request, res: Response) => {
    const id:string = String( req.query.id) ?? "0"

    const IdCurso = parseInt(id)
    const result = await CtrlService.DeleteCurso(IdCurso);
    if (result != null && result.succeeded)
        res.status(200).json(result)
    else
        res.status(400).json(result)
}

