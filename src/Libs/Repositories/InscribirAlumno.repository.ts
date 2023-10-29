import { Alumno } from "../../Dtos/Inscripcion/Alumno";
import { PrismaClient } from '@prisma/client'
import moment from "moment";
const prisma = new PrismaClient();
export const InscribirAlumno = async (Alumno: Alumno): Promise<boolean> => {
    let codigodescuento;
    let costoTotal: number=5000;
    try {
        const alumnoregistrado = await prisma.alumno.create({
            data: {
                nombre: Alumno.nombre,
                email: Alumno.email,
                apellidop: Alumno.apellidop,
                apellidom: Alumno.apellidom
            }
        })

        //buscar eventocurso por ideventocurso obtener costo total
        const evento_curso = await prisma.eventocurso.findFirst({
            where: {
                id: Alumno.ideventocurso
            },
            include: {
                curso: true,
            }
        });
        if(evento_curso!=null && evento_curso.curso!=null)
            costoTotal = Number(evento_curso.curso.costo)

        //buscar codigo descuento obtener descuento
        if (Alumno.codigodescuento != null && evento_curso?.curso!= null){
            codigodescuento = await prisma.codigodescuento.findFirst({
                where: {
                    codigo: Alumno.codigodescuento
                },

            })

            costoTotal = Number(evento_curso.curso.costo) - Number(codigodescuento?.descuento)
        }
        //console.log(codigodescuento)
        //asignar campo costo en eventocursoalumno total curso - descuento

        if (evento_curso != null && evento_curso.curso != null) {

            
            const fechaHoy = moment()
            await prisma.eventocurso_alumno.create({
                data: {
                    idalumno: alumnoregistrado.id,
                    ideventocurso: Alumno.ideventocurso,
                    idcodigodescuento: codigodescuento?.id,
                    costo: costoTotal,
                    fechainscripcion: fechaHoy.toDate()

                }
            })

        }

        return true
    } catch (error) {
        return false
    }


}

export const HasCodigoDescuento = async (CodigoDescuento: string): Promise<boolean> => {
    const codigodescuento = await prisma.codigodescuento.findFirst({
        where: {
            codigo: CodigoDescuento
        }
    })
    //console.log('HasCodigoDescuento '+codigodescuento)
    if (codigodescuento != null)
        return true
    else
        return false
};