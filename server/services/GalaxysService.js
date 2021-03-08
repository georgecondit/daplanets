import { dbContext } from "../db/DbContext"
import {BadRequest} from "../utils/Errors"

class GalaxysService{


  async getAll() {
      return await dbContext.Galaxys.find()
    }
  async create(newGalaxy){
      return await dbContext.Galaxys.create(newGalaxy)
    }
}
export const galaxysService = new GalaxysService()
