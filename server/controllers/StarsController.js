import express from "express";
import BaseController from "../utils/BaseController";
import { starsService } from "../services/StarsService"
import { PlanetStars } from "mongoose";


export class StarsController extends BaseController{

        constructor() {
          super("api/stars");
          this.router
            .get("", this.getAll)
            get("/:planet", this.getPlanetByStar)
            .post("", this.create)
        }

        async getAll(req, res, next) {
            try {
                res.send(await starsService.find(req.query))
            } catch (error) {
            next(error);
            }
        }
        async create(req, res, next) {
            try {
                res.send(201, await starsService.create(req.body))
            } catch (error) {
                next(error)
            }
        }
        async getAllPlanetsByStarId(req, res, next) {
            try {
              res.send(await PlanetStarService.find({ classroom: req.params.id }));
            } catch (error) {
              next(error);
            }
          }
        
}