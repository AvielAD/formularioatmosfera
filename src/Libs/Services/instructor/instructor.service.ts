import { UpdateCursoDto } from '../../../Dtos/cursos/updatecurso.dto'
import { instructor } from '../../../Dtos/instructor/instructor.dto'
import { ServerResponse } from '../../../Types/ServerResponse.type'
import * as CtrlRepository from '../../Repositories/instructores/instructor.repository'

export const GetInstructores = async () => {
    return await CtrlRepository.GetInstructores()
}

export const AddInstructor = async (inst: instructor) => {
    const response: ServerResponse = { message: "", succeeded: false }
    if (inst.nombre == null || inst.nombre === "") {
        response.message = "Campo nombre obligatorio"
        response.succeeded = false
        return response
    }
    else {
        var result = await CtrlRepository.AddInstructor(inst)
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
