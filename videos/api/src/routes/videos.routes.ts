import { Router, Request, Response } from "express";
import { Controller } from "../controllers/controller";

const videosController = new Controller()

export const videosRoute = Router()

videosRoute.get('/list', async (req: Request, res: Response) => {
    try {
        const videos = videosController.searchYoutubeVideos(req.body)
        res.json({ status: 200, videos: videos })
    }
    catch (error) {
        res.json({ status: 400, error: error })
    }
})