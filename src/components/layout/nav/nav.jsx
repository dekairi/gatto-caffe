import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/const";
import { StyledButton } from "./styles";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton maxWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Home
      </StyledButton>
    )
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button maxWidth={260} key={AppRoute.BUY} link={AppRoute.BUY}>
        Acquista
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      <nav>
        {buttons
          .filter((button) => button.to !== pageUrl)
          .map((button) => button.button)}
      </nav>
    </nav>
  );
}

export default Nav;
