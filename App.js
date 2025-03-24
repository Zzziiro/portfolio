import React, { useState } from "react";
import "./App.css";
import { t } from "i18next";

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
          <li className="topIcons">
            <a
              href="https://www.linkedin.com/in/lucas-guimar%C3%A3es-16b064228/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="devicon-linkedin-plain"></i>{" "}
            </a>
          </li>
          <li className="topIcons">
            <a
              href="https://github.com/Zzziiro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="devicon-github-original"></i>
            </a>
          </li>
          <li
            className="topIcons"
            style={{ cursor: "pointer", position: "absolute", left: "95vw" }}
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 8L10 13M4 14L10 8L12 5M2 5H14M7 2H8M12.913 17H20.087M12.913 17L11 21M12.913 17L15.7783 11.009C16.0092 10.5263 16.1246 10.2849 16.2826 10.2086C16.4199 10.1423 16.5801 10.1423 16.7174 10.2086C16.8754 10.2849 16.9908 10.5263 17.2217 11.009L20.087 17M20.087 17L22 21"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
        <div
          style={{
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          <i
            style={{ color: "#9f56db" }}
            alt="CSS3"
            className="devicon devicon-css3-plain"
          />
          <i
            style={{ color: "#9f56db" }}
            alt="Javascript"
            className="devicon devicon-javascript-plain"
          />
          <i
            style={{ color: "#9f56db" }}
            alt="HTML5"
            className="devicon devicon-html5-plain"
          />
          <i
            style={{ color: "#9f56db" }}
            alt="Typescript"
            className="devicon devicon-typescript-plain"
          />
          <i
            style={{ color: "#9f56db" }}
            alt="React"
            className="devicon devicon-react-original"
          />
          <i
            style={{ color: "#9f56db" }}
            alt="Tailwind CSS"
            className="devicon devicon-tailwindcss-original"
          />
          <i
            style={{ color: "#9f56db" }}
            alt="Git"
            className="devicon devicon-git-plain"
          />
          <i
            style={{ color: "#9f56db" }}
            alt="GitHub"
            className="devicon devicon-github-original"
          />
          <i
            style={{ color: "#9f56db" }}
            alt="Docker"
            className="devicon devicon-docker-plain"
          />
          <i
            style={{ color: "#9f56db" }}
            alt="AntDesign"
            className="devicon devicon-antdesign-plain"
          />
          <i
            style={{ color: "#9f56db" }}
            alt="NodeJS"
            className="devicon devicon-nodejs-plain"
          />
          <i
            style={{ color: "#9f56db" }}
            alt="PostgreSQL"
            className="devicon devicon-postgresql-plain"
          />
          <i
            style={{ color: "#9f56db" }}
            alt="Bash"
            className="devicon devicon-bash-plain"
          />
          <i
            style={{ color: "#9f56db" }}
            alt="Vitest"
            className="devicon devicon-vitest-plain"
          />
          <i
            style={{ color: "#9f56db" }}
            alt="Linux"
            className="devicon devicon-linux-plain"
          />
        </div>
        <div class="row">
          <div class="column">
            <a
              className="purple"
              href="https://tiflux.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="item-title">Tiflux - Sistema de tickets</h2>{" "}
            </a>
            <p>
              My first and current job, where I work as a frontend developer,
              responsible for various features and visual adjustments in the
              system. My most notable contributions were the agent's interface
              and the new whitelabel model implemented in the system, both
              taking a few months of work to complete.
            </p>
            <p>
              Together with my team, we develop and maintain several areas of
              the system, including but not limited to: customer registration,
              service catalogs, service desks, integrations (GitHub, Jira,
              etc.), and the mobile app.
            </p>
            <p style={{ fontSize: "2.5vh" }}>
              For the system development, we use React, TypeScript, NodeJS,
              PostgreSQL, Docker, Git, among other technologies.
            </p>
          </div>
          <div class="column-right">
            <img
              style={{ width: "40vw", marginTop: 20 }}
              src="/tiflux-background.png"
              alt="pokedex"
            />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <a
              className="purple"
              href="https://github.com/Zzziiro/zirodex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="item-title">Pomodoro Quest - WIP</h2>
            </a>
            <p>
              This project is being developed together with two friends I work
              with. It basically consists of a web application for time
              management using the Pomodoro technique with an idle gamification
              element, where users build parts of a village in exchange for
              coins earned by focusing on work, studies, etc.
            </p>
            <p>
              In this project, I was responsible for design, prototyping, visual
              identity, and frontend development, including creating screens,
              components, and graphic elements.
            </p>
            <p style={{ fontSize: "2.5vh" }}>
              For frontend development, we used React, TypeScript, JavaScript,
              and CSS.
            </p>
          </div>
          <div class="column-right">
            <img style={{ width: "40vw" }} src="/village.png" alt="pokedex" />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <a
              className="purple"
              href="https://github.com/Zzziiro/zirodex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="item-title">Pokédex</h2>{" "}
            </a>
            <p>
              A web application that lists all Pokémon and allows users to view
              specific data about each one. To achieve this, it uses the PokéAPI
              (available at https://pokeapi.co/) through REST requests that
              return the desired data.
            </p>
            <p>
              The project's aesthetic idea was inspired by the classic Pokémon
              games' Pokédex, with a simple and intuitive design. I aimed to
              bring the familiarity of the games to the web environment with a
              clean and organized layout while maintaining the graphical
              fidelity of that era.
            </p>
            <p style={{ fontSize: "2.5vh" }}>
              The website is fully responsive, which was one of my main
              priorities when developing it. The development was done using
              JavaScript, CSS, and HTML, and all components were made by me.
            </p>
          </div>
          <div class="column-right">
            <img style={{ width: "40vw" }} src="/pokédex.gif" alt="pokedex" />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <a
              className="purple"
              href="https://github.com/stars/Zzziiro/lists/projetos-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="item-title">Projetos clone</h2>
            </a>
            <p>
              These were my first projects when I was learning frontend
              development. They were created to better understand how rendering
              and styling of on-screen components work.
            </p>
            <p style={{ fontSize: "2.5vh" }}>
              I used JavaScript, TypeScript, CSS, and HTML for development.
            </p>
            <p style={{ fontSize: "2.5vh" }}>
              The projects include clones of LinkedIn, Twitter, Mercado Livre,
              and Pipefy.
            </p>
          </div>
          <div class="column-right">
            <img
              style={{ width: "19vw", margin: "0.5vw" }}
              src="/linkedIn.gif"
              alt="pokedex"
            />
            <img
              style={{ width: "19vw", margin: "0.5vw" }}
              src="/pipefy.gif"
              alt="pokedex"
            />
            <br />
            <img
              style={{ width: "19vw", margin: "0.5vw" }}
              src="/mercado-livre.gif"
              alt="pokedex"
            />
          </div>
        </div>
        <div
          style={{ marginBottom: 25 }}
          className="sub-btn code-btn"
          onClick={() => setShowSecB(true)}
        >
          See Design
        </div>
      </div>
      <div className={`side sec-B ${showSecB ? "showing" : ""}`}>
        <div className="desc">
          <h1>Design</h1>
        </div>
        <div class="row">
          <div class="column">
            <a
              className="white"
              href="https://docs.google.com/document/d/1om7X2rpayJicbLeQArFZgXHV22YxDPu4QkUhwbBTvAM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="item-title-white">AVA Redesign</h2>{" "}
            </a>
            <p className="white">
              With the help of my group, I developed a report (in a thesis
              format) and a complete prototype for redesigning the Catholic
              University’s AVA (Virtual Learning Environment) platform, aiming
              to improve user experience and usability.
            </p>
            <p className="white">
              It was a great learning experience to redesign an interface from
              scratch while keeping all necessary elements and removing unused
              ones, maintaining the platform's essence while giving it a
              completely new look.
            </p>
            <p className="white" style={{ fontSize: "2.5vh" }}>
              We used Figma, Photoshop, and Google Docs as design tools. For the
              project methodology, we opted for design thinking, and for
              research tools, we used mood boards, personas, semantic panels,
              SWOT analysis, heuristic analysis, etc.
            </p>
          </div>
          <div class="column-right">
            <img style={{ width: "40vw" }} src="/ava.png" alt="pokedex" />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <a
              className="white"
              href="https://drive.google.com/file/d/15lgRUBbcWjtR1iizVmbpvqDnx9iSqzN4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="item-title-white">
                Brandbook Formento Modelagens
              </h2>{" "}
            </a>
            <p className="white">
              Together with three college colleagues, we developed a new visual
              identity with a brand book and brand guide for Formento
              Modelagens, a clothing modeling company.
            </p>
            <p className="white">
              It was a great challenge that took a few months of work, but in
              the end, we were very pleased with the result. We settled on a
              modern and minimalist design with sober colors and clean
              typography. The colors bring both elegance and a sense of calm to
              the entire project.
            </p>
            <p className="white" style={{ fontSize: "2.5vh" }}>
              We used Photoshop, Illustrator, and Canva to develop the brand
              book.
            </p>
          </div>
          <div class="column-right">
            <img style={{ width: "40vw" }} src="/brandbook.gif" alt="pokedex" />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <h2 className="item-title-white">GlowPack</h2>
            <p className="white">
              In this project, we designed, branded, and prototyped a shoulder
              bag with an internal light. The idea came from the difficulty of
              finding small objects in dark environments such as clubs, parties,
              etc.
            </p>
            <p className="white">
              We based the design on Pop Art aesthetics, as we wanted something
              striking and eye-catching in dark environments, which is part of
              Glow’s concept.
            </p>
          </div>
          <div class="column-right">
            <img style={{ width: "30vw" }} src="/glowpack.jpeg" alt="pokedex" />
          </div>
        </div>
        <div
          style={{ marginBottom: 25 }}
          className="sub-btn back-btn"
          onClick={() => setShowSecB(false)}
        >
          Back
        </div>
      </div>
    </>
  );
}

export default App;
