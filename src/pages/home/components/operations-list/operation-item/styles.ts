// Libs
import styled from "styled-components";

export const StyledOperationItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-top: 2px solid ${({ theme }) => theme.colors.neutral[50]};
  padding: 1.5rem 2rem;
`;
