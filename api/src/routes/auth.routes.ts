import { Router, Request, Response } from "express";
import { AuthController } from "../controllers/auth.controller";

const authController = new AuthController();

export const authRoute = Router();

authRoute.post("/login", async (req: Request, res: Response) => {
  try {
    const token = await authController.login(req.body);
    res.status(200).json({ token: token });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
