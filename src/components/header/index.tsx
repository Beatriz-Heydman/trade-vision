// Libs
import { useTheme } from "styled-components";
import { FaChartLine } from "react-icons/fa6";

// Components
import { Flex } from "../flex";
import { Typography } from "../typography";
import { UserOptions } from "../user-options";

// Styles
import { StyledHeader } from "./styles";

export function Header() {
  const { colors } = useTheme();

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

        <UserOptions userName="lohaine bala de ice kiss" />
      </div>
    </StyledHeader>
  );
}
