import { Request, Response } from "express";
import { ListUserSentComplimentsService } from "../services/ListUserSentCompliments";

class ListUserSendComplimentsController{

    async handle(request:Request,response:Response){

        const listUserSendComplimentsService = new ListUserSentComplimentsService()
    
        const {user_id} = request
        const compliments = await listUserSendComplimentsService.execute(user_id)

        return response.json(compliments)

    }

}

export { ListUserSendComplimentsController }