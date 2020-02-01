import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "./styles";

export default function Home() {
  return (
    <Container>
      <h1>DevSource</h1>
      <p>
        Compartilhar e conhecer o melhor que a comunidade <br /> Dev tem para
        você. Vamos lá!
      </p>
      <Link to="/share-content">
        <Button>Compartilhar</Button>
      </Link>
      <Link to="/dashboard">
        <a className="link">Conferir novidades</a>
      </Link>
    </Container>
  );
}
