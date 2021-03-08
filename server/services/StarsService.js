import { dbContext } from "../db/DbContext"
import {BadRequest} from "../utils/Errors"

class StarsService{
    async create(newStar){
        return await dbContext.Stars.create(newStar)
      }


  async find(query = {}) {
      return await dbContext.Stars.find(query)
    }

    async findById(id) {
            let star = await dbContext.Stars.findById(id);
            if(!star){
                throw new BadRequest("Start does not exist in the Galactic Codex")
                }
         return star;
        }
    
}
     

export const starsService = new StarsService()