// Styles
import { StyledMenuPopup } from "./styles";

// Types
import type { MenuPopupProps } from "./types";

export function MenuPopup({ children }: MenuPopupProps) {
  return <StyledMenuPopup>{children}</StyledMenuPopup>;
}
