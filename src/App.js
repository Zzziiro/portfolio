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
            <a
              className="purple"
              href="https://tiflux.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="item-title">Tiflux - Sistema de tickets</h2>{" "}
            </a>
            <p>
              Meu primeiro e atual trabalho, onde atuo como desenvolvedor
              frontend, sou responsável por diversas features e adequações
              visuais no sistema, minhas contribuições mais notáveis foram a
              visual do agente e o novo modelo de whitelabel implementado no
              sistema, ambas levando alguns meses de tabalho para serem
              concluídas.
            </p>
            <p>
              Em conjunto com meu time desenvolvemos e seguimos dando manuteção
              à várias áreas do sistema, incluindo, mas não limitado à: cadastro
              de clientes, catálogos de serviços, mesas de serviços, integrações
              (Github, Jira, etc.) e o aplicativo mobile.
            </p>
            <p style={{ fontSize: "2.5vh" }}>
              Para o desenvolvimento do sistema utilizamos React, Typescript,
              NodeJS, PostgreSQL, Docker, Git, entre outras tecnologias.
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
              Esse projeto está sendo feito em conjunto com dois amigos com quem
              eu trabalho, consiste básicamente em uma aplicação web de pomodoro
              para gestão de tempo com uma gamificação idle atrelada, a qual
              consiste em construir partes de um vilarejo em troca de moedas
              ganhas por focar no trabalho, estudos, etc.
            </p>
            <p>
              Nesse projeto fui responsável pelo design, prototipação,
              identidade visual além do desenvolvimento do frontend, que inclui
              a criação de telas, componentes e partes gráficas.
            </p>
            <p style={{ fontSize: "2.5vh" }}>
              Para o desenvolvimento do front foi utilizado React, Typescript,
              Javascript e CSS.
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
              Aplicação web responsável por listar todos os pokémons e
              possibilitar visualizar dados específicos de cada um. Para tal, é
              utilizada a PokéAPI (disponível em https://pokeapi.co/), através
              de requisições REST que retornarão os dados desejados.
            </p>
            <p>
              A ideia estética do projeto foi inspirada na Pokédex dos jogos
              clássicos de Pokémon, com um design simples e intuitivo. Busquei
              trazer a familiaridade dos jogos para o ambiente web, com um
              layout limpo e organizado, mas prezando pela fidelidade gráfica da
              época.
            </p>
            <p style={{ fontSize: "2.5vh" }}>
              O site é inteiramente responsivo, o sque foi uma das minhas
              principais principais prioridades ao desenvolvê-lo. Para o
              desenvolvimento foi utilizado Javascript CSS e HTML, os
              componentes foram feitos por mim.
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
              Primeiros projetos feitos por mim quando estava aprendendo
              frontend, com o intuito de entender melhor como funcionava a
              renderização e estilização de componentes em tela.
            </p>
            <p style={{ fontSize: "2.5vh" }}>
              Utilizei Javascript, Typescript, CSS e HTML para o
              desenvolvimento.
            </p>
            <p style={{ fontSize: "2.5vh" }}>
              Os projetos são: um clone do Linkedin, um do Twitter, um do
              Mercado Livre e um do Pipefy.
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
              <h2 className="item-title-white">Redesign AVA</h2>{" "}
            </a>
            <p className="white">
              Com a ajuda do meu grupo, desenvolvi um relatório (modelo TCC) e
              um protótipo completo para o redesign da plataforma AVA (Ambiente
              Virtual de Aprendizagem) da faculdade Católica, com o intuito de
              melhorar a experiência do usuário e a usabilidade da plataforma.
            </p>
            <p className="white">
              Foi um grande aprendizado, refazer uma interface do zero mantendo
              todos os pontos necessários e removendo os que não eram
              utilizados, ao mesmo tempo que mantivemos a essencia da
              plataforma, a demos um ar completamente novo.
            </p>
            <p className="white" style={{ fontSize: "2.5vh" }}>
              Utilizamos Figma, Photoshop e Google Docs como ferramentas de
              design, de metodologia projetual optamos pelo design thinking e
              ferramentas de pesquisa usamos moodboards, persona, paineis
              semânticos, análise swot e heurística, etc.
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
              Junto com três colegas de faculdade, desenvolvemos uma nova
              identidade visual com brandbook e guia de marca para a empresa
              Formento Modelagens, uma empresa de modelagens de roupas.
            </p>
            <p className="white">
              Foi um grade desafio com alguns meses de trabalho, mas no fim
              gostamos muito do resultado, fechamos em um design moderno e
              minimalista, com cores sóbrias e uma tipografia limpa. As cores
              trazem uma classe mas também uma calmaria para todo o projeto.
            </p>
            <p className="white" style={{ fontSize: "2.5vh" }}>
              Utilizamos Photoshop, Illustrator e Canva para o desenvolvimento
              do Brandbook.
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
              Neste trabalho fizemos o design, marca e protótipo de uma
              shoulder-bag com luz interna, tivemos essa ideia pela dificuldade
              de achar objetos pequenos em ambientes escuros, como baladas,
              festas, etc.
            </p>
            <p className="white">
              Nos baseamos na estética Pop Art, pois queríamos algo chamativo e
              que se destacasse em ambientes escuros, que é parte da proposta da
              Glow.
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
