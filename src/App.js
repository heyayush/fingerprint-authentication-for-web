import React from "react";
import "./App.css";

const App = () => {
  const openCam = () => {
    console.log("triggering camera");

    const player = document.getElementById("player");

    console.log("got the player node", player);

    const constraints = {
      video: true
    };

    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
      player.srcObject = stream;
    });
  };
  return (
    <div className="App">
      <h2>Hello World</h2>
      <button onClick={openCam}>Open Camera</button>
      <div id="player" />
      <div id="app-install-banner">Click here to install this app</div>
    </div>
  );
};

export default App;
