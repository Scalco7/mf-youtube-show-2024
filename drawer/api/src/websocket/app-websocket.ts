import WebSocket from "ws";
import { getUserIdByToken } from "../utils/getUserIdByToken";
import { webSocketAuthentication } from "../middleware/middleware";
import { parse } from 'url'

export class FavoriteWebSocket {
    private websockets: { [key: string]: WebSocket } = {};

    public createWebsocketServer(expressServer: any): WebSocket.Server {
        const websocketServer = new WebSocket.Server({
            noServer: true,
        });

        expressServer.on("upgrade", (request: any, socket: any, head: any) => {
            const autenticated = webSocketAuthentication(request)

            if (!autenticated) {
                socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n')
                socket.destroy()
                return
            }

            websocketServer.handleUpgrade(request, socket, head, (websocket) => {
                websocketServer.emit("connection", websocket, request);
            });
        });

        websocketServer.on('connection', this.onConnection);

        console.log(`App Web Socket Server is running!`);
        return websocketServer;
    }

    private onConnection(ws: WebSocket, req: any) {
        let { token } = parse(req.url, true).query
        const userId = getUserIdByToken(token!.toString())

        const newWebsockets = { ...this.websockets, [userId]: ws }
        this.websockets = newWebsockets

        ws.on('message', message => console.log(message));
    }
}