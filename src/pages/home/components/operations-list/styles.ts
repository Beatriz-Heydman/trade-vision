// Libs
import styled from "styled-components";

export const StyledOperationsList = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral[100]};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

  .graphic {
    width: 48px;
    height: 48px;
    border-radius: 0.75rem;
  }
`;
