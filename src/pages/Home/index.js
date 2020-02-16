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
      <Link to="/sign-in">
        <Button>Entre e compartilhe</Button>
      </Link>
      <Link to="/sign-up">
        <a className="link">Crie uma conta</a>
      </Link>
    </Container>
  );
}
