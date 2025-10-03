// Libs
import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &[data-variant="ghost"] {
    width: fit-content;
    background: transparent;
    border: none;

    .icon {
      transition: all ease 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }

    &:hover {
      .star {
        color: #d5b900 !important;
      }

      .paper {
        color: #006598 !important;
      }

      .edit {
        color: #00a000 !important;
      }

      .trash {
        color: #a60000 !important;
      }
    }
  }

  &[data-variant="outline"] {
    width: fit-content;
    gap: 0.5rem;
    border: 2px solid ${({ theme }) => theme.colors.neutral[100]};
    border-radius: 0.75rem;
    background-color: transparent;
    padding: 0.5rem 1rem;
    transition: all ease 0.3s;

    &:hover {
      transform: translateY(-1px);
      background: ${({ theme }) => theme.colors.neutral[50]};
      border-color: ${({ theme }) => theme.colors.neutral[200]};
    }

    &:active {
      transform: translateY(1px) scaleX(0.99);
      background: ${({ theme }) => theme.colors.neutral[50]};
      border-color: ${({ theme }) => theme.colors.neutral[200]};
    }
  }

  &[data-variant="solid"] {
    width: fit-content;
    background: ${({ theme }) => theme.colors.blue[400]};
    border: none;
    border-radius: 0.75rem;
    padding: 1rem 1.5rem;
    gap: 0.5rem;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.neutral[50]};
    font-size: 1rem;
    font-weight: 500;

    transition: all ease 0.3s;

    &:hover {
      filter: brightness(1.3);
      transform: translateY(-1px);
    }

    &:active {
      filter: brightness(1.3);
      transform: translateY(1px) scaleX(0.99);
    }
  }
`;
