// Styles
import { StyledButton } from "./styles";

// Types
import type { ButtonProps } from "./types";

export function Button({ children, variant = "solid", ...rest }: ButtonProps) {
  return (
    <StyledButton data-variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}
