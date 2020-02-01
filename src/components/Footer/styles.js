import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80%;
  max-width: 80%;
  margin: 15px auto;

  a {
    color: #fff;
    margin-right: 10px;
    font-size: 18px;

    &:hover {
      color: ${theme.colors.secondary};
      transition: all ease 0.5s;
    }
  }

  h5 {
    font-size: 18px;
  }
`;
