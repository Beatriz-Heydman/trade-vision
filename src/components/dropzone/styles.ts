// Libs
import styled from "styled-components";

export const StyledDropzone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;

  .dropzone-input {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  .dropzone-container {
    width: 100%;
    height: fit-content;
    border-radius: 0.75rem;
    border: 2px dashed ${(props) => props.theme.colors.neutral[600]};
    background-color: transparent;
    padding: 2rem 1.5rem;
    cursor: pointer;
    transition: border-color 0.3s ease;

    &:hover {
      border-color: ${(props) => props.theme.colors.neutral[500]};
    }
  }
`;
