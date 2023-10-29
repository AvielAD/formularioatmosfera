import { Alumno } from "../../../Dtos/Inscripcion/Alumno";
import { PrismaClient} from '@prisma/client'
import moment from "moment";
import { ServerResponse } from "../../../Types/ServerResponse.type";
import * as repositoryCTRL from '../../Repositories/InscribirAlumno.repository'

const prisma = new PrismaClient();

export const InscribirAlumno = async (Alumno: Alumno): Promise<ServerResponse>=>{
    let codigoDescuento;
    let response: ServerResponse = { message: "", succeeded:false};
    try {
    
        //buscar eventocurso por ideventocurso obtener costo total
        if(Alumno.codigodescuento!=null && !await repositoryCTRL.HasCodigoDescuento(Alumno.codigodescuento)){
            response.message = "Codigo de descuento no valido"
            response.succeeded = false
            return response
        }
        else{
            const result = await repositoryCTRL.InscribirAlumno(Alumno);
            if(result){
                response.message = "Registro Correcto"
                response.succeeded = true
                return response
            }
            else{
                response.message = "Error en el registro"
                response.succeeded = false
                return response
            }

        }
    } catch (error) {
        response.message="Error en el registro"
        response.succeeded=false
        return response
    }
}