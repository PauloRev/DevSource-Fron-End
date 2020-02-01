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
    margin-bottom: 30px;
  }

  a {
    font-size: 20px;
    color: ${theme.colors.secondary};
    margin-top: 15px;

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

export const Input = styled.input`
  ::-webkit-input-placeholder {
    color: #aaaaaa;
  }

  ::-webkit-input-placeholder {
    color: #aaaaaa;
  }

  background: transparent;
  color: #fff;
  font-size: 18px;
  height: 50px;
  width: 320px;
  padding: 10px 5px;
  margin-bottom: 20px;

  border: 2px solid ${theme.colors.secondary};
  border-radius: 5px;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: #173146;
  border-radius: 5px;
  height: 50px;
  width: 320px;
  padding: 10px;
  border: 2px solid ${theme.colors.secondary};

  &:hover {
    background: ${theme.colors.secondary};
    transition: all ease 0.5s;
  }
`;
