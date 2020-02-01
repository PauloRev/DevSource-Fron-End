import React, { useState } from "react";
import { Link } from "react-router-dom";

import theme from "../../styles/theme";

import { MdAccountCircle, MdAddCircle, MdDashboard } from "react-icons/md";

import { Container, Logo, Menu } from "./styles";

export default function Header() {
  const [activeItem, setActiveItem] = useState("DASHBOARD");

  function isActiveMenu(item) {
    if (activeItem === item) {
      return `${theme.colors.primary}`;
    }
  }

  return (
    <Container>
      <Logo>DevSource</Logo>
      <Menu>
        <ul>
          <li>
            <Link
              to="/share-content"
              style={{ color: isActiveMenu("SHARED_CONTENT") }}
              onClick={() => setActiveItem("SHARED_CONTENT")}
            >
              <MdAddCircle /> Compartilhar
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              style={{ color: isActiveMenu("DASHBOARD") }}
              onClick={() => setActiveItem("DASHBOARD")}
            >
              <MdDashboard /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/my-profile"
              style={{ color: isActiveMenu("MY_PROFILE") }}
              onClick={() => setActiveItem("MY_PROFILE")}
            >
              <MdAccountCircle /> Meu perfil
            </Link>
          </li>
        </ul>
      </Menu>
    </Container>
  );
}
