import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "./styles";

import Header from "../../components/Header";

export default function ShareContent() {
  return (
    <>
      <Header isActive="SHARED_CONTENT" />
      <Container>
        <h1>DevSource</h1>
        <h2>ShareContent</h2>
        <p>
          Compartilhar e conhecer o melhor que a comunidade <br /> Dev tem para
          você. Vamos lá!
        </p>
        <Button>Compartilhar</Button>
        <a>Conferir novidades</a>
      </Container>
    </>
  );
}
