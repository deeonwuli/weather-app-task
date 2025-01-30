import React from "react";
import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  secondary?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: ButtonProps) => {
  const { children, secondary, onClick } = props;

  return (
    <StyledButton secondary={secondary ? "true" : ""} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ secondary?: string }>`
  all: unset;
  background-color: ${(props) =>
    props.secondary === "true" ? "#F0F2F5" : "#33b2e5"};
  color: #121717;
  padding: 8px 16px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
`;
