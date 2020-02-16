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
`;

export const MenuCategories = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const MenuItem = styled.li`
  margin: 0 10px;
`;

export const LinkItem = styled.a`
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: ${theme.colors.tertiary};
  }
`;

export const WelcomeText = styled.h2`
  padding-top: 60px;
  font-size: 30px;
  text-align: center;

  span {
    color: ${theme.colors.tertiary};
  }
`;

export const AreaCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;
