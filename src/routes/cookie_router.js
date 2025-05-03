import express from "express";
import { setCookie } from "../controllers/cookie_controller.js";

const cookieRouter = express.Router();

cookieRouter.post("/set", setCookie);
  

export default cookieRouter;