// Libs
import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;
  display: flex;
  gap: 0.75rem;
  flex-direction: column;

  .input {
    width: 100%;
    height: 3.25rem;
    background-color: transparent;
    border: 1px solid #3c46cc;
    border-radius: 0.75rem;
    padding: 0.75rem;
    color: #fff;

    &:focus {
      outline: none;
      border: 1px solid #878ff5;
    }

    &:placeholder {
      color: #959595;
    }
  }
`;
