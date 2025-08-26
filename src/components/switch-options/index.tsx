// Libs
import { useEffect, useState } from "react";

// Styles
import { StyledSwitch } from "./styles";

// Types
import type { SwitchOptionsProps } from "./types";

export function SwitchOptions({
  leftLabel,
  rightLabel,
  onChange,
  checked: checkedProp = false,
}: SwitchOptionsProps) {
  const [isChecked, setIsChecked] = useState<boolean>(checkedProp);

  function changeSwitchValue(checked: boolean) {
    setIsChecked(checked);
    onChange?.(checked);
  }

  useEffect(() => {
    setIsChecked(checkedProp);
  }, [checkedProp]);

  return (
    <StyledSwitch checked={isChecked}>
      <div className="option-indicator" />

      <button
        className="option"
        onClick={() => {
          changeSwitchValue(false);
        }}
      >
        {leftLabel}
      </button>
      <button
        className="option"
        onClick={() => {
          changeSwitchValue(true);
        }}
      >
        {rightLabel}
      </button>
    </StyledSwitch>
  );
}
