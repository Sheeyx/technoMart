import {Request, Response} from 'express';
import {T} from "../libs/types/common";

const techonoMarketController : T = {};

techonoMarketController.goHome = (req: Request, res: Response) => {
    try{
        res.send("Home Page");
    } catch(err){
        console.log("Error, goHome", err);
    }
}

techonoMarketController.getLogin = (req: Request, res: Response) => {
    try{
        res.send("Login Page");
    } catch(err){
        console.log("Error, getLogin", err);
    }
}

techonoMarketController.getSignup = (req: Request, res: Response) => {
    try{
        res.send("Signup Page");
    } catch(err){
        console.log("Error, getSignup", err);
    }
}

export default techonoMarketController;