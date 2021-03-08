import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SpeciesPlanetsService {
    async delete(id) {
        return await dbContext.SpeciesPlanets.findByIdAndDelete(id)
    }
    async create(body) {
        return await dbContext.SpeciesPlanets.create(body)
    }
    async find(query = {}) {
        return await dbContext.SpeciesPlanets.find(query).populate("species planets");
    }
    async findSpecieByPLanetId(id) {
        let SpeciePlanet = await dbContext.SpeciesPlanets.findById(id);
        if (!SpeciePlanet) {
          throw new BadRequest("That specie doesn't live on that planet");
        }
        return SpeciePlanet;
    }
}

export const speciesPlanetsService = new SpeciesPlanetsService();