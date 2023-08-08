import React, { useContext } from "react";
import { styled } from "styled-components";
import colors from "../../utils/style/colors";
import { ThemeContext } from "../../utils/context";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 60px;
`;

const NightMododeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`;
const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <FooterContainer>
      <NightMododeButton onClick={() => toggleTheme()}>
        Changer de mode {theme === "light" ? "☀️" : "🌙"}
      </NightMododeButton>
    </FooterContainer>
  );
};

export default Footer;
