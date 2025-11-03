// Libs
import { useTheme } from "styled-components";
import { FaChartLine } from "react-icons/fa6";
import { RxExit } from "react-icons/rx";
import { LuSettings } from "react-icons/lu";
import { useState } from "react";

// Components
import { Flex } from "../flex";
import { Typography } from "../typography";
import { UserOptions } from "../user-options";
import { MenuPopup } from "../menu-popup";

// Styles
import { StyledHeader } from "./styles";

export function Header() {
  const { colors } = useTheme();

  const [controlledIsOpen, setControlledIsOpen] = useState(false);
  console.log(controlledIsOpen, "Estado controlado do MenuPopup no Header");

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

        <MenuPopup
          onChange={() => {
            setControlledIsOpen(!controlledIsOpen);
          }}
          isOpen={controlledIsOpen}
          trigger={
            <UserOptions
              onClick={() => {
                console.log("User options clicked");
              }}
              userName="lohane bala de icekiss"
            />
          }
        >
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
      </div>
    </StyledHeader>
  );
}
