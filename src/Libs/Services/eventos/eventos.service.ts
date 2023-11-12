import { EventoCurso, EventoCursoUpdate } from '../../../Dtos/eventocurso/eventocurso.dto'
import { ServerResponse } from '../../../Types/ServerResponse.type'
import * as CtrlRepository from '../../Repositories/eventos/eventos.repository'

export const GetEventoCursos = async () => {
    return await CtrlRepository.GetEventoCursos()
}

export const AddEventoCurso = async (eventocurso: EventoCurso) => {
    const response: ServerResponse = { message: "", succeeded: false }
    if (eventocurso.idcurso == null || eventocurso.idcurso <=0 ) {
        response.message = "Campo curso obligatorio"
        response.succeeded = false
        return response
    }
    else if(eventocurso.fechainicio == null ){
        response.message = "Campo fechainicio obligatorio"
        response.succeeded = false
        return response
 
    }
    else {
        var result = await CtrlRepository.AddEventoCurso(eventocurso)
        if (result) {
            response.message = "Evento agregado correctamente"
            response.succeeded = true
            return response
        }
        else {
            response.message = "Error al agregar el Evento"
            response.succeeded = false
            return response
        }


    }

}

export const UpdateEventoCurso = async (curso: EventoCursoUpdate) => {
    const response: ServerResponse = { message: "", succeeded: false }
    if (curso.id == null && curso.id <= 0) {
        response.message = "Campo id es obligatorio"
        response.succeeded = false
        return response
    }
    else if (!await CtrlRepository.HasEventoCurso(curso.id)) {
        response.message = "Curso no valido para actualizar"
        response.succeeded = false
        return response
    }
    else {
        var result = await CtrlRepository.UpdateEventoCurso(curso)
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

export const DeleteEventoCurso = async (id: number) => {
    const response: ServerResponse = { message: "", succeeded: false }
    if (id == null && id <= 0) {
        response.message = "Campo id es obligatorio"
        response.succeeded = false
        return response
    }
    else if (!await CtrlRepository.HasEventoCurso(id)) {
        response.message = "Curso no valido para borrar"
        response.succeeded = false
        return response
    }
    else {
        var result = await CtrlRepository.DeleteEventoCurso(id)
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