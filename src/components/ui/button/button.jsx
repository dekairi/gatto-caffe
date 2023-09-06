import React from "react";
import { StyledButton } from "./styles";

const Button = ({ children, link, innerRef, maxWidth, className, onClick, ...props }) => {
  return (
    <StyledButton
      ref={innerRef}
      {...props}
      $maxWidth={maxWidth}
      {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
