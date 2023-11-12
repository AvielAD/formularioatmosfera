import { PrismaClient } from "@prisma/client"
import { Curso } from "../../../Dtos/cursos/cursos.dto"
import { UpdateCursoDto } from "../../../Dtos/cursos/updatecurso.dto"

const prisma = new PrismaClient()

export const GetCursos = async () => {
    try {
        const result = await prisma.curso.findMany()
        return result

    } catch (error) {
        return []
    }
}

export const AddCurso = async (curso: Curso) => {

    try {
        const result = await prisma.curso.create({
            data: {
                nombre: curso.nombre,
                descripcion: curso.descripcion,
                temario: curso.temario,
                costo: curso.costo
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

export const UpdateCurso = async (curso: UpdateCursoDto) => {

    try {
        const result = await prisma.curso.update({
            where: {
                id: curso.id
            },
            data: {
                nombre: curso.nombre,
                descripcion: curso.descripcion,
                temario: curso.temario,
                costo: curso.costo
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

export const DeleteCurso = async (id: number) => {
    
    try {
        const result = await prisma.curso.delete({
            where: {
                id: id
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

export const HasCurso = async (idCurso: number) => {
    try {
        const curso = await prisma.curso.findFirst({
            where: {
                id: idCurso
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