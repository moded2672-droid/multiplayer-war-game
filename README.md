<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LAN War Arena</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div id="game-shell">
      <div id="hud">
        <div id="status">
          <span id="player-name">No player</span>
          <span id="health-tag">Health: 100</span>
        </div>
        <div id="join-panel">
          <input id="name-input" type="text" maxlength="18" placeholder="Enter your callsign" value="Player" />
          <button id="connect-button">Connect</button>
        </div>
      </div>

      <div id="arena-wrap">
        <canvas id="game-canvas" width="960" height="600"></canvas>
        <div id="messages">Waiting for players...</div>
      </div>
    </div>

    <script src="/socket.io/socket.io.js"></script>
    <script src="/game.js"></script>
  </body>
</html>
