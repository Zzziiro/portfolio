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
              <i className="fa fa-linkedin" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/zzziiro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram" />
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Zzziiro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
              <i className="fa fa-github" />
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
            <h2 className="item-title">Pokédex</h2>
            <p style={{ fontSize: "2.5vh" }}>
              Aplicação web responsável por listar todos os pokémons e
              possibilitar visualizar dados específicos de cada um. Para tal, é
              utilizada a PokéAPI (disponível em https://pokeapi.co/), através
              de requisições REST que retornarão os dados desejados.
            </p>
            <p style={{ fontSize: "2.5vh" }}>
              A ideia estética do projeto foi inspirada na Pokédex dos jogos
              clássicos de Pokémon, com um design simples e intuitivo. Busquei
              trazer a familiaridade dos jogos para o ambiente web, com um
              layout limpo e organizado, mas prezando pela fidelidade gráfica da
              época.
            </p>
          </div>
          <div class="column">
            <img style={{ width: "80vh" }} src="/pokédex.gif" alt="pokedex" />
          </div>
        </div>
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
