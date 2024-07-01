import { Router, Request, Response } from "express";
import { FavoriteController } from "../controllers/favorite.controller";
import { bearerAuthentication } from "../middleware/middleware";

const favoriteController = new FavoriteController();
export const favoriteRoute = Router();

favoriteRoute.use("/", bearerAuthentication);

favoriteRoute.get("/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const favoriteList = await favoriteController.listFavoriteByUserId({
      userId,
    });
    res.status(200).json({ favorites: favoriteList });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

favoriteRoute.post("/add", async (req: Request, res: Response) => {
  try {
    await favoriteController.addFavoriteVideo(req.body);
    res.status(200);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

favoriteRoute.delete("/remove", async (req: Request, res: Response) => {
  try {
    await favoriteController.removeFavoriteVideo(req.body);
    res.status(200);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
