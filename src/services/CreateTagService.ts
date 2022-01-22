import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepository"

class CreateTagService{


    async execute(name:string){

        const tagsRepository =  getCustomRepository(TagsRepository);
        if(!name){
            throw new Error("Invalid name");
        }

        const nameALreadyExists = await tagsRepository.findOne({name})
        if(nameALreadyExists){
            throw new Error("Tag Already Exists");
        }

        const tag = tagsRepository.create({
            name
        })
        await tagsRepository.save(tag)
        return tag;

    }

} 

export {CreateTagService}