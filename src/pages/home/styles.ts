// Libs
import styled from "styled-components";

export const StyledHomePage = styled.div`
  width: min(100vw, 1440px);
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .section__top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 1.5rem;
  }

  @media (max-width: 900px) {
    .section__top {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
