import express from "express";
import BaseController from "../utils/BaseController";
import { speciesService } from "../services/SpeciesService"


export class SpeciesController extends BaseController{

    
        constructor() {
          super("api/species");
          this.router
            .get("", this.getAll)
            .post("", this.create)
        }

        async getAll(req, res, next) {
            try {
                res.send(await speciesService.find(req.body))
           
            } catch (error) {
            next(error);
            }
        }

        async create(req, res, next) {
            try {
                res.send(201, await speciesService.create(req.body))
            } catch (error) {
                next(error)
            }
        }

}