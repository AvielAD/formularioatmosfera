import { Alumno } from "../../Dtos/Alumno";
import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export const InscribirAlumno = async (Alumno: Alumno)=>{
    try {
        const alumnoregistrado = await prisma.alumno.create({
            data: {
                nombre: Alumno.nombre,
                email: Alumno.email,
                apellidop : Alumno.apellidop,
                apellidom : Alumno.apellidom
            }
        })
    
        await prisma.eventocurso_alumno.create({
            data:{
                idalumno: alumnoregistrado.id,
                ideventocurso: Alumno.ideventocurso
            }
        })        

        return true
    } catch (error) {
        return false
    }


}