import express from 'express'
import { Router, Request, Response } from 'express'

import dotenv from 'dotenv'

dotenv.config()
const app = express()
const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World' })
})

app.use(route)
app.listen(process.env.PORT, () => console.log("heyy, api is listen on port: " + process.env.PORT))
