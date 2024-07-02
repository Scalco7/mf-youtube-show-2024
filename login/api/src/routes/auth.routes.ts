import { Router, Request, Response } from "express"
import { AuthService } from "../services/auth.service"

const authService = new AuthService()
export const authRoute = Router()

authRoute.post("/login", async (req: Request, res: Response) => {
    try {
        const token = await authService.login(req.body.email, req.body.password)
        res.status(200).json({ token: token })
    }
    catch (error) {
        res.status(400).json({ error: error })
    }
})

authRoute.post("/register", async (req: Request, res: Response) => {
    try {
        const token = await authService.registerUser(req.body.name, req.body.email, req.body.password)
        res.status(200).json({ token: token })
    }
    catch (error) {
        res.status(400).json({ error: error })
    }
})