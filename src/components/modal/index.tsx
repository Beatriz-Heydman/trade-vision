// Styles
import { StyledModal } from "./styles";

// Types
import type { ModalProps } from "./types";

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <StyledModal data-is-open={isOpen} onClick={onClose}>
      {children}
    </StyledModal>
  );
}
