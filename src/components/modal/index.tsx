// Styles
import { useEffect } from "react";
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

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        console.log("Modal fechado", handleEsc);
      }
    };

    // Para que o event listener só seja adicionado quando o modal estiver aberto.
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      console.log("Modal aberto", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      console.log("Removendo listener", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <StyledModal data-is-open={isOpen} onClick={overlayClick}>
      <div className="modal-content">{children}</div>
    </StyledModal>
  );
}
