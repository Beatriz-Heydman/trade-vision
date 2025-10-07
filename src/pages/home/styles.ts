// Libs
import styled from "styled-components";

export const StyledHomePage = styled.div`
  width: 100vw;
  height: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.neutral[50]};

  .container__home {
    max-width: 1440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .section__top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 1.5rem;
  }

  .close-icon {
    font-size: 38px;
    color: ${({ theme }) => theme.colors.neutral[800]};
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover {
      filter: brightness(1.3);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  @media (max-width: 900px) {
    .section__top {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
