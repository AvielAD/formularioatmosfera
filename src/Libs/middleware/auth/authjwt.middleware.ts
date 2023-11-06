import { Request, Response, NextFunction } from "express";
import jwt, {Secret} from 'jsonwebtoken'
import { ServerResponseDTO } from "../../../Dtos/ServerResponse/ServerResponse.dto";
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
    const serverresponse:ServerResponseDTO = {message:"", succeeded:false}
    try {
        //Verificar token valido
        const token =  req.headers['authorization']
        if(!token) 
            return res.status(401).json({message:"Unauthorized"});
        //if(SecretKeyPass!=="")
        const decode:any =jwt.verify(token, SecretKeyPass)
        //verificar usuario valido
        const response =await HasUserValid(decode.id)
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
    const serverresponse:ServerResponseDTO = {message:"", succeeded:false}
    const idcategory = req.body.idcategoriausuario
    //Buscar categoria usuario
    try {
        const categoryuser = await prisma.categoriausuario.findFirst({
            where:{
                id: idcategory 
            }
        })
        if(categoryuser!=null && categoryuser.id == CategoryUser.CAT001){
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
    const serverresponse:ServerResponseDTO = {message:"", succeeded:false}
    const idcategory = req.body.idcategoriausuario
    //Buscar categoria usuario
    try {
        const categoryuser = await prisma.categoriausuario.findFirst({
            where:{
                id: idcategory 
            }
        })
        if(categoryuser!=null && categoryuser.id == CategoryUser.CAT002){
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