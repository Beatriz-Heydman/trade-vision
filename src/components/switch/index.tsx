// Styles
import { StyledSwitch } from "./styles";

// Types
import type { SwitchProps } from "./types";

export function Switch({ checked, onChange, disabled }: SwitchProps) {
  return (
    <StyledSwitch
      data-checked={checked}
      onClick={onChange}
      data-disabled={disabled}
    >
      <div className="switch-thumb"></div>
    </StyledSwitch>
  );
}
