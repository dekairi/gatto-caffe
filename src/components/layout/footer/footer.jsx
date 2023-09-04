import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledSection, Copyright } from "./styles";

function Footer() {
  return (
    <StyledSection as="footer">
      <Logo />
      <Copyright>Creato 2021</Copyright>
    </StyledSection>
  );
}

export default Footer;
