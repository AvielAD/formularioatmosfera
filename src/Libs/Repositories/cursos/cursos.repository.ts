import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const GetCursos = async ()=>{
    try {
        const result = await prisma.eventosview.findMany()
        return result

    } catch (error) {
        return []        
    }
}

export const AddCursos = ()=>{

}

export const UpdateCursos = ()=>{

}

export const DeleteCursos = ()=>{

}