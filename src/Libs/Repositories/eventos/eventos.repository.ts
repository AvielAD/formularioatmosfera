import { PrismaClient } from "@prisma/client"
import { EventoCurso, EventoCursoUpdate } from "../../../Dtos/eventocurso/eventocurso.dto"

const prisma = new PrismaClient()

export const GetEventoCursos = async ()=>{
    try {
        const result = await prisma.eventocurso.findMany()
        return result
    } catch (error) {
        return []
    }
}

export const AddEventoCurso= async(eventocurso:EventoCurso)=>{

    try {
        const result = await prisma.eventocurso.create({
            data: {
                idcurso: eventocurso.idcurso,
                fechainiciopromocion: eventocurso.fechainiciopromocion,
                fechafinpromocion: eventocurso.fechafinpromocion,
                fechainicio: eventocurso.fechainicio
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

export const UpdateEventoCurso = async(eventocurso:EventoCursoUpdate)=>{

    try {
        const result = await prisma.eventocurso.update({
            where: {
                id: eventocurso.id
            },
            data: {
                idcurso: eventocurso.idcurso,
                fechainiciopromocion: eventocurso.fechainiciopromocion,
                fechafinpromocion: eventocurso.fechafinpromocion,
                fechainicio: eventocurso.fechainicio
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

export const DeleteEventoCurso = async(id: number)=>{
    
    try {
        const result = await prisma.eventocurso.delete({
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


export const HasEventoCurso = async (idevento: number) => {
    try {
        const evento = await prisma.eventocurso.findFirst({
            where: {
                id: idevento
            }
        })
        if (evento)
            return true
        else
            return false
    } catch (error) {
        return false

    }
}