import express, { Request, Response } from "express";

import dotenv from "dotenv";
import { route } from "./routes/routes";
import cors from "cors";
import { createServer } from 'http'
import { Server } from "socket.io";

dotenv.config();
const app = express();
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5175"
  }
})

route.post("/update-favorites-length", async (req: Request, res: Response) => {
  io.emit(req.body.userId, req.body.newLength)
  res.status(200).json({})
})

app.use(express.json());
app.use(cors());

app.use("/", route);

httpServer.listen(process.env.PORT, () =>
  console.log("heyy, api is listen on port: " + process.env.PORT),
);