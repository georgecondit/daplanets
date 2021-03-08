import express from "express";
import BaseController from "../utils/BaseController";
import { galaxysService } from "../services/GalaxysService"


export class GalaxysController extends BaseController{

    
        constructor() {
          super("api/galaxys");
          this.router
            .get("", this.getAll)
            .post("", this.create)
        }
        async create(req, res, next) {
            try {
                let car = await galaxysService.create(req.body)
            res.send(car);
            } catch (error) {
                next(error)
            }
            
        }

        async getAll(req, res, next) {
            try {
                let galaxy = await galaxysService.getAll()
            res.send(galaxy);
            } catch (error) {
            next(error);
            }
        }




}