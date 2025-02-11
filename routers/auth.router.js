import { Router } from "express";
import authController from "../controllers/auth.controller.js";


const authRouter = Router();

authRouter.route('/auth/login')
          .get(authController.loginGet)
          .post(authController.loginPost);

authRouter.route('/auth/register')
          .get(authController.registerGet)
          .post(authController.registerPost);

authRouter.route('/auth/logout')
          .get(authController.logout);

export default authRouter;