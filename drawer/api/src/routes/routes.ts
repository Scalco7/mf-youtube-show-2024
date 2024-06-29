import { Request, Response, Router } from "express";
import { Controller } from "../controllers/controller";

const controller = new Controller()

export const route = Router()

route.get('/count-favorites/:userId', async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const count = await controller.countFavoritesByUserId({ userId })
        res.json({ status: 200, favoritesCount: count })
    } catch (error) {
        res.json({ status: 400, error: error })
    }
})