import express from 'express';
const routerAdmin = express.Router();
import technomarket from './controllers/technomarket.controller';

/* TexnoMart */
routerAdmin.get('/', technomarket.goHome);

routerAdmin
.get('/login', technomarket.getLogin)
.post('/login', technomarket.processLogin);

routerAdmin
.get('/signup', technomarket.getSignup)
.post('/signup', technomarket.processSignup);

/* Product */
/* User */
export default routerAdmin;