// Styles
import { StyledButton } from "./styles";

// Types
import type { ButtonProps } from "./types";

export function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
