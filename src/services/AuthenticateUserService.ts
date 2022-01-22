import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"
import {compare} from 'bcryptjs'
import {sign} from "jsonwebtoken"


interface IAuthenticateRequest{
    email:string;
    password:string;
}

class AuthenticateUserService{

    async execute({email,password}:IAuthenticateRequest){

        if(!email){
            throw new Error("Missing email field")
        }

        const usersRepository = getCustomRepository(UsersRepository)
        const user = await usersRepository.findOne({email})

        if(!user){
            throw new Error("Email/password Incorrect")
        }

        const passwordMatch = await compare(password,user.password)

        if(!passwordMatch){
            throw new Error("Email/password Incorrect")
        }

        const token = sign(
            {
                email:user.email
            },
            "c972f4c8aece0448523b9454bb0ff87c",
            {
                subject: user.id,
                expiresIn:"1d"
            }
        )

        return token;
    }


}


export {AuthenticateUserService}