// Libs
import styled from "styled-components";

export const StyledSwitch = styled.div`
  user-select: none;
  color: #fff !important;
  width: 100%;

  .option_text {
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 2;
    height: 100%;
    align-items: center;
  }

  .react-switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;

    &:checked + .react-switch-label .react-switch-button {
      left: 100%;
      transform: translateX(-100%);
    }
  }
  .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;

    height: 38px;
    background: #000c2e;
    border-radius: 75px;
    position: relative;
    transition: background-color 0.2s;

    & .react-switch-button {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      border-radius: 75px;
      transition: 0.2s;
      background: #3c46cc;
      color: #fff !important;
    }
  }
`;
