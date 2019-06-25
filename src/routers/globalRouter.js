import express from "express";
import { routes } from "../routes";
import {
  homeController,
  joinController,
  loginController,
  logoutController
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, homeController);

globalRouter.get(routes.join, joinController);

globalRouter.get(routes.login, loginController);

globalRouter.get(routes.logout, logoutController);


export default globalRouter;