import MoonSchema from "../models/Moon";
import PlanetSchema from "../models/Planet";
import SpecieSchema from "../models/Specie";
import StarSchema from "../models/Star";
import GalaxySchema from "../models/Galaxy";
import SpeciesPlanetSchema from "../models/SpeciesPlanet";
import PlanetStarsSchema from "../models/PlanetStars";
// import MoonsPlanetSchema from "../models/MoonsPlanet";
// import SpeciesStarSchema from "../models/SpeciesStar";
import mongoose from "mongoose";

class DbContext {
  Galaxys = mongoose.model("galaxy", GalaxySchema);
  Stars = mongoose.model("star", StarSchema);
  Species = mongoose.model("species", SpecieSchema);
  Planets = mongoose.model("Planet", PlanetSchema);
  Moons = mongoose.model("moon", MoonSchema);
  SpeciesPlanets = mongoose.model("speciesPlanet", SpeciesPlanetSchema);
  PlanetsStar = mongoose.model("planetStars", PlanetStarsSchema);
  // MoonsPlanet = mongoose.model("speciesPlanet", MoonsPlanetSchema);
}
export const dbContext = new DbContext();
