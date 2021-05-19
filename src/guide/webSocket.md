# WebSocket

![WebSocket Model image taken from StackOverflow](https://i.stack.imgur.com/ReJux.png)

1. Client REQUEST for handshake (Client ➡️ Server)
2. Sever RESPONSE with handshake confirmation (Server ➡️ Client)
3. Client - Server socket connection established (Client ↔️ Server)
4. Connect is established till Client or Server close the connection

**Server push data to Client, without Client asking for it**

## Daily Example:

You visit Facebook

1. Your laptop (client) request to Facebook (server) asking for handshake
2. Facebook (server) respond to your laptop with handshake confirmation
3. Your laptop (client) and Facebook (server) WebSocket connection established
4. You get a notification when somebody message you, new post etc...

[Image taken from StackOverflow](https://stackoverflow.com/questions/14703627/websockets-protocol-vs-http)
