import React, { useEffect, useRef } from "react";
import { Button, ButtonGroup } from "reactstrap";
import logo from "./steal.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { TimelineMax } from "gsap/all";

function App() {
  const appLogo = useRef(null);
  let logoTween = null;

  useEffect(() => {
    console.log(appLogo.current);
    //eslint-disable-next-line
    logoTween = new TimelineMax({ paused: true })
      .to(appLogo.current, 2, {
        left: "auto",
        right: 100
      })
      .to(
        appLogo.current,
        2,
        { rotation: 360, transformOrigin: "center" },
        "-=2"
      )
      .to(appLogo.current, 2, { opacity: 0.1 }, "-=2")
      .to(appLogo.current, 2, {
        top: "auto",
        bottom: 100
      })
      .to(
        appLogo.current,
        2,
        { rotation: -360, transformOrigin: "center" },
        "-=2"
      )
      .to(appLogo.current, 2, { opacity: 1 }, "-=2")
      .to(appLogo.current, 2, {
        right: "auto",
        left: 100
      })
      .to(
        appLogo.current,
        2,
        { rotation: 360, transformOrigin: "center" },
        "-=2"
      )
      .to(appLogo.current, 2, { opacity: 0.1 }, "-=2")
      .to(appLogo.current, 2, {
        top: 100,
        bottom: "auto"
      })
      .to(
        appLogo.current,
        2,
        { rotation: -360, transformOrigin: "center" },
        "-=2"
      )
      .to(appLogo.current, 2, { opacity: 1 }, "-=2")
      .to(appLogo.current, 2, {
        left: "auto",
        right: "calc(50% - 100px)",
        bottom: "auto"
      })
      .to(
        appLogo.current,
        2,
        { rotation: 360, transformOrigin: "center" },
        "-=2"
      );
  }, []);

  return (
    <div
      className="App d-flex flex-column align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#282c34" }}
    >
      <h1 className="display-4 text-info m-3 text-center">
        They See Me Rollin'
      </h1>
      <h2 className="lead text-info">A simple demo of GreenSock animation</h2>
      <h6 className="text-info">( Don't try this on mobile )</h6>
      <div className="mb-0">
        <img
          className="App-logo"
          src={logo}
          alt="logo"
          ref={appLogo}
          style={{
            position: "absolute",
            top: "100px",
            left: "calc(50% - 100px)",
            height: "200px",
            width: "200px"
          }}
        />
      </div>
      <ButtonGroup className="mt-3">
        <Button color="info" outline onClick={() => logoTween.play()}>
          Play
        </Button>
        <Button color="info" outline onClick={() => logoTween.pause()}>
          Pause
        </Button>
        <Button color="info" outline onClick={() => logoTween.reverse()}>
          Reverse
        </Button>
        <Button color="info" outline onClick={() => logoTween.restart()}>
          Restart
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
