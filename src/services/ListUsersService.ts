import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

class ListUsersService{


    async execute(){

        const usersRepository =  getCustomRepository(UsersRepository);

        const users = await usersRepository.find()

        return users

    }

} 

export {ListUsersService}