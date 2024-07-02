import express, { Request, Response } from "express";

import dotenv from "dotenv";
import { route } from "./routes/routes";
import cors from "cors";
import { createServer } from 'http'
import { Server } from "socket.io";

dotenv.config();
const app = express();
const httpServer = createServer(app)
export const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5175"
  }
})

app.use(express.json());
app.use(cors());

app.use("/", route);

httpServer.listen(process.env.PORT, () =>
  console.log("heyy, api is listen on port: " + process.env.PORT),
);