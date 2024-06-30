import express from "express";
import dotenv from 'dotenv'
import { videoRoute } from "./routes/video.routes";
import { favoriteRoutes } from "./routes/favorite.routes";

dotenv.config()

const app = express()
app.use(express.json())

app.use('/videos', videoRoute)
app.use('/favorites', favoriteRoutes)
app.listen(process.env.PORT, () => console.log("API listen on PORT ", process.env.PORT))