import express from 'express'
import { Router, Request, Response } from 'express'

import { migrate } from './migrations/migrate';
import dotenv from 'dotenv'
import { userRoute } from './routes/user.routes';
import { favoriteRoute } from './routes/favorite.routes';

dotenv.config()
const app = express()
const route = Router()

migrate()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World' })
})

app.use('/users', userRoute)
app.use('/favorites', favoriteRoute)
app.use(route)
app.listen(process.env.PORT, () => console.log("heyy, api is listen on port: " + process.env.PORT))
