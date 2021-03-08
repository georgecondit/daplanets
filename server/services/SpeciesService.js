import { dbContext } from "../db/DbContext"
import {BadRequest} from "../utils/Errors"

class SpeciesService{
    async create(newSpecie){
        return await dbContext.Species.create(newSpecie)
      }


  async find(query = {}) {
      return await dbContext.Species.find(query)
    }

    async findById(id) {
            let specie = await dbContext.Species.findById(id);
            if(!specie){
                throw new BadRequest("Speciet does not exist in the Galactic Codex")
                }
         return specie;
        }
    
}
     

export const speciesService = new SpeciesService()