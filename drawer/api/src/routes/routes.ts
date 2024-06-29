import { Request, Response, Router } from "express";

export const route = Router()

route.get('/count-favorites/:userId', (req: Request, res: Response) => {
    console.log(req.params.userId)
    res.json({ status: 200 })
})