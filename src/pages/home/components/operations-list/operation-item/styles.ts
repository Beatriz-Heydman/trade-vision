// Libs
import styled from "styled-components";

export const StyledOperationItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-top: 2px solid ${({ theme }) => theme.colors.neutral[100]};
  padding: 1.5rem 1.5rem 0 1.5rem;
  gap: 2rem;

  &:last-child {
    border-radius: 0 0 0.5rem 0.5rem;
    padding: 1.5rem;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: flex-start;

    .operation__item-content {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 1.5rem;
    }

    .operation__item-gain {
      align-items: flex-start;
    }

    .operation__item-actions {
      width: 100%;
      justify-content: space-between;
    }
  }
`;
