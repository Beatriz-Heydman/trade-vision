// Libs
import styled from "styled-components";

export const StyledUserOptions = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.neutral[400]};
  cursor: pointer;
`;
