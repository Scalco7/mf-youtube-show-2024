import cors from "cors";
import dotenv from 'dotenv'
import express, { Router, Request, Response } from "express";
import { AuthService } from "./services/auth.service";

dotenv.config()
const app = express()
const route = Router()

app.use(express.json())
app.use(cors())

const authService = new AuthService()

route.post("/login", async (req: Request, res: Response) => {
    try {
        const token = await authService.login(req.body.email, req.body.password)
        res.status(200).json({ token: token })
    }
    catch (error) {
        res.status(400).json({ error: error })
    }
})

route.post("/register", async (req: Request, res: Response) => {
    try {
        const token = await authService.registerUser(req.body.name, req.body.email, req.body.password)
        res.status(200).json({ token: token })
    }
    catch (error) {
        res.status(400).json({ error: error })
    }
})

app.use(route)

const port = process.env.PORT
app.listen(port, () => console.log("Api rodando na porta " + port))