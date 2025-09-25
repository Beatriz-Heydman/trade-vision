// Libs
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 65px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.053);
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[50]};
  background: ${({ theme }) => theme.colors.neutral[0]};
  padding: 0 2rem;
  position: sticky;
  top: 0;

  .header-content {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 40px;
    height: 40px;
    background: linear-gradient(90deg, #2563eb, #9333ea);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
