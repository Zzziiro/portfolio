import React, { useState } from "react";
import "./App.css";

function App() {
  const [showSecA, setShowSecA] = useState(false);
  const [showSecB, setShowSecB] = useState(false);
  const [hideHead, setHideHead] = useState(false);

  return (
    <>
      <div className="menu">
        <h1
          className="home"
          onClick={() => {
            setShowSecA(false);
            setShowSecB(false);
            setHideHead(false);
          }}
        >
          <img
            style={{ width: 80, top: -10, left: 0, position: "absolute" }}
            src="/face-icon.png"
            alt="Face Icon"
          />
        </h1>
        <ul className="topnav">
          <li>
            <a
              href="https://www.linkedin.com/in/lucas-guimar%C3%A3es-16b064228/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin"></i>
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Zzziiro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
              <i className="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className={`head ${hideHead ? "head-hide" : ""}`}>
        <div className="name">
          {"Lucas "}
          <span>"Ziro"</span>
        </div>
        <div className="sub-name">UI/UX Dev & Designer</div>
        <div className="down" onClick={() => setHideHead(true)}></div>
      </div>
      <div className="content-wrap">
        <div className="sec intro">
          <div className="text-contain">
            <div className="text">
              <h2>I Am A Joinville-Based</h2>
              <h3>Frontend Developer and Design Enthusiast</h3>
              <h5>Cat person, movie nerd and UX addict</h5>
              <h5 id="bot-h5">
                <span>Now a look at what I do:</span>
              </h5>
            </div>
            <div
              className="pg-btn begin"
              onClick={() => {
                setShowSecA(true);
                setHideHead(true);
              }}
            >
              Hell yeah
            </div>
          </div>
        </div>
      </div>
      <div className={`side sec-A ${showSecA ? "showing" : ""}`}>
        <div className="desc">
          <h1>Development</h1>
        </div>
        <></>
        <div className="sub-btn code-btn" onClick={() => setShowSecB(true)}>
          See Design
        </div>
      </div>
      <div className={`side sec-B ${showSecB ? "showing" : ""}`}>
        <div className="desc">
          <h1>Front-End</h1>
        </div>
        <div className="sub-btn back-btn" onClick={() => setShowSecB(false)}>
          Back
        </div>
      </div>
    </>
  );
}

export default App;
