import express from 'express'
import { Router, Request, Response } from 'express'

import { User } from './migrations/entities/user.entity';
import { migrate } from './migrations/migrate';

const app = express()
const route = Router()

migrate()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World' })
})

route.get('/users', async (req: Request, res: Response) => {
    const users = await User.findAll()
    res.json({ users: users })
})

route.post('/user', async (req: Request, res: Response) => {
    const user = await User.create(req.body);
    res.json(user);
})

app.use(route)

const PORT = 3030

app.listen(PORT, () => console.log("heyy, api is listen on port: " + PORT))
