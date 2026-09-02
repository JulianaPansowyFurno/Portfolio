import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/home-main.svg";
import Type from "../Type";
import Particle from "../Particle";
import Home2 from "./Home2";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import "../Career/career.css";

function Home() {
  return (
    <section>
    <Container fluid className="home-section" id="home">
      <Particle />
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <p className="hero-eyebrow">PROGRAMACIÓN · DISEÑO · INTELIGENCIA ARTIFICIAL</p>
            <h1 style={{ paddingBottom: 15 }} className="heading">
             ¡Hola!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              Yo soy
              <strong className="main-name"> Juliana Pansowy Furno</strong>
            </h1>

            <div className="hero-type">
              <Type />
            </div>
            <p className="hero-description">Estudio Ingeniería en Sistemas de la Información en la UTN. Me gusta unir tecnología y creatividad, aprender en equipo y aportar ideas que sumen valor.</p>
            <div className="career-actions hero-actions">
              <Link to="/creaciones" className="career-button primary">Explorar mis proyectos <FiArrowUpRight aria-hidden="true" /></Link>
              <Link to="/recorrido" className="career-button">Mi recorrido y CV <FiArrowDown aria-hidden="true" /></Link>
            </div>
            <p className="hero-location">Buenos Aires, Argentina · Castellano e inglés</p>
          </Col>

          <Col md={5} style={{ paddingBottom: 15 }}>
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
    <Container className="career-teaser"><div className="career-teaser-inner"><div><p className="career-eyebrow">LO QUE ESTOY HACIENDO</p><h2>De la idea a la práctica.</h2><p>Estudio en la UTN y realizo una pasantía en Inteligencia Artificial y Comunicación Digital. Acá podés explorar mi formación, experiencia y herramientas.</p></div><Link to="/recorrido" className="career-button">Conocer mi recorrido <FiArrowUpRight aria-hidden="true" /></Link></div></Container>
    <Home2/>
  </section>
  );
}

export default Home;
