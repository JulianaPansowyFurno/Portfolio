import React, {useState, useEffect, useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import FavoritoCards from "./FavoritoCards";
import Particle from "../Particle";
import axios from 'axios';
import {useProductsData} from "../MyContext"
import { useNavigate } from "react-router-dom";
import {favoritoContext} from "../favoritosContext.js";
import swal from 'sweetalert';


function Favorito() {
  const { data } = useProductsData();
  const navigate = useNavigate();
  const { favorito, addFavorite, removeFavorite, resetFavorite  } = useContext(favoritoContext);
  const [favs, setFavs] = useState([]);
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
    if (data && favorito) {
      const favoriteObjects = favorito.map((id) =>
        data.find((elem) => elem.id === id)
      );
      console.log(favoriteObjects)
      setFavs(favoriteObjects.filter(Boolean)); 
    }
    
  }, [favorito, data]);


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
        {favs.length > 0 ? (
            favs.map((c) => (
          <Col md={4} className="project-card">
          <FavoritoCards 
          key={c.id}
            title={c.titulo}
            corto={c.corto}
            ghLink={c.url}
            onClickDetalle={() => navigate(`/detalle/${c.id}`)}   
            isFavorito={isFavorito(c.id)}
            onClickFavorito={() => {FavoritoClick(c.id)}}     
          />
        </Col>
         ))
         ) : (
         
           <center>
             <br></br>
           <h1 className="project-heading">
          No hay creaciones agregadas a <strong className="purple"> Mis Favoritos </strong>
        </h1>
        </center>
         )}

          
        </Row>
      </Container>
    </Container>
  );
}

export default Favorito;
