import React from "react";
import "./App.css";
import fingerprintIcon from "./assets/icons/fingerprint.png";
const App = () => {
  const openCam = () => {
    console.log("triggering camera");

    const constraints = {
      // audio: true
      video: { facingMode: "user" }
    };

    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
      const player = document.getElementById("player");
      console.log("got the player node", player);

      console.log("stream is", stream);

      player.onloadedmetadata = function(e) {
        player.play();
      };
      player.srcObject = stream;
    });
  };
  return (
    <div className="App">
      <h2>Hello World</h2>
      <button onClick={openCam}>Open Camera</button>
      <video id="player" />
      <div>Please authenticate using fingerprint</div>
      <img
        alt="fingerprint icon"
        src={fingerprintIcon}
        height="300px"
        width="300px"
      />
      <div id="app-install-banner">Click here to install this app</div>
    </div>
  );
};

export default App;
