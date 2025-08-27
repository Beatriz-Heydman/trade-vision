import styled from "styled-components";

export const StyledLoginPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000217;
  display: flex;
  justify-content: center;
  align-items: center;

  .login__container {
    max-width: 416px;
    width: 100%;
    max-height: 600px;
    height: 100%;
    border: 2px solid #11186f;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 2.5rem;
    flex-direction: column;
    gap: 2rem;
  }

  .button__submit {
    width: 100%;
    height: 3rem;
    background-color: #3c46cc;
    border: none;
    border-radius: 0.75rem;
    font-size: 1rem;
    color: #fff;
    font-weight: 600;
    transition: all ease 0.2s;

    &:hover {
      background-color: #878ff5;
    }

    &:active {
      transform: translateY(2px) scaleX(0.99);

      background-color: #878ff5;
    }
  }
`;
