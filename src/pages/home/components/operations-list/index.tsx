// Libs
import { useTheme } from "styled-components";
import { FaFilter } from "react-icons/fa6";

// Components
import { Button } from "../../../../components/button";
import { Flex } from "../../../../components/flex";
import { Typography } from "../../../../components/typography";
import { OperationItem } from "./operation-item";

// Styles
import { StyledOperationsList } from "./styles";

export function OperationsList() {
  const { colors } = useTheme();
  return (
    <StyledOperationsList>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        gap="1rem"
        style={{ padding: "1.5rem 2rem 0 2rem" }}
      >
        <Typography
          fontSize="1.25rem"
          fontWeight="600"
          color={colors.neutral[950]}
        >
          Histórico de Operações
        </Typography>

        <Button
          onClick={() => {
            console.log("cliquei em filtros");
          }}
        >
          <FaFilter fontSize={20} />
          <Typography>Filtros</Typography>
        </Button>
      </Flex>

      <Flex direction="column" gap="2rem">
        <OperationItem
          value="+R$ 1.250"
          percentage="+2.8%"
          buy_asset="BTC"
          sell_asset="USDT"
          data="15 Jan 2024, 14:30"
          timeframe="15 minutos"
          strategy="Order Block + Liquidez"
        />

        <OperationItem
          value="+R$ 1.250"
          percentage="+2.8%"
          buy_asset="BTC"
          sell_asset="USDT"
          data="15 Jan 2024, 14:30"
          timeframe="15 minutos"
          strategy="Order Block + Liquidez"
        />
      </Flex>
    </StyledOperationsList>
  );
}
