import express from "express";

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
const server = app.listen(process.env.PORT, () =>
  console.log("heyy, api is listen on port: " + process.env.PORT),
);

favoriteWebsocket.createWebsocketServer(server)