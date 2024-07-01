import WebSocket from "ws";

function onError(ws: any, err: any) {
    console.error(`onError: ${err.message}`);
}

function onMessage(ws: any, data: any) {
    console.log(`onMessage: ${data}`);
    ws.send(`recebido!`);
}

function onConnection(ws: any, req: any) {
    ws.on('message', (data: any) => onMessage(ws, data));
    ws.on('error', (error: any) => onError(ws, error));
    console.log(`onConnection`);
}

export function createWebsocketServer(server: any) {
    const websocketServer = new WebSocket.Server({ server });
    websocketServer.on('connection', onConnection);

    console.log(`App Web Socket Server is running!`);
    return websocketServer;
}