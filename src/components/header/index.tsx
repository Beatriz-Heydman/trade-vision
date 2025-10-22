// Libs
import { useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { FaChartLine } from "react-icons/fa6";
import { RxExit } from "react-icons/rx";
import { LuSettings } from "react-icons/lu";

// Components
import { Flex } from "../flex";
import { Typography } from "../typography";
import { UserOptions } from "../user-options";
import { MenuPopup } from "../menu-popup";

// Styles
import { StyledHeader } from "./styles";

export function Header() {
  const { colors } = useTheme();

  const [menuPopupOpen, setMenuPopupOpen] = useState(false);

  const menuPopupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleCloseMenuPopup(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!menuPopupRef.current?.contains(target)) {
        setMenuPopupOpen(false);
      }
    }

    document.addEventListener("mousedown", handleCloseMenuPopup);

    return () =>
      document.removeEventListener("mousedown", handleCloseMenuPopup);
  }, []);

  return (
    <StyledHeader>
      <div className="header-content">
        <Flex gap="0.5rem" alignItems="center">
          <div className="logo">
            <FaChartLine color={colors.neutral[50]} fontSize={17} />
          </div>

          <Typography
            fontSize="1.25rem"
            color={colors.neutral[950]}
            fontWeight="600"
          >
            TradeTracker
          </Typography>
        </Flex>

        <div ref={menuPopupRef}>
          <UserOptions
            onClick={() => {
              setMenuPopupOpen(!menuPopupOpen);
            }}
            userName="lohane bala de icekiss"
          />

          {menuPopupOpen && (
            <MenuPopup>
              <nav className="menu-navigation">
                <a className="menu-item" href="Settings">
                  <LuSettings size={18} color={colors.neutral[950]} />
                  Configurações
                </a>

                <a className="menu-item" href="Logout">
                  <RxExit size={16} color={colors.neutral[950]} />
                  Sair
                </a>
              </nav>
            </MenuPopup>
          )}
        </div>
      </div>
    </StyledHeader>
  );
}
