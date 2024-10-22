import express from 'express'
import { Router } from 'express'

import { migrate } from './migrations/migrate';
import dotenv from 'dotenv'
import { userRoute } from './routes/user.routes';
import { favoriteRoute } from './routes/favorite.routes';
import { authRoute } from './routes/auth.routes';
import cors from 'cors';

dotenv.config()
const app = express()
const route = Router()

migrate()
app.use(express.json())
app.use(cors())

app.use('/auth', authRoute)
app.use('/users', userRoute)
app.use('/favorites', favoriteRoute)
app.use(route)
app.listen(process.env.PORT, () => console.log("heyy, api is listen on port: " + process.env.PORT))
