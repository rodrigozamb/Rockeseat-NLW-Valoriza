import {Request, Response,NextFunction} from "express"
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

export async function ensureAdmin( request:Request, response:Response, next:NextFunction){


    const {user_id} = request

    const userRepository = getCustomRepository(UsersRepository)
    
    const user = await userRepository.findOne(user_id)


    if(user?.admin){
        return next();
    }

    return response.status(401).json({
        error:"Unauthorized User"
    })

} 