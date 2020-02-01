import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.section`
  height: 500px;
  width: 80%;
  margin: 0 auto;
  margin-top: 90px;
  padding: 30px 20px 10px 20px;
  background: ${theme.colors.primary};
  border: 3px solid ${theme.colors.secondary};
  border-radius: 15px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25),
    inset 0px 4px 40px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    font-size: 90px;
  }

  p {
    font-size: 30px;
    text-align: center;
    margin-top: 40px;
  }

  a {
    font-size: 20px;
    color: ${theme.colors.secondary};
    margin-top: 30px;

    &::after {
      content: "";
      width: 0;
      height: 1px;
      background: ${theme.colors.tertiary};
      display: block;
      margin: 5px auto;
    }

    &:hover::after {
      width: 100%;
      transition: all ease 0.5s;
    }

    &:hover {
      color: ${theme.colors.tertiary};
      transition: all ease 0.5s;
    }
  }
`;

export const Button = styled.button`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  background: #173146;
  border-radius: 5px;
  padding: 20px 40px;
  border: 2px solid ${theme.colors.secondary};
  margin-top: 60px;

  &:hover {
    background: ${theme.colors.secondary};
    transition: all ease 0.5s;
  }
`;
