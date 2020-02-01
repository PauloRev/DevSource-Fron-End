import React from "react";
import { Container } from "./styles";

import { GoMarkGithub } from "react-icons/go";

export default function Footer() {
  return (
    <Container>
      <a>
        <GoMarkGithub />
      </a>
      <h5>DevSource @2020</h5>
    </Container>
  );
}
