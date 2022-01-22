import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";



class ListUserSentComplimentsService{



    async execute(user_id:string){

        const complimentRepository = getCustomRepository(ComplimentsRepository)

        const compliments = await complimentRepository.find({
            where:{
                user_sender:user_id
            }
        })
        return compliments;
    }


}


export {ListUserSentComplimentsService}