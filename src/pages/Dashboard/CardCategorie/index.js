import React from "react";

import { CardContainer, Title, Description, Button } from "./styles";

export default function CardCategorie({ title, categorie }) {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>
        Venha conferir os {title.toLowerCase()} de {categorie.toLowerCase()} e
        aprender uma nova habilidade ainda hoje!
      </Description>
      <Button>Conferir {title.toLowerCase()}</Button>
    </CardContainer>
  );
}
