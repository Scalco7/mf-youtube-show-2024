import { Request, Response, Router } from "express";
import { Controller } from "../controllers/controller";
import { bearerAuthentication } from "../middleware/middleware";

const controller = new Controller();

export const route = Router();

route.use("/", bearerAuthentication);

route.get("/count-favorites/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const count = await controller.countFavoritesByUserId({ userId });
    res.status(200).json({ favoritesCount: count });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
