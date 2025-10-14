// Libs
import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
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
    width: 100%;
    max-width: 710px;
    height: 100%;
    max-height: 900px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: ${(props) => props.theme.colors.neutral[50]};
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: slide-down 0.3s ease-out;
    border: 1px solid ${(props) => props.theme.colors.neutral[200]};
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
      border-top-right-radius: 0.75rem;
      border-bottom-right-radius: 0.75rem;
      background-color: transparent;
    }

    &::-webkit-scrollbar-track {
      border-top-right-radius: 0.75rem;
      border-bottom-right-radius: 0.75rem;
      margin-block: 6px !important;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.neutral[300]};
      border-radius: 0.75rem;
    }
  }
`;
