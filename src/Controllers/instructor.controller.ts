import { Request, Response } from "express";
import * as CtrlService from '../Libs/Services/instructor/instructor.service'
import { Curso } from "../Dtos/cursos/cursos.dto";
import { ServerResponse } from "../Types/ServerResponse.type";
import { UpdateCursoDto } from "../Dtos/cursos/updatecurso.dto";
import { instructor } from "../Dtos/instructor/instructor.dto";

export const GetInstructor = async (req: Request, res: Response) => {
    const result = await CtrlService.GetInstructores()

    res.status(200).json(result)
}

export const AddInstructor = async (req: Request, res: Response) => {
    const newCurso: instructor = req.body

    const result = await CtrlService.AddInstructor(newCurso);
    if (result != null && result.succeeded)
        res.status(200).json(result)
    else
        res.status(400).json(result)

}
