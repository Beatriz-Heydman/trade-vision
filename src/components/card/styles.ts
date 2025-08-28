// Libs
import styled from "styled-components";

// types
import type { StyledCardProps } from "./types";

export const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 286px;
  height: fit-content;
  border-radius: 0.75rem;
  background-color: #fff;
  border: 1px solid #f3f4f6;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  padding: 1.5rem 2rem;

  .value {
    color: ${({ textColor = "#000" }) => textColor};
    font-weight: 600;
    font-size: 1.5rem;
  }

  .container__icon {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ color = "#bababa" }) => color};
    border-radius: 0.5rem;
  }
`;
