import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80%;
  max-width: 80%;
  margin: 20px auto -70px auto;
`;

export const Logo = styled.h1`
  a {
    color: #fff;

    &:hover {
      color: ${theme.colors.primary};
      transition: all ease 0.5s;
    }
  }
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      margin-left: 15px;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        display: flex;
        align-self: center;
        justify-content: space-between;
        font-size: 20px;
        font-weight: bold;
        color: #fff;

        &:hover {
          color: ${theme.colors.primary};
          transition: all ease 0.5s;
        }
      }
    }
  }
`;
