import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/home-main.svg";
import Type from "../Type";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
    <Container fluid className="home-section" id="home">
      <Particle />
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
             ¡Buen dia!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              Yo soy
              <strong className="main-name"> Juliana Pansowy Furno</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
              <Type />
            </div>
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
    <Home2/>
  </section>
  );
}

export default Home;