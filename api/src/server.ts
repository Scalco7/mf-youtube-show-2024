import express from 'express'
import { Router, Request, Response } from 'express'

import { User } from './migrations/entities/user.entity';
import { migrate } from './migrations/migrate';
import dotenv from 'dotenv'
import { UserController } from './controllers/user.controller';
import { AuthController } from './controllers/auth.controller';
import { FavoriteController } from './controllers/favorite.controller';

dotenv.config()
const app = express()
const route = Router()
const userController = new UserController()
const authController = new AuthController()
const favoriteController = new FavoriteController()

migrate()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World' })
})

route.get('/users', async (req: Request, res: Response) => {
    const users = await User.findAll()
    res.json({ users: users })
})

route.get('/favorites/:userId', async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const favoriteList = await favoriteController.listFavoriteByUserId({ userId })
        res.json({ status: 200, favorites: favoriteList })
    } catch (error) {
        res.json({ status: 400, error: error })
    }
})

route.post('/favorites/add', async (req: Request, res: Response) => {
    try {
        await favoriteController.addFavoriteVideo(req.body)
        res.json({ status: 200 })
    } catch (error) {
        res.json({ status: 400, error: error })
    }
})

route.delete('/favorites/remove', async (req: Request, res: Response) => {
    try {
        await favoriteController.removeFavoriteVideo(req.body)
        res.json({ status: 200 })
    } catch (error) {
        res.json({ status: 400, error: error })
    }
})

route.post('/user', async (req: Request, res: Response) => {
    try {
        const user = await userController.createUser(req.body)
        res.json({ status: 200, data: user });
    }
    catch (error) {
        res.json({ status: 400, error: error })
    }
})


app.use(route)
app.listen(process.env.PORT, () => console.log("heyy, api is listen on port: " + process.env.PORT))
