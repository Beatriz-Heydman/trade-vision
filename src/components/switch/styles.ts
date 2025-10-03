// Libs
import styled from "styled-components";

// Types
import type { SwitchProps } from "./types";

export const StyledSwitch = styled.div<SwitchProps>`
  width: 52px;
  height: 28px;
  display: flex;
  align-items: center;
  padding: 0.3rem;
  border-radius: 3.25rem;
  position: relative;
  cursor: pointer;
  transition: all ease 0.3s;

  &[data-checked="true"] {
    background-color: ${({ theme }) => theme.colors.blue[400]};
    border: 2px solid ${({ theme }) => theme.colors.blue[400]};

    .switch-thumb {
      background-color: ${({ theme }) => theme.colors.neutral[50]};
      transform: translateX(21px);
    }
  }

  &[data-checked="false"] {
    background-color: ${({ theme }) => theme.colors.neutral[0]};
    border: 2px solid ${({ theme }) => theme.colors.neutral[400]};

    .switch-thumb {
      background-color: ${({ theme }) => theme.colors.neutral[400]};
      transform: translateX(0);
    }
  }

  &[data-disabled="true"] {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    border: 2px solid ${({ theme }) => theme.colors.neutral[200]};
    cursor: not-allowed;

    .switch-thumb {
      background-color: ${({ theme }) => theme.colors.neutral[200]};
      transform: translateX(0);
    }
  }

  .switch-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    transition: all ease 0.3s;
  }
`;
