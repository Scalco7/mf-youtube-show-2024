import { Request, Response, Router } from "express";
import { Controller } from "../controllers/controller";
import { bearerAuthentication } from "../middleware/middleware";
import favoriteWebsocket, { webSocket } from "../server";

const controller = new Controller();
export const route = Router();

route.get("/count-favorites/:userId", bearerAuthentication, async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const count = await controller.countFavoritesByUserId({ userId });
    res.status(200).json({ favoritesCount: count });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
