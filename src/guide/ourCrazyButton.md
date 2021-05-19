# Our Crazy Button Architecture

1. Your laptop make request to server for handshake
2. Server respond with handshake confirmation
3. Server push data to your client when:
   - a new player join
   - the button was clicked
   - a player has left
4. Your laptop process on data received from server

## Initial connection

![Initial connection](../static/initial.png)

## A new player connected

![Player connected](../static/player_connected.png)

## The button was pressed

![Button pressed](../static/button_pressed.png)

## A player disconnected

![Player disconnected](../static/player_disconnected.png)
