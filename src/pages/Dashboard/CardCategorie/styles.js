import styled from "styled-components";
import theme from "../../../styles/theme";

export const CardContainer = styled.section`
  height: 200px;
  width: 20rem;
  margin: 0 auto;
  margin-top: 90px;
  padding: 10px;
  background: ${theme.colors.primary};
  border: 3px solid ${theme.colors.secondary};
  border-radius: 15px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25),
    inset 0px 4px 40px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 25px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  padding: 0 20px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background: #173146;
  border-radius: 5px;
  padding: 10px 40px;
  border: 2px solid ${theme.colors.secondary};

  &:hover {
    background: ${theme.colors.secondary};
    transition: all ease 0.5s;
  }
`;
