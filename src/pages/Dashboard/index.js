import React, { useState } from "react";
import { Link } from "react-router-dom";
import jwt from "jwt-decode";
import theme from "../../styles/theme";
import {
  Container,
  MenuCategories,
  MenuItem,
  LinkItem,
  WelcomeText,
  AreaCards
} from "./styles";

import Header from "../../components/Header";
import CardCategorie from "./CardCategorie";

const content = [
  {
    categorie: "front-end",
    items: ["item 1", "item 2", "item 3", "item 4", "item 5"]
  },
  {
    categorie: "back-end",
    items: ["item 1", "item 2", "item 3", "item 4", "item 5"]
  }
];

const categories = [
  "Front-End",
  "Back-End",
  "Mobile",
  "UI/UX",
  "Banco de dados",
  "Devops",
  "Cloud"
];

const cardsTitle = ["Cursos", "Livros", "Grupos"];

export default function Dashboard() {
  const [isActiveItem, setIsActiveItem] = useState("");

  const token = localStorage.getItem("@DevSource/token");
  const { name: username } = jwt(token);

  function isActiveMenu(item) {
    if (isActiveItem === item) {
      return `${theme.colors.tertiary}`;
    }
  }

  return (
    <>
      <Header isActive="DASHBOARD" />
      <Container>
        <MenuCategories>
          {categories.map((categorie, index) => (
            <MenuItem key={index}>
              <LinkItem
                style={{ color: isActiveMenu(categorie) }}
                onClick={() => setIsActiveItem(categorie)}
              >
                {categorie}
              </LinkItem>
            </MenuItem>
          ))}
        </MenuCategories>
        {!isActiveItem ? (
          <WelcomeText>
            Bem-vindo <span>{username}</span>! Selecione uma categoria <br />{" "}
            para ver o que os Devs estão compartilhando :)
          </WelcomeText>
        ) : (
          <AreaCards>
            {cardsTitle.map(cardTitle => (
              <CardCategorie title={cardTitle} categorie={isActiveItem} />
            ))}
          </AreaCards>
        )}
      </Container>
    </>
  );
}
