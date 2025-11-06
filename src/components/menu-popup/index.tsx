// Styles
import { useEffect, useState } from "react";
import { StyledMenuPopup } from "./styles";

// Types
import type { MenuPopupProps } from "./types";

export function MenuPopup({
  children,
  trigger,
  isOpen: controlledIsOpen,
  onChange,
}: MenuPopupProps) {
  // Controlado internamente se não for controlado externamente
  const [openStateInternal, setOpenStateInternal] = useState(false);
  console.log(
    openStateInternal,
    "Cliquei no trigger para abrir ou fechar o menu popup"
  );

  // Verifica se o componente está sendo controlado externamente
  const isControlled = controlledIsOpen !== undefined;

  // Determina o estado atual de abertura do menu popup
  const isOpen = isControlled ? controlledIsOpen : openStateInternal;

  useEffect(() => {
    if (isControlled) {
      setOpenStateInternal(controlledIsOpen);
    }
  }, [controlledIsOpen, isControlled]);

  const menuPopupOpenState = () => {
    const newstate = !isOpen;

    if (!isControlled) {
      setOpenStateInternal(newstate);
    }

    onChange?.(newstate);
  };

  return (
    <StyledMenuPopup>
      <div
        className="component-trigger"
        onClick={() => {
          menuPopupOpenState();
        }}
      >
        {trigger}
      </div>
      <div className="menu-popup-content" data-is-open={isOpen}>
        {children}
      </div>
    </StyledMenuPopup>
  );
}
