import cors from "cors";
import dotenv from 'dotenv'
import express from "express";
import { authRoute } from "./routes/auth.routes";

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.use("/", authRoute)

const port = process.env.PORT
app.listen(port, () => console.log("Api rodando na porta " + port))