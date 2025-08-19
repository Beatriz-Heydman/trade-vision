// Components
import { Typography } from "../typography";

// Styles
import { StyledInput } from "./styles";

// Types
import type { InputProps } from "./types";

export function Input({ label, placeholder, type }: InputProps) {
  return (
    <StyledInput>
      <Typography fontWeight="600" fontSize="1rem">
        {label}
      </Typography>
      <input className="input" type={type} placeholder={placeholder} />
    </StyledInput>
  );
}
