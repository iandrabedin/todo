import React from "react";
import { ButtonStyled } from "./Button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "icon";
}

const Button = (props: ButtonProps) => {
  const { children, variant, ...rest } = props;
  return (
    <ButtonStyled {...rest} variant={variant}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
