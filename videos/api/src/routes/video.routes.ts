import { Router, Request, Response } from "express";
import { VideosController } from "../controllers/video.controller";
import { verify } from "jsonwebtoken";
import { ITokenData, bearerAuthentication } from "../middleware/middleware";

const videoController = new VideosController();

export const videoRoute = Router();

videoRoute.use("/", bearerAuthentication);

videoRoute.get("/list/", async (req: Request, res: Response) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "") ?? "";
    const decoded = verify(
      token,
      process.env.JWT_SECRET_KEY!.toString(),
    ) as any as ITokenData;
    const videoTitle = req.query.title as string;
    const videos = await videoController.searchYoutubeVideos({
      userId: decoded.id,
      videoTitle,
    });
    res.status(200).json({ videos: videos });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
