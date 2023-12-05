import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient

export const ListInscritos = async ()=>{
    try {
        const inscritos = await prisma.informacioninscritos.findMany()

        return inscritos
    } catch (error) {
        return []
    }
}

export const GetInscritoById= async (id: string)=>{
    try {
        const inscrito = await prisma.eventosview.findFirst({
            where:{
                uuid: id
            }
        })
        return inscrito
    } catch (error) {
        return null
    }
}