import { codigodescuento } from '../../../Dtos/codigodescuento/codigodescuento.dto'
import { ServerResponse } from '../../../Types/ServerResponse.type'
import * as CtrlRepository from '../../Repositories/codigodescuento/codigodescuento.repository'

export const GetCodigoDescuento = async () => {
    return await CtrlRepository.GetCodigoDescuento()
}

export const AddCodigoDescuento = async (codigo: codigodescuento) => {
    const response: ServerResponse = { message: "", succeeded: false }
    if (codigo.codigo == null || codigo.codigo === "") {
        response.message = "Campo nombre obligatorio"
        response.succeeded = false
        return response
    }
    else {
        var result = await CtrlRepository.AddCodigoDescuento(codigo)
        if (result) {
            response.message = "Codigo de descuento agregado correctamente"
            response.succeeded = true
            return response
        }
        else {
            response.message = "Error al agregar el Codigo de descuento"
            response.succeeded = false
            return response
        }


    }

}



export const DeleteCodigoDescuento = async (id: number) => {
    const response: ServerResponse = { message: "", succeeded: false }
    if (id == null && id <= 0) {
        response.message = "Campo id es obligatorio"
        response.succeeded = false
        return response
    }
    else if (!await CtrlRepository.HasCodigoDescuento(id)) {
        response.message = "Curso no valido para borrar"
        response.succeeded = false
        return response
    }
    else {
        var result = await CtrlRepository.DeleteCodigoDescuento(id)
        if (result) {
            response.message = "Curso borrado correctamente"
            response.succeeded = true
            return response
        }
        else {
            response.message = "Error al borrar el curso"
            response.succeeded = false
            return response
        }
    }
}