// Libs
import styled from "styled-components";

// Types
import type { SwitchOptionsProps } from "./types";

export const StyledSwitch = styled.div<SwitchOptionsProps>`
  height: 50px;
  border: 2px solid #3c46cc;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  cursor: pointer;
  position: relative;
  max-width: 275px;
  width: 100%;
  background-color: #010539;

  .option-indicator {
    right: ${(props) => (props.checked ? "-1px" : "calc(50% + 1px)")};
    width: 50%;
    height: 100%;
    background-color: #3c46cc;
    border-radius: 1.5rem;
    transition: all ease 0.3s;
    position: absolute;
    z-index: 1;
  }

  .option {
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 2;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.neutral[50]};
    width: 100%;
    height: 100%;
  }
`;
