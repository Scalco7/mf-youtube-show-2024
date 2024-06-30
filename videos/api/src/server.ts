import express, { Router, Request, Response } from "express";
import dotenv from 'dotenv'
import { videosRoute } from "./routes/video.routes";

dotenv.config()

const app = express()
const route = Router()

route.get("/", (req: Request, res: Response) => res.json({ message: "Hello World" }))

app.use(route)
app.use('/videos', videosRoute)
app.listen(process.env.PORT, () => console.log("API listen on PORT ", process.env.PORT))