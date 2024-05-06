import {Request, Response} from 'express';
import {T} from "../libs/types/common";
import MemberService from '../models/Member.service';
import morgan from 'morgan';

const techonoMarketController : T = {};

techonoMarketController.goHome = (req: Request, res: Response) => {
    try{
        console.log("Go home");
        
        res.send("Home Page");
    } catch(err){
        console.log("Error, goHome", err);
    }
}

techonoMarketController.getLogin = (req: Request, res: Response) => {
    try{
        console.log("Go Login");
        res.send("Login Page");
    } catch(err){
        console.log("Error, getLogin", err);
    }
}

techonoMarketController.getSignup = (req: Request, res: Response) => {
    try{
        console.log("Go Signup");
        res.send("Signup Page");
    } catch(err){
        console.log("Error, getSignup", err);
    }
}

techonoMarketController.processLogin = (req: Request, res: Response) => {
    try{
        console.log("processLogin");
        res.send("Done");
    } catch(err){
        console.log("Error, processLogin", err);
    }
}

techonoMarketController.processSignup = (req: Request, res: Response) => {
    try{
        console.log("processSignup");
        res.send("Done");
    } catch(err){
        console.log("Error, processSignup", err);
    }
}

export default techonoMarketController;