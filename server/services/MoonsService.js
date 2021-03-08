import { dbContext } from "../db/DbContext"
import {BadRequest} from "../utils/Errors"

class MoonsService{
    async create(newMoon){
        return await dbContext.Moons.create(newMoon)
      }


  async find(query = {}) {
      return await dbContext.Moons.find(query)
    }

    async findById(id) {
            let moon = await dbContext.Moons.findById(id);
            if(!moon){
                throw new BadRequest("Moon does not exist in the Galactic Codex")
                }
         return moon;
        }
    
}
     

export const moonsService = new MoonsService()