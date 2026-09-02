import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../Assets/about.png";
import Toolstack from "./Toolstack";
import { Link } from "react-router-dom";
import Skills from "../Career/Skills";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Conocé quién <strong className="purple"> soy</strong>
            </h1>
            <Aboutcard />
            <Link to="/recorrido" className="career-button primary">Explorar mi recorrido y CV →</Link>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Lenguajes <strong className="purple"> que se </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Herramientas</strong> que utilizo
        </h1>
        <Toolstack />
        <Skills />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
