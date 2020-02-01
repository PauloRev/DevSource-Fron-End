import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Body, Footer, Button } from "./styles";

export default function Card() {
  return (
    <Container>
      <Header>
        <Link to="/profile">@PauloRev</Link>
        <strong>Front-End</strong>
      </Header>
      <Body>
        <h3>Curso de React JS</h3>
        <p>
          Dê inicio ao React JS com um curso feito da comunidade totalmente
          grátis para você :)
        </p>
      </Body>
      <Footer>
        <Button>Conferir</Button>
      </Footer>
    </Container>
  );
}
