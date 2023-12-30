import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import {useProductsData} from "../components/MyContext"
import axios from 'axios';
import { useParams } from "react-router-dom";
import Particle from "../components/Particle";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { CiSaveUp1 } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";

function Detalle() {
    const {id} = useParams();
    const { data } = useProductsData();
    const [proyecto, setProyecto] = useState([]);

    useEffect(() => {
      data.filter(d => 
        {
          if(d.id == id){
            setProyecto(d)
          }
        }
      )      
    }, [data])
    
    console.log(proyecto)
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
            El titulo de esta creacion es<strong className="purple"> {proyecto.titulo}</strong>
          </h1>
              <Card className="quote-card-view">
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
              Esta creacion es sobre <span className="purple"> {proyecto.descripcion} </span>
              <br /> 
               Se realizo el  <span className="purple"> {proyecto.fecha}</span>
                <br />
                <br />
                Boton hacia la url del proyecto:
              </p>
              <Button variant="primary" href={proyecto.url} target="_blank">
              <IoIosLink /> &nbsp;
          URL
        </Button>

            </blockquote>
          </Card.Body>
        </Card>
        </Col>
        <Col style={{ paddingBottom: 15, borderRadius: 50 }}>
            <img
              src={proyecto.imagen}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>


      </Row>

      

  
    </Container>
  </Container>
    
  );
}

export default Detalle;
