body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0b1020;
  color: #e6eefb;
  overflow: hidden;
}

#game-shell {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#hud {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(18, 24, 39, 0.9);
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding: 12px 20px;
}

#status {
  display: flex;
  align-items: center;
  gap: 10px;
}

#player-name {
  font-weight: bold;
  font-size: 1.1rem;
}

#join-panel {
  display: flex;
  gap: 10px;
  align-items: center;
}

input {
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #445166;
  background: #101826;
  color: white;
  min-width: 180px;
}

button {
  background: #2d8cff;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background: #1d73d9;
}

#arena-wrap {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background:
    radial-gradient(circle at center, rgba(29, 48, 83, 0.7), rgba(9, 14, 24, 1)),
    #0b1020;
}

canvas {
  width: min(92vw, 1100px);
  height: min(70vh, 700px);
  border: 3px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  background: linear-gradient(180deg, #1a3a4d 0%, #0c1723 100%);
  box-shadow: 0 15px 35px rgba(0,0,0,0.35);
}

#messages {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(10, 15, 25, 0.7);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 8px 12px;
  min-width: 200px;
  text-align: center;
  color: #d8ecff;
}
