import cors from "cors";
import express, { Router, Request, Response } from "express";

const app = express()

const route = Router()

app.use(express.json())
app.use(cors())

route.get("/", (req: Request, res: Response) => {
    res.json("Hello World")
})

const port = process.env.PORT

app.listen(port, () => console.log("Api rodando na porta " + port))