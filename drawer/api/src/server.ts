import express from 'express'

import dotenv from 'dotenv'
import { route } from './routes/routes'

dotenv.config()
const app = express()

app.use(express.json())

app.use('/', route)
app.listen(process.env.PORT, () => console.log("heyy, api is listen on port: " + process.env.PORT))
