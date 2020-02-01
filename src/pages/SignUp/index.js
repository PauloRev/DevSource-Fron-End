import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Input } from "./styles";

export default function SignUp() {
  return (
    <Container>
      <h1>DevSource</h1>
      <Input placeholder="Seu nome de usuário do Github" type="text" />
      <Input placeholder="Seu e-mail" type="email" />
      <Input placeholder="Sua senha secreta" type="password" />
      <Button>Cadastrar-se</Button>
      <Link to="/sign-in">Já tenho uma conta</Link>
    </Container>
  );
}
