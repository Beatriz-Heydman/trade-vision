// Libs
import styled from "styled-components";

export const StyledButton = styled.button`
  min-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(90deg, #2563eb, #9333ea);
  color: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: none;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background: linear-gradient(90deg, #9333ea, #2563eb);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px) scaleX(0.99);
    background: linear-gradient(90deg, #9333ea, #2563eb);
  }
`;
