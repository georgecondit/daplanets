import { dbContext } from "../db/DbContext"
import {BadRequest} from "../utils/Errors"

class PlanetsService{
    async create(newPlanet){
        return await dbContext.Planets.create(newPlanet)
      }


  async find(query = {}) {
      return await dbContext.Planets.find(query)
    }

    async findById(id) {
            let planet = await dbContext.Planets.findById(id);
            if(!planet){
                throw new BadRequest("Planet does not exist in the Galactic Codex")
                }
         return planet;
        }
    
}
     

export const planetsService = new PlanetsService()