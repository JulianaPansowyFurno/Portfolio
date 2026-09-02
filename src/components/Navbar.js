import React, { useState, useContext, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import "./styles.css"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import Badge from '@mui/material/Badge';
import { FaHeart } from "react-icons/fa";
import {favoritoContext} from "./favoritosContext";
import { CiFolderOn } from "react-icons/ci";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const {favorito} = useContext(favoritoContext);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="xl"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
         <Navbar.Brand as={Link} to="/" onClick={() => updateExpanded(false)} className="d-flex">
          <h3>Juliana Pansowy Furno</h3>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        > 
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Inicio
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Sobre mí
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/creaciones"
                onClick={() => updateExpanded(false)}
              >
                <CiFolderOn  style={{ marginBottom: "2px" }} /> Creaciones
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/favorito"
                onClick={() => updateExpanded(false)}
              >
                 <Badge  style={{ marginBottom: "2px" }} badgeContent={favorito.length} color="secondary"
                 anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}>
                  <FaHeart color="action" />
                </Badge>  Favorito
              </Nav.Link>
            </Nav.Item>

            <Nav.Item><Nav.Link as={Link} to="/recorrido" onClick={() => updateExpanded(false)}><CgFileDocument aria-hidden="true" /> Mi recorrido</Nav.Link></Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/JulianaPansowyFurno"
                target="_blank"
                rel="noreferrer"
                aria-label="Mi perfil de GitHub"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
