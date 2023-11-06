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