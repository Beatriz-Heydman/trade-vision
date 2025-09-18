// Libs
import { FaRegStar, FaRegTrashAlt } from "react-icons/fa";
import { PiNewspaper } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";

// Components
import { Flex } from "../../../../../components/flex";
import { Typography } from "../../../../../components/typography";
import { Button } from "../../../../../components/button";

// Styles
import { StyledOperationItem } from "./styles";
import { useTheme } from "styled-components";

// Types
import type { OperationItemProps } from "./types";

export function OperationItem({
  value,
  percentage,
  data,
  timeframe,
  strategy,
  buy_asset,
  sell_asset,
}: OperationItemProps) {
  const { colors } = useTheme();

  return (
    <StyledOperationItem>
      <Flex gap="2.5rem">
        <Flex direction="column" alignItems="flex-end" gap="0.25rem">
          <Typography
            fontSize="1rem"
            fontWeight="600"
            color={colors.neutral[950]}
          >
            Ganho
          </Typography>
          <Typography fontSize="1rem" fontWeight="600" color="#10B981">
            {value}
          </Typography>
          <Typography
            fontSize="0.87rem"
            fontWeight="400"
            color={colors.neutral[700]}
          >
            {percentage}
          </Typography>
        </Flex>

        <Flex direction="column" gap="0.25rem" alignItems="flex-start">
          <Typography
            fontSize="1rem"
            fontWeight="600"
            color={colors.neutral[950]}
          >
            Par
          </Typography>

          <Flex justifyContent="flex-start" gap="0.5rem">
            <img
              className="graphic"
              src="public/assets/images/graphic.png"
              alt=""
            />
            <Flex direction="column" gap="0.125rem" alignItems="flex-start">
              <Typography
                fontSize="1rem"
                fontWeight="500"
                color={colors.neutral[900]}
              >
                {buy_asset} / {sell_asset}
              </Typography>
              <Typography
                fontSize="0.75rem"
                fontWeight="400"
                color={colors.neutral[700]}
              >
                {data}
              </Typography>
            </Flex>
          </Flex>
        </Flex>

        <Flex direction="column" gap="0.75rem" alignItems="flex-start">
          <Typography
            fontSize="1rem"
            fontWeight="600"
            color={colors.neutral[950]}
          >
            Timeframe
          </Typography>

          <Typography
            fontSize="1rem"
            fontWeight="500"
            color={colors.neutral[700]}
            style={{ padding: "0.25rem 0" }}
          >
            {timeframe}
          </Typography>
        </Flex>

        <Flex direction="column" gap="0.75rem" alignItems="flex-start">
          <Typography
            fontSize="1rem"
            fontWeight="600"
            color={colors.neutral[950]}
          >
            Estratégia
          </Typography>

          <Typography
            fontSize="1rem"
            fontWeight="500"
            color={colors.neutral[700]}
            style={{ padding: "0.25rem 0" }}
          >
            {strategy}
          </Typography>
        </Flex>
      </Flex>

      <Flex>
        <Flex>
          <Button onClick={() => console.log("clicou em favoritar")}>
            <FaRegStar fontSize={23} color={colors.neutral[700]} />
          </Button>

          <Button onClick={() => console.log("clicou em ler mais")}>
            <PiNewspaper fontSize={23} color={colors.neutral[700]} />
          </Button>

          <Button onClick={() => console.log("clicou em editar")}>
            <AiOutlineEdit fontSize={23} color={colors.neutral[700]} />
          </Button>
        </Flex>

        <Button onClick={() => console.log("clicou em excluir")}>
          <FaRegTrashAlt fontSize={23} color={colors.neutral[700]} />
        </Button>
      </Flex>
    </StyledOperationItem>
  );
}
