import { Request, Response } from "express";
import * as CtrlService from '../Libs/Services/cursos/cursos.service'

export const GetCursos = async (req: Request, res: Response) => {
    const result = await CtrlService.GetCursos()

    res.status(200).json(result)
}

export const AddCursos = async (req: Request, res: Response) => {

    res.status(200).json({})
}

export const UpdateCursos = async (req: Request, res: Response) => {

    res.status(200).json({})
}

export const DeleteCursos = async (req: Request, res: Response) => {

    res.status(200).json({})
}

