// Libs
import { PiPlusBold } from "react-icons/pi";
import { HiTrendingUp } from "react-icons/hi";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { LuChartBar } from "react-icons/lu";
import { FaTrophy } from "react-icons/fa6";

//Components
import { Button } from "../../components/button";
import { Flex } from "../../components/flex";
import { Typography } from "../../components/typography";

// Styles
import { StyledHomePage } from "./styles";
import { Card } from "../../components/card";

export function HomePage() {
  return (
    <StyledHomePage>
      <div className="section__top">
        <Flex
          style={{ width: "100%" }}
          direction="column"
          alignItems="flex-start"
          gap="0.5rem"
        >
          <Typography
            fontWeight="600"
            fontSize="1.8rem"
            color="#000"
            lineHeight="120%"
          >
            Visão Geral das Operações
          </Typography>

          <Typography fontWeight="400" fontSize="1rem" color="#4B5563">
            Acompanhe seus trades e performance em tempo real
          </Typography>
        </Flex>

        <Button
          onClick={() => {
            console.log("clicou");
          }}
        >
          <PiPlusBold color="#fff" fontSize="1.2rem" />
          <Typography fontSize="1rem" fontWeight="400" fontFamily="Poppins">
            Cadastrar Operação
          </Typography>
        </Button>
      </div>

      <Flex
        style={{ minWidth: "100%" }}
        justifyContent="space-between"
        alignItems="center"
        gap="1rem"
        flexWrap="wrap"
      >
        <Card
          title="Total P&L"
          value="+R$ 12.450"
          icon={<HiTrendingUp color="#10b981" size={23} />}
          color="#DCFCE7"
          textColor="#10B981"
        />
        <Card
          title="Taxa de Acerto"
          value="68%"
          icon={<RxQuestionMarkCircled color="#2563eb" size={23} />}
          color="#DBEAFE"
          textColor="#000"
        />
        <Card
          title="Trades Realizados"
          value="142"
          icon={<LuChartBar color="#9333ea" size={22} />}
          color="#F3E8FF"
          textColor="#000"
        />
        <Card
          title="Maior Gain"
          value="+R$ 2.890"
          icon={<FaTrophy color="#f59e0b" size={23} />}
          color="#FEF9C3"
          textColor="#10B981"
        />
      </Flex>
    </StyledHomePage>
  );
}
