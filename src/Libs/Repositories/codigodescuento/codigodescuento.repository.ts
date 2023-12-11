import { PrismaClient } from "@prisma/client"
import { codigodescuento, codigodescuentoupdate } from "../../../Dtos/codigodescuento/codigodescuento.dto"

const prisma = new PrismaClient()

export const GetCodigoDescuento = async () => {
    try {
        const result = await prisma.codigodescuento.findMany()
        return result

    } catch (error) {
        return []
    }
}

export const AddCodigoDescuento = async (codigo: codigodescuento) => {

    try {
        const result = await prisma.codigodescuento.create({
            data: {
                nombre: codigo.nombre,
                codigo: codigo.codigo.toUpperCase(),
                descuento: codigo.descuento,
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


export const DeleteCodigoDescuento = async (id: number) => {
    
    try {
        const result = await prisma.codigodescuento.delete({
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

export const HasCodigoDescuento = async (idCodigo: number) => {
    try {
        const curso = await prisma.codigodescuento.findFirst({
            where: {
                id: idCodigo
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