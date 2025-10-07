// Libs
import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease-out;
  position: fixed;
  top: 0;
  left: 0;

  &[data-is-open="true"] {
    opacity: 1;
    pointer-events: all;
  }

  &[data-is-open="false"] {
    opacity: 0;
    pointer-events: none;
  }

  .modal-content {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: ${(props) => props.theme.colors.neutral[50]};
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: slide-down 0.3s ease-out;
    border: 1px solid ${(props) => props.theme.colors.neutral[200]};
  }
`;
