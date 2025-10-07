// Libs
import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  .input {
    width: 100%;
    height: 3.25rem;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.neutral[400]};
    border-radius: 0.75rem;
    padding: 0.75rem;
    color: ${({ color, theme }) => color || theme.colors.neutral[950]};

    &:focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.colors.neutral[500]};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.neutral[400]};
    }

    &:disabled {
      background-color: #a9a9a9;
      border: none;
      cursor: not-allowed;

      &::placeholder {
        color: #626262;
      }
    }
  }
`;
