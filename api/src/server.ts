import express from 'express'
import { Router, Request, Response } from 'express'

import { migrate } from './migrations/migrate';
import dotenv from 'dotenv'
import { userRoute } from './routes/user.routes';
import { favoriteRoute } from './routes/favorite.routes';
import { authRoute } from './routes/auth.routes';

dotenv.config()
const app = express()
const route = Router()

migrate()
app.use(express.json())

app.use('/auth', authRoute)
app.use('/users', userRoute)
app.use('/favorites', favoriteRoute)
app.use(route)
app.listen(process.env.PORT, () => console.log("heyy, api is listen on port: " + process.env.PORT))
