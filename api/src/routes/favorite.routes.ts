import { Router, Request, Response } from "express"
import { FavoriteController } from "../controllers/favorite.controller"

const favoriteController = new FavoriteController()
export const favoriteRoute = Router()

favoriteRoute.get('/:userId', async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const favoriteList = await favoriteController.listFavoriteByUserId({ userId })
        res.json({ status: 200, favorites: favoriteList })
    } catch (error) {
        res.json({ status: 400, error: error })
    }
})

favoriteRoute.post('/add', async (req: Request, res: Response) => {
    try {
        await favoriteController.addFavoriteVideo(req.body)
        res.json({ status: 200 })
    } catch (error) {
        res.json({ status: 400, error: error })
    }
})

favoriteRoute.delete('/remove', async (req: Request, res: Response) => {
    try {
        await favoriteController.removeFavoriteVideo(req.body)
        res.json({ status: 200 })
    } catch (error) {
        res.json({ status: 400, error: error })
    }
})