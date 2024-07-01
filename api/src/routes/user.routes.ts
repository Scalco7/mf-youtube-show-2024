import { Router, Request, Response } from "express"
import { UserController } from "../controllers/user.controller"
import { User } from "../migrations/entities/user.entity"

const userController = new UserController()

export const userRoute = Router()

userRoute.get('/', async (req: Request, res: Response) => {
    const users = await User.findAll()
    res.json({ users: users })
})

userRoute.post('/', async (req: Request, res: Response) => {
    try {
        const user = await userController.createUser(req.body)
        res.status(200).json({ data: user });
    }
    catch (error) {
        res.status(400).json({ error: error })
    }
})