import {Request,Response} from "express"
import { ListUsersService } from "../services/ListUsersService";
import {classToPlain} from 'class-transformer'


class ListUsersController{

    async handle(){

        const listUsersService = new ListUsersService()

        const users = await listUsersService.execute()
        console.log(users)
        return classToPlain(users)
    }

}



export { ListUsersController}