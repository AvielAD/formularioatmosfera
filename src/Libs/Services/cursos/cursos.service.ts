import { Curso } from '../../../Dtos/cursos/cursos.dto'
import { UpdateCursoDto } from '../../../Dtos/cursos/updatecurso.dto'
import { ServerResponse } from '../../../Types/ServerResponse.type'
import * as CtrlRepository from '../../Repositories/cursos/cursos.repository'

export const GetCursos = async () => {
    return await CtrlRepository.GetCursos()
}

export const AddCurso = async (curso: Curso) => {
    const response: ServerResponse = { message: "", succeeded: false }
    if (curso.nombre == null || curso.nombre === "") {
        response.message = "Campo nombre obligatorio"
        response.succeeded = false
        return response
    }
    else {
        var result = await CtrlRepository.AddCurso(curso)
        if (result) {
            response.message = "Curso agregado correctamente"
            response.succeeded = true
            return response
        }
        else {
            response.message = "Error al agregar el curso"
            response.succeeded = false
            return response
        }


    }

}

export const UpdateCurso = async (curso: UpdateCursoDto) => {
    const response: ServerResponse = { message: "", succeeded: false }
    if (curso.id == null && curso.id <= 0) {
        response.message = "Campo id es obligatorio"
        response.succeeded = false
        return response
    }
    else if (!await CtrlRepository.HasCurso(curso.id)) {
        response.message = "Curso no valido para actualizar"
        response.succeeded = false
        return response
    }
    else {
        var result = await CtrlRepository.UpdateCurso(curso)
        if (result) {
            response.message = "Curso actualizado correctamente"
            response.succeeded = true
            return response
        }
        else {
            response.message = "Error al actualizar el curso"
            response.succeeded = false
            return response
        }


    }
}

export const DeleteCurso = async (id: number) => {
    const response: ServerResponse = { message: "", succeeded: false }
    if (id == null && id <= 0) {
        response.message = "Campo id es obligatorio"
        response.succeeded = false
        return response
    }
    else if (!await CtrlRepository.HasCurso(id)) {
        response.message = "Curso no valido para borrar"
        response.succeeded = false
        return response
    }
    else {
        var result = await CtrlRepository.DeleteCurso(id)
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