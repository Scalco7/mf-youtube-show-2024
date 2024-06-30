import { Request, Response, Router } from "express";
import { bearerAuthentication } from "../middleware/middleware";
import { FavoriteController } from "../controllers/favorite.controller";

const favoriteController = new FavoriteController()

export const favoriteRoutes = Router()

favoriteRoutes.use("/", bearerAuthentication)

favoriteRoutes.get('/list/:userId', async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const favoriteList = await favoriteController.listFavoriteVideosByUserId({ userId })
        res.json({ status: 200, favoriteList: favoriteList })
    } catch (error) {
        res.json({ status: 400, error: error })
    }
})

favoriteRoutes.post('/add', async (req: Request, res: Response) => {
    try {
        await favoriteController.addFavoriteVideo(req.body)
        res.json({ status: 200 })
    } catch (error) {
        res.json({ status: 400, error: error })
    }
})

favoriteRoutes.delete('/remove', async (req: Request, res: Response) => {
    try {
        await favoriteController.removeFavoriteVideo(req.body)
        res.json({ status: 200 })
    } catch (error) {
        res.json({ status: 400, error: error })
    }
})