import WebSocket from "ws";
import { getUserIdByToken } from "../utils/getUserIdByToken";

export class FavoriteWebSocket {
    private websockets: { [key: string]: WebSocket } = {};

    public createWebsocketServer(expressServer: any): WebSocket.Server {
        const websocketServer = new WebSocket.Server({
            noServer: true,
        });

        expressServer.on("upgrade", (request: any, socket: any, head: any) => {
            websocketServer.handleUpgrade(request, socket, head, (websocket) => {
                websocketServer.emit("connection", websocket, request);
            });
        });

        websocketServer.on('connection', this.onConnection);

        console.log(`App Web Socket Server is running!`);
        return websocketServer;
    }

    public onConnection(ws: WebSocket, req: any) {
        const token = req.headers.authorization
        const userId = getUserIdByToken(token)

        const newWebsockets = { ...this.websockets, [userId]: ws }
        this.websockets = newWebsockets
    }
}