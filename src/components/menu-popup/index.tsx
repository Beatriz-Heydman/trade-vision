// Libs
import { useEffect, useRef, useState } from "react";

// Styles
import { StyledMenuPopup } from "./styles";

// Types
import type { MenuPopupProps } from "./types";

export function MenuPopup({
  children,
  trigger,
  isOpen: controlledIsOpen,
  onChange,
}: MenuPopupProps) {
  const [openStateInternal, setOpenStateInternal] = useState(false); // Controlado internamente se não for controlado externamente

  const isControlled = controlledIsOpen !== undefined; // Verifica se o componente está sendo controlado externamente

  const menuRef = useRef<HTMLDivElement>(null); // Referência ao elemento do menu popup

  // Sincronização do estado interno e externo
  useEffect(() => {
    if (isControlled) {
      setOpenStateInternal(controlledIsOpen);
      console.log(controlledIsOpen, "Sincronizado");
    }
  }, [controlledIsOpen, isControlled]);

  // Função para alternar o estado de abertura do menu popup
  const menuPopupOpenState = () => {
    const newstate = !openStateInternal;

    if (!isControlled) {
      setOpenStateInternal(newstate);
    }

    onChange?.(newstate);
  };

  // Fechar o menu popup ao clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        openStateInternal &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        menuPopupOpenState();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openStateInternal]);

  return (
    <StyledMenuPopup>
      <div
        className="component-trigger"
        onClick={() => {
          menuPopupOpenState();
        }}
        ref={menuRef}
      >
        {trigger}
      </div>

      {openStateInternal && (
        <div className="menu-popup-content" data-is-open={openStateInternal}>
          {children}
        </div>
      )}
    </StyledMenuPopup>
  );
}
