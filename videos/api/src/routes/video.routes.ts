import { Router, Request, Response } from "express";
import { VideosController } from "../controllers/video.controller";
import { bearerAuthentication } from "../middleware/middleware";
import { getUserIdByToken } from "../utils/getUserIdByToken";

const videoController = new VideosController();

export const videoRoute = Router();

videoRoute.use("/", bearerAuthentication);

videoRoute.get("/list/", async (req: Request, res: Response) => {
  try {
    const userId = getUserIdByToken(req.header("Authorization") ?? '')
    const videoTitle = req.query.title as string;
    const nextPageToken = req.query.nextPageToken as string | undefined;
    const videos = await videoController.searchYoutubeVideos({ userId, videoTitle, nextPageToken });
    res.status(200).json(videos);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

videoRoute.get("/favorites", async (req: Request, res: Response) => {
  try {
    const userId = getUserIdByToken(req.header("Authorization") ?? '')
    const videos = await videoController.listFavoriteVideos(userId);
    res.status(200).json({ videos: videos });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
