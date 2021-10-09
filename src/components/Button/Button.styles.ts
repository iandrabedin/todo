import styled, { css } from "styled-components";

export const ButtonStyled = styled.button<{ variant }>`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 12px;

  ${({ variant }) => variant === "primary" && PrimaryButton}
`;

const PrimaryButton = css`
  border: 1px solid black;
  border-radius: 8px;
`;
