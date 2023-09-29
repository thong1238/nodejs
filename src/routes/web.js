import express from "express";
import {home, guess} from "../controllers/homeController";

const router = express.Router();

const initWebRoutes = (app) =>{
    router.get('/', home)
    router.get('/guess', guess)

    return app.use('/', router)
}


export default initWebRoutes