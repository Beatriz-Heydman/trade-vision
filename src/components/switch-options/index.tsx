import { StyledSwitch } from "./styles";

export function SwitchOptions() {
  return (
    <StyledSwitch>
      <input
        // checked
        // onChange={}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className="option_text">Login</span>
        <span className="option_text">Criar conta</span>
        <span className="react-switch-button"></span>
      </label>
    </StyledSwitch>
  );
}
