import styled from "styled-components";

export const StyledLoginPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  .login__container {
    max-width: 416px;
    width: 100%;
    max-height: 600px;
    height: 100%;
    border: 2px solid #300350;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 2.5rem;
    flex-direction: column;
    gap: 2rem;
  }
`;
