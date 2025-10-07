// Libs
import { useTheme } from "styled-components";

// Components
import { Typography } from "../typography";

// Styles
import { StyledInput } from "./styles";

// Types
import type { InputProps } from "./types";

export function Input({ label, placeholder, type, ...props }: InputProps) {
  const { colors } = useTheme();

  return (
    <StyledInput>
      <Typography fontWeight="500" fontSize="1rem" color={colors.neutral[950]}>
        {label}
      </Typography>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </StyledInput>
  );
}
