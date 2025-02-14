import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import session from 'express-session';

import homeRouter from './routers/home.router.js';
import authRouter from './routers/auth.router.js';

//! Setup
const { NODE_ENV, PORT, COOKIE_SECRET, SESSION_SECRET } = process.env;

const app = express();
app.set('view engine', 'ejs');

//! App Middleware
//- Logger
app.use(morgan('tiny'));
//- Form data
app.use(express.urlencoded());
//- Cookie
app.use(cookieParser(COOKIE_SECRET));
//- Session
app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    //? En prod, ajouter 'store' avec un store compatible (package ou implémenté)
}));

//! Routing
app.use(homeRouter);
app.use(authRouter);

//! Demarrage du serveur
app.listen(PORT, () => {
    console.log(`Web server is running on port ${PORT} [${NODE_ENV}]`);
});