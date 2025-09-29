// Libs
import styled from "styled-components";

export const StyledUserOptions = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.neutral[400]};
  cursor: pointer;

  &:hover {
  }
`;
