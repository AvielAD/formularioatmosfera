import { Request, Response, NextFunction } from "express";
import jwt, {Secret} from 'jsonwebtoken'
import { ServerResponseDTOAuth } from "../dtos/ServerResponse.dto";
import {PrismaClient} from '@prisma/client'
import {CategoryUser} from '../enums/auth.enum'
const SecretKeyPass:Secret = process.env.KEYSECRET || ""
const prisma = new PrismaClient();

/**
 * Validar Usuario
 * Validar Token autenticacion
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const VerifyToken = async (req: Request, res: Response, next:NextFunction)=>{
    const serverresponse:ServerResponseDTOAuth = {message:"", succeeded:false}
    try {
        //Verificar token valido
        const token =  req.headers.authorization?.split(" ")[1]
        if(!token){
            serverresponse.message="No Autorizado"
            serverresponse.succeeded=false
            return res.status(401).json(serverresponse);
        }
        //if(SecretKeyPass!=="")
        const decode:any =jwt.verify(token, SecretKeyPass)
        //verificar usuario valido
        const response =await HasUserValid(decode.id)
        req.body.IdUser = decode.id

        if(response){
            next()
        }
        else{
            serverresponse.message= "No Autorizado"
            serverresponse.succeeded=false
            return res.status(401).json(serverresponse);
        }

    } catch (error) {
        serverresponse.message= "No Autorizado"
        serverresponse.succeeded=false
        return res.status(401).json(serverresponse);
    }
}

export const isAdmin =async (req:Request, res:Response, next: NextFunction)=>{
    const serverresponse:ServerResponseDTOAuth = {message:"", succeeded:false}
    const IdUser = req.body.IdUser
    //Buscar categoria usuario
    try {

        const user = await prisma.usuario.findFirst({
            where:{
                id: IdUser 
            }
        })
        if(user!=null && user.idcategoriausuario == CategoryUser.CAT001){
            next()
        }
        else{
            serverresponse.message= "No Autorizado"
            serverresponse.succeeded=false
            return res.status(401).json(serverresponse);
        }
            
    } catch (error) {
        serverresponse.message= "No Autorizado"
        serverresponse.succeeded=false
        return res.status(401).json(serverresponse);
    
    }
}

export const isModerator =async (req:Request, res:Response, next: NextFunction)=>{
    const serverresponse:ServerResponseDTOAuth = {message:"", succeeded:false}
    const IdUser = req.body.IdUser
    //Buscar categoria usuario
    try {
        const user = await prisma.usuario.findFirst({
            where:{
                id: IdUser 
            }
        })
        if(user!=null && user.id == CategoryUser.CAT002){
            next()
        }
        else{
            serverresponse.message= "No Autorizado"
            serverresponse.succeeded=false
            return res.status(401).json(serverresponse);
        }
            
    } catch (error) {
        serverresponse.message= "No Autorizado"
        serverresponse.succeeded=false
        return res.status(401).json(serverresponse);
    
    }
}


const HasUserValid = async(IdUsuario: number)=>{
    try {
        const searchUser = await prisma.usuario.findFirst({
            where:{
                id: IdUsuario
            }
        })
        if(searchUser!=null)
            return true
        else
            return false
    } catch (error) {
        return false
    }
}