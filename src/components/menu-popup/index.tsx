// Styles
import { useState } from "react";
import { StyledMenuPopup } from "./styles";

// Types
import type { MenuPopupProps } from "./types";

export function MenuPopup({
  children,
  trigger,
  isOpen: controlledIsOpen,
  onChange,
}: MenuPopupProps) {
  const [openStateInternal, setOpenStateInternal] = useState(false);
  console.log(
    openStateInternal,
    "Cliquei no trigger para abrir ou fechar o menu popup"
  );

  const isOpen = controlledIsOpen ?? openStateInternal;

  const menuPopupOpenState = () => {
    const newstate = !isOpen;

    if (controlledIsOpen === undefined) {
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
