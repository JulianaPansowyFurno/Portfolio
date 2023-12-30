import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";


function FavoritoCards(props) {
  const isFavorito = props.isFavorito;
  
  return (
      <Card className="project-card-view" style={{ justifyContent: "center", paddingBottom: "10px" }}>
      
      <Card.Body>
        <Card.Title><h2><strong className="main-name">{props.title}</strong></h2></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}> {props.corto} </p>  </blockquote>
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          GitHub
        </Button>
        <Button
          className="boton"
          variant="primary"
          onClick={props.onClickDetalle} // Add onClick handler here
        >
         <IoIosInformationCircle /> &nbsp;
          Detalle
        </Button>
        {isFavorito && (
        <Button
          className="boton"
          variant="danger"
          onClick={props.onClickFavorito}
        >
          <FaRegHeart /> &nbsp;
          Sacar
        </Button>
      )}
      {/* Show 'Add to Favoritos' button if it's not in favoritos */}
      {!isFavorito && (
        <Button
          className="boton"
          variant="primary"
          onClick={props.onClickFavorito}
        >
          <FaHeart /> &nbsp;
         Agregar
        </Button>
      )}

    
      </Card.Body>
    </Card>
   
   
  );
}
export default FavoritoCards;
