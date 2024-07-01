import { Request, Response, Router } from "express";
import { bearerAuthentication } from "../middleware/middleware";
import { FavoriteController } from "../controllers/favorite.controller";
import { getUserIdByToken } from "../utils/getUserIdByToken";

const favoriteController = new FavoriteController();
export const favoriteRoutes = Router();

favoriteRoutes.use("/", bearerAuthentication);

favoriteRoutes.get("/list/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const favoriteList = await favoriteController.listFavoriteVideosByUserId({
      userId,
    });
    res.status(200).json({ favoriteList: favoriteList });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

favoriteRoutes.post("/add", async (req: Request, res: Response) => {
  try {
    const userId = getUserIdByToken(req.header("Authorization") ?? '')
    await favoriteController.addFavoriteVideo({ userId, videoId: req.body.videoId });
    res.status(200).json();
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

favoriteRoutes.delete("/remove", async (req: Request, res: Response) => {
  try {
    const userId = getUserIdByToken(req.header("Authorization") ?? '')
    await favoriteController.removeFavoriteVideo({ userId, videoId: req.body.videoId });
    res.status(200).json();
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
