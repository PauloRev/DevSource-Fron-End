import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Input } from "./styles";

export default function SignIn() {
  return (
    <Container>
      <h1>DevSource</h1>
      <Input placeholder="Seu e-mail" type="email" />
      <Input placeholder="Sua senha secreta" type="password" />
      <Button>Entrar</Button>
      <Link to="/sign-up">Criar conta</Link>
    </Container>
  );
}
