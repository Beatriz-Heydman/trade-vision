// Libs
import { useTheme } from "styled-components";

// Components
import { Typography } from "../typography";

// Styles
import { StyledUserOptions } from "./styles";

// Types
import type { UserOptionsProps } from "./types";

export function UserOptions({ userName, onClick }: UserOptionsProps) {
  const { colors } = useTheme();

  const nameInitials = userName
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <StyledUserOptions onClick={onClick}>
      <Typography fontSize="0.9rem" color={colors.neutral[50]}>
        {nameInitials}
      </Typography>
    </StyledUserOptions>
  );
}
