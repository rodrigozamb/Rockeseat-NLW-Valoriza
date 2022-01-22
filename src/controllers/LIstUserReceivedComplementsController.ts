import { Request, Response } from "express";
import { ListUserReceivedComplimentsService } from "../services/ListUserReceivedCompliments";

class ListUserReceivedComplimentsController{

    async handle(request:Request,response:Response){

        const listUserReceiverComplimentsService = new ListUserReceivedComplimentsService()
    
        const {user_id} = request
        const compliments = await listUserReceiverComplimentsService.execute(user_id)

        return response.json(compliments)

    }

}

export { ListUserReceivedComplimentsController }