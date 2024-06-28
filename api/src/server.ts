import express from 'express'
import { Router, Request, Response } from 'express'

import { User } from './migrations/entities/user.entity';
import { migrate } from './migrations/migrate';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { FavoriteService } from './services/favorite.service';
import dotenv from 'dotenv'
import { UserController } from './controllers/user.controller';

dotenv.config()
const app = express()
const route = Router()
const userController = new UserController()
const userService = new UserService()
const authService = new AuthService()
const favoriteService = new FavoriteService()

migrate()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World' })
})

route.get('/users', async (req: Request, res: Response) => {
    const users = await User.findAll()
    const userId = users[0].dataValues.id

    try {
        console.log(await userService.getUserNameById(userId))
        console.log(await authService.login('rafael12345@gmail.com', '123456'))

        console.log(await favoriteService.listFavoriteByUserId(userId))
    }
    catch (err) {
        console.log("erro - ", err)
    }

    res.json({ users: users })
})

route.post('/add-favorite', async (req: Request, res: Response) => {
    const users = await User.findAll()
    const userId = users[0].dataValues.id

    try {
        await favoriteService.addFavoriteVideo(userId, req.body.video_id)
    } catch (err) {
        console.log("erro - ", err)
    }

    res.json({ favorites: await favoriteService.listFavoriteByUserId(userId) })
})

route.delete('/remove-favorite', async (req: Request, res: Response) => {
    const users = await User.findAll()
    const userId = users[0].dataValues.id

    try {
        await favoriteService.removeFavoriteVideo(userId, req.body.video_id)
    } catch (err) {
        console.log("erro - ", err)
    }

    res.json({ favorites: await favoriteService.listFavoriteByUserId(userId) })
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
