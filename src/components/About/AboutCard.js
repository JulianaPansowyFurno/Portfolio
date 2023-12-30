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
            <br /> Soy estudiante de Informatica en 5to año en la escuela secundaria ORT Yatay
            <br />
            Ademas, estoy anotada ingenieria en Sistemas en UTN
            <br />
            <br />
            Ademas de programar me gusta mucho:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer
            </li>
            <li className="about-activity">
              <ImPointRight /> Estar con mi familia
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
