import {Request,Response} from "express"
import { ListTagsService } from "../services/ListTagsService";



class ListTagsController{

    async handle(request:Request,response:Response){

        const createUserService = new ListTagsService()

        const user = await createUserService.execute()

        return response.json(user)
    }

}



export { ListTagsController}