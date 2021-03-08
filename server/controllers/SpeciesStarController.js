import express from "express";
import BaseController from "../utils/BaseController";
import { speciesStarService } from "../services/SpeciesStarService";

export class SpeciesStarController extends BaseController {
    constructor() {
        super("api/speciesStar");
        this.router
            .post("", this.create)
            .delete("/:id", this.delete)
    }

    async create(req, res, next) {
        try {
            res.send(await speciesStarService.create(req.body));
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await speciesStarService.delete(req.params.id));
        } catch (error) {
            next(error);
        }
    }
    async findSpeciesByStar(req, res, next) {
        try {
            res.send(await speciesStarService.)
        } catch (error) {
            next(error)
        }
    }
}