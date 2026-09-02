import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hola, soy <span className="purple"> Juliana Pansowy Furno </span>
            de <span className="purple"> Buenos Aires, Argentina.</span>
            <br /> Soy estudiante de tercer año de Ingeniería en Sistemas de la Información en la UTN.
            <br />
            Estudié en ORT, donde construí gran parte de mis conocimientos de programación. Actualmente realizo una pasantía en Inteligencia Artificial y Comunicación Digital.
            <br />
            <br />
            Me considero comprometida y creativa. Disfruto trabajar en equipo, aprender constantemente y aportar ideas que sumen valor.
            <br /><br />Además de programar, me gusta mucho:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
            <li className="about-activity">
              <ImPointRight /> Mirar Netflix
            </li>
            <li className="about-activity">
              <ImPointRight /> Estar con mi familia y amigos
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
