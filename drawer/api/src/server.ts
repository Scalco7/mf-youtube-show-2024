import express, { Request, Response } from "express";

import dotenv from "dotenv";
import { route } from "./routes/routes";
import cors from "cors";
import { FavoriteWebSocket } from "./websocket/app-websocket";

dotenv.config();
const app = express();
const favoriteWebsocket = new FavoriteWebSocket()

app.use(express.json());
app.use(cors());

app.use("/", route);

route.post("/update-favorites-length", async (req: Request, res: Response) => {
  console.log(req.body)

  console.log(webSocket.clients)
  favoriteWebsocket.sendNewLength(req.body.userId, req.body.newLength)

  res.status(200).json({})
})

const server = app.listen(process.env.PORT, () =>
  console.log("heyy, api is listen on port: " + process.env.PORT),
);

export const webSocket = favoriteWebsocket.createWebsocketServer(server)
export default favoriteWebsocket