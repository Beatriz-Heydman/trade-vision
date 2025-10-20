// Libs
import styled from "styled-components";

// Types

export const StyledMenuPopup = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral[100]};
  transition: opacity 0.3s ease;
  position: absolute;
  bottom: -110px;
  right: 0px;
  z-index: 10;
`;
