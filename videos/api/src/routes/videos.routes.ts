import { Router, Request, Response } from "express";
import { VideosController } from "../controllers/videos.controller";
import { verify } from "jsonwebtoken";
import { ITokenData, bearerAuthentication } from "../middleware/middleware";

const videosController = new VideosController()

export const videosRoute = Router()

videosRoute.use('/', bearerAuthentication)

videosRoute.get('/list/', async (req: Request, res: Response) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '') ?? ''
        const decoded = verify(token, process.env.JWT_SECRET_KEY!.toString()) as any as ITokenData
        const videoTitle = req.query.title as string
        const videos = await videosController.searchYoutubeVideos({ userId: decoded.id, videoTitle })
        res.json({ status: 200, videos: videos })
    }
    catch (error) {
        res.json({ status: 400, error: error })
    }
})