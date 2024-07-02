import WebSocket from "ws";
import { getUserIdByToken } from "../utils/getUserIdByToken";
import { webSocketAuthentication } from "../middleware/middleware";
import { parse } from 'url'

export class FavoriteWebSocket {
    private websockets: { [key: string]: WebSocket } = {};

    private onConnection(ws: WebSocket, req: any): void {
        let { token } = parse(req.url, true).query
        const userId = getUserIdByToken(token!.toString())

        const newWebsockets = { ...this.websockets, [userId]: ws }
        this.websockets = newWebsockets

        console.log(this.websockets)
        console.log("count - ", Object.keys(this.websockets).length) //pensar em um jeito de fazer o web socket, não compartilha
        // a calsse que fica em um arquivo, fica la, não compartilha, não consegui compartilhar a lista de sockets
        // talvez já criar uma lista de funções, e só ativa, não sei, tem que pensar
        console.log("=======================CONNECTION===============================")

    }

    public sendNewLength(userId: string, newLength: number): void {
        console.log(this.websockets)
        console.log("count - ", Object.keys(this.websockets).length)
        console.log("===================UPDATE - SEND===================================")

        //const ws = this.websockets[userId]

        // if (!ws)
        //     throw ("Erro na atualização - Usuário inexistente")

        // ws.send(newLength)
    }

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
}