import { PrismaClient } from "@prisma/client"
import { Curso } from "../../../Dtos/cursos/cursos.dto"
import { UpdateCursoDto } from "../../../Dtos/cursos/updatecurso.dto"
import { categoriasusuario } from "../../Enums/constantes.enum"
import { instructor } from "../../../Dtos/instructor/instructor.dto"

const prisma = new PrismaClient()

export const GetInstructores = async () => {
    try {
        const result = await prisma.usuario.findMany({
            where:{
                idcategoriausuario: categoriasusuario.Instructor
            },
            select:{
                id: true,
                nombre: true,
                apellido: true,
                email: true,
            }
        })
        return result

    } catch (error) {
        return []
    }
}

export const AddInstructor = async (inst: instructor) => {

    try {
        const result = await prisma.usuario.create({
            data: {
                nombre: inst.nombre,
                apellido: inst.apellido,
                idcategoriausuario: categoriasusuario.Instructor,
                email:inst.email
            }
        })
        if (result)
            return true
        else
            return false
    } catch (error) {
        console.log(error)
        return false
    }
}

export const HasInstructor = async (idinstructor: number) => {
    try {
        const curso = await prisma.usuario.findFirst({
            where: {
                AND:[
                    {id: idinstructor},
                    {idcategoriausuario: categoriasusuario.Instructor}
                ]
            }
        })
        if (curso)
            return true
        else
            return false
    } catch (error) {
        return false

    }
}