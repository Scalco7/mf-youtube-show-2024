import { Router, Request, Response } from "express"
import { UserController } from "../controllers/user.controller"
import { User } from "../migrations/entities/user.entity"

export const userRoute = Router()
const userController = new UserController()

userRoute.get('/', async (req: Request, res: Response) => {
    const users = await User.findAll()
    res.json({ users: users })
})

userRoute.post('/', async (req: Request, res: Response) => {
    try {
        const user = await userController.createUser(req.body)
        res.json({ status: 200, data: user });
    }
    catch (error) {
        res.json({ status: 400, error: error })
    }
})