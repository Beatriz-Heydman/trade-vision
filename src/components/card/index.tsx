// Components
import { Typography } from "../typography";
import { Flex } from "../flex";

// Styles
import { StyledCard } from "./styles";

// Types
import type { CardProps } from "./types";

export function Card({ title, value, icon, color, textColor }: CardProps) {
  return (
    <StyledCard color={color} textColor={textColor}>
      <Flex direction="column" alignItems="flex-start">
        <Typography color="#4B5563" fontSize="1rem" fontWeight="500">
          {title}
        </Typography>
        <span className="value">{value}</span>
      </Flex>

      <div className="container__icon">{icon}</div>
    </StyledCard>
  );
}
