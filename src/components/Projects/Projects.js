import React, {useState, useEffect, useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.js";
import Particle from "../Particle.js";
import {useProductsData} from "../MyContext.js"
import { useNavigate } from "react-router-dom";
import {favoritoContext} from "../favoritosContext.js";


function Projects() {
  const { data } = useProductsData();
  const navigate = useNavigate();
  const { favorito, addFavorite, removeFavorite, resetFavorite  } = useContext(favoritoContext);

  const isFavorito = (id) => favorito.includes(id);

  const FavoritoClick = (id) => {
    if (id !== null && id!== undefined) {
      if (!isFavorito(id)) {
        addFavorite(id);
      } else {
        removeFavorite(id);
      }
    }
  };

  useEffect(() => {
    FavoritoClick()
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      
        
        <h1 className="project-heading">
         Mis recientes <strong className="purple"> creaciones </strong>
        </h1>
        <p style={{ color: "white" }}>
          Estos son los Trabajos Practicos que fui haciendo en el año.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {data.map((c) =>
          <Col md={4} className="project-card">
          <ProjectCard 
          key={c.id}
            imgPath={c.imagen}
            title={c.titulo}
            corto={c.corto}
            ghLink={c.url}
            onClickDetalle={() => navigate(`/detalle/${c.id}`)} 
            isFavorito={isFavorito(c.id)}
            onClickFavorito={() => {FavoritoClick(c.id)}} 
          />
        </Col>
          )}

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
