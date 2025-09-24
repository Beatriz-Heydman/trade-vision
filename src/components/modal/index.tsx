// Styles
import { StyledModal } from "./styles";

// Types
import type { ModalProps } from "./types";

export function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <StyledModal data-is-open={isOpen} onClick={onClose}>
      <div className="modal-content">Conteúdo do Modal</div>
    </StyledModal>
  );
}
