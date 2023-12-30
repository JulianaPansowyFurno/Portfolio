import React, {useState, useEffect, useContext}  from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ProjectCard from "../Projects/ProjectCards";
import { useNavigate } from "react-router-dom";
import {favoritoContext} from "../favoritosContext.js";
import swal from 'sweetalert';
import Productos from "../Assets/Productos.PNG"
import PF from "../Assets/pf.png"
import Bandera from "../Assets/bandera.png"

function Home2() {
  const navigate = useNavigate();
  const { favorito, addFavorite, removeFavorite } = useContext(favoritoContext);
  const [favoritoId, setFavoritoId] = useState(null);

  const isFavorito = (id) => favorito.includes(id);

  const FavoritoClick = (id) => {
    if (id !== null && id !== undefined) {
      if (!isFavorito(id)) {
        addFavorite(id);
      } else {
        removeFavorite(id);
      }
    }
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
       
        <Row>
        <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={Productos}
              title="Catálogo de Productos Parte 1 y 2"
              corto="con un template hacer un catalogo de productos."
              ghLink="https://github.com/NadineLewit/TP_Productos.git"
              onClickDetalle={() => navigate(`/detalle/3`)}
              isFavorito={isFavorito(3)}
              onClickFavorito={() => FavoritoClick(3)}               
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={PF}
              title="Proyecto Final"
              corto="Un sistema de hospital que facilitar el acceso y la gestión de los turnos a los médicos y de los pacientes."
              ghLink="https://github.com/JulianaPansowyFurno/PF.git"
              onClickDetalle={() => navigate(`/detalle/6`)}
              isFavorito={isFavorito(6)}
              onClickFavorito={() => FavoritoClick(6)}               
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={Bandera}
              title="Jugando con banderas"
              corto="El objetivos del TP 6 es hacer un juego."
              ghLink="https://github.com/JulianaPansowyFurno/TP6_Banderas.git"
              onClickDetalle={() => navigate(`/detalle/4`)}
              isFavorito={isFavorito(4)}
              onClickFavorito={() => FavoritoClick(4)}               
            />
          </Col> 
        </Row>

      
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRAME EN</h1>
            <p>
             Mis <span className="purple"> redes sociales </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JulianaPansowyFurno"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/juliipansowyy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/julipansowy/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/juliana-pansowy-furno-5538a12a1/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            </ul>
          </Col>
        </Row>
       
          
      </Container>
    </Container>
  );
}
export default Home2;
