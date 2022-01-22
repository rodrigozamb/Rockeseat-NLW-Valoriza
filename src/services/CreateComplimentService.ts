import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"
import { UsersRepository } from "../repositories/UsersRepository"


interface IComplimentRequest{

    user_sender:string;
    user_receiver:string;
    message:string;
    tag_id:string;

}

class CreateComplimentService{

    async execute({tag_id,user_sender,user_receiver,message}:IComplimentRequest){
        
        const complimentsRepository = getCustomRepository(ComplimentsRepository)
        const usersRepository = getCustomRepository(UsersRepository)

        if(user_receiver === user_sender){
            throw new Error("User cant compliment itself")
        }

        const user_receiver_exists = await usersRepository.findOne(user_receiver);

        if(!user_receiver_exists){
            throw new Error("User receiver does not exists")
        }

        const compliment = complimentsRepository.create({
             tag_id,
             user_sender,
             user_receiver,
             message

        })

        await complimentsRepository.save(compliment)

        return compliment;


    }
}


export {CreateComplimentService}