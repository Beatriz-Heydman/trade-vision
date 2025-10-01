// Styles
import { StyledModal } from "./styles";

// Types
import type { ModalProps } from "./types";

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const overlayClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <StyledModal data-is-open={isOpen} onClick={overlayClick}>
      <div className="modal-content">{children}</div>
    </StyledModal>
  );
}
