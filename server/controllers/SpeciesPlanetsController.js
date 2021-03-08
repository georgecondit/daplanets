import express from "express";
import BaseController from "../utils/BaseController";
import { speciesPlanetsService } from "../services/SpeciesPlanetsService";

export class SpeciesPlanetsController extends BaseController {
    constructor() {
        super("api/speciesPlanets");
        this.router
            .get("/:id", this.findSpeciesByPlanet)
            .post("", this.create)
            .delete("/:id", this.delete)
    }

    async create(req, res, next) {
        try {
            res.send(201, await speciesPlanetsService.create(req.body));
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await speciesPlanetsService.delete(req.params.id));
        } catch (error) {
            next(error);
        }
    }
    async findSpeciesByPlanet(req, res, next) {
        try {
            res.send(speciesPlanetsService.find({planet: req.params.id}) )
        } catch (error) {
            next(error)
        }
    }
}