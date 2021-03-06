# Frontend

Button page requirements

1. A Button for players to click

   - Button should move randomly on every player screen when one player has clicked

2. Leaderboard that show list of connected players

   - current player should be at the top of the list
   - should show player score

## index.html

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>🤡 Crazy Button Workshop</title>
  </head>

  <!-- loads styling library -->
  <link
    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
    rel="stylesheet"
    type="text/css"
  />

  <!-- loads socket.io javascript library -->
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.0.1/socket.io.js"
    crossorigin="anonymous"
  ></script>

  <!-- start of helper functions -->
  <script>
    function clearPlayerList() {
      document.getElementById("playerListDisplay").textContent = "";
    }

    function drawPlayerList(playerListData) {
      for (sid in playerListData) {
        // extract playerID and playerScore
        let playerID = sid.slice(0, 4); //sid is too long, we take the first 4 characters
        let playerScore = playerListData[sid];

        // get the place we want to put the textToDislay
        let playerListDisplay = document.getElementById("playerListDisplay");

        // create a list element to insert textToDisplay
        let listElement = document.createElement("li");

        // craft the text to display
        let textToDisplay;

        // it is you!
        if (socket.id == sid) {
          textToDisplay = playerID + " 🤪 " + "[" + playerScore + "]";
          listElement.appendChild(document.createTextNode(textToDisplay)); // insert text to display into list element
          playerListDisplay.prepend(listElement); // insert at top of the list
        } else {
          // it is not you!
          textToDisplay = playerID + "[" + playerScore + "]";
          listElement.appendChild(document.createTextNode(textToDisplay)); // insert text to display into list element
          playerListDisplay.append(listElement); // insert anywhere
        }
      }
    }

    function reDrawPlayerList(playerListData) {
      clearPlayerList();
      drawPlayerList(playerListData);
    }

    // given randomTop and randomLeft values,
    // move button to new location using random values
    function moveButtonToLocation(randomTop, randomLeft) {
      // to adapt button position to screen size;
      let maxHeight = window.innerHeight;
      let maxWidth = window.innerWidth;

      // x and y offset of button relative to the browser
      // screen size
      // randomTop and randomLeft are value between [0, 1] sent from server

      // e.g for laptop with 1200 x 800 resolution and 0.5 for randomTop and randomLeft
      // top_offset = 800 * 0.5 = 400
      // left_offset = 1200 * 0.5 = 600

      // e.g for mobile with 400 x 800 resolution and 0.5 for randomTop and randomLeft
      // top_offset = 400 * 0.5 = 400
      // left_offset = 800 * 0.5 = 600
      let top_offset = maxHeight * randomTop;
      let left_offset = maxWidth * randomLeft;

      // set new button location
      let button = document.getElementById("button");
      button.style.top = top_offset + "px";
      button.style.left = left_offset + "px";
    }
  </script>

  <!-- end of helper functions -->

  <!-- start of socket logic -->
  <script>
    const socket = io.connect("http://localhost:8080");

    // new player connected
    socket.on("player_connected", (data) => {
      reDrawPlayerList(data.playerList);
    });

    // current player disconnected
    socket.on("player_disconnected", (data) => {
      reDrawPlayerList(data.playerList);
    });

    // button was pressed and server emits new_button_location event
    socket.on("new_button_location", (data) => {
      moveButtonToLocation(data.randomTop, data.randomLeft);
      reDrawPlayerList(data.playerList);
    });

    function handleButtonClick() {
      socket.emit("button_pressed");
    }
  </script>
  <!-- end of socket logic -->

  <body>
    <div class="container">
      <button
        id="button"
        class="
          absolute
          flex-auto
          bg-red-500
          hover:bg-red-400
          text-white
          font-bold
          py-2
          px-4
          border-b-4 border-red-700
          hover:border-red-500
          rounded
        "
        onclick="handleButtonClick()"
      >
        Catch Me! 🤡
      </button>

      <p>Connected players 🔗</p>
      <ul id="playerListDisplay"></ul>
    </div>
  </body>
</html>
```
