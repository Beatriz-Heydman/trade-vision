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

  .menu-navigation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0;
  }

  .menu-item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.neutral[950]};
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.neutral[0]};
    transition: all ease 0.3s;
    padding: 0.5rem 1.5rem;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[100]};
    }
  }

  .user-options-container {
    display: flex;
    flex-direction: column !important;
    justify-content: center;
  }
`;
