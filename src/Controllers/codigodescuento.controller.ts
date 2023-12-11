import { Request, Response } from "express";
import * as CtrlService from '../Libs/Services/codigodescuento/codigodescuento.service'
import { codigodescuento } from "../Dtos/codigodescuento/codigodescuento.dto";

export const GetCodigoDescuento = async (req: Request, res: Response) => {
    const result = await CtrlService.GetCodigoDescuento()

    res.status(200).json(result)
}

export const AddCodigoDescuento = async (req: Request, res: Response) => {
    const newCurso: codigodescuento = req.body

    const result = await CtrlService.AddCodigoDescuento(newCurso);
    if (result != null && result.succeeded)
        res.status(200).json(result)
    else
        res.status(400).json(result)

}

export const DeleteCurso = async (req: Request, res: Response) => {
    const id:string = String( req.query.id) ?? "0"

    const IdCurso = parseInt(id)
    const result = await CtrlService.DeleteCodigoDescuento(IdCurso);
    if (result != null && result.succeeded)
        res.status(200).json(result)
    else
        res.status(400).json(result)
}

