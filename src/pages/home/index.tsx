// Libs
import { useState } from "react";
import { useTheme } from "styled-components";
import { PiPlusBold } from "react-icons/pi";
import { HiTrendingUp } from "react-icons/hi";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { LuChartBar } from "react-icons/lu";
import { FaTrophy } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";
import { Select, MenuItem } from "@mui/material";

//Components
import { Button } from "../../components/button";
import { Flex } from "../../components/flex";
import { Typography } from "../../components/typography";
import { Card } from "../../components/card";
import { Modal } from "../../components/modal";
import { OperationsList } from "./components/operations-list";
import { Switch } from "../../components/switch";
import { Input } from "../../components/input";
import { Dropzone } from "../../components/dropzone";

// Styles
import { StyledHomePage } from "./styles";

export function HomePage() {
  const { colors } = useTheme();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [switchChecked, setSwitchChecked] = useState(false);

  return (
    <StyledHomePage>
      <div className="container__home">
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
              color={colors.neutral[950]}
              lineHeight="120%"
            >
              Visão Geral das Operações
            </Typography>

            <Typography
              fontWeight="400"
              fontSize="1rem"
              color={colors.neutral[700]}
            >
              Acompanhe seus trades e performance em tempo real
            </Typography>
          </Flex>

          <Button
            variant="solid"
            onClick={() => {
              setModalIsOpen(!modalIsOpen);
              console.log("cliquei em cadastrar");
            }}
          >
            <PiPlusBold color={colors.neutral[50]} fontSize="1.2rem" />
            Cadastrar Operação
          </Button>

          <Modal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(!modalIsOpen)}
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Typography
                fontSize="1.25rem"
                fontWeight="600"
                color={colors.neutral[950]}
              >
                Cadastrar Operação
              </Typography>
              <AiFillCloseCircle
                className="close-icon"
                onClick={() => setModalIsOpen(!modalIsOpen)}
              />
            </Flex>

            <Flex direction="column" gap="1.25rem" style={{ width: "100%" }}>
              <Flex gap="1.5rem" alignItems="center" style={{ width: "100%" }}>
                <Input label="Paridade" placeholder="Ex: EUR/USD" />
                <Input label="Data" type="date" placeholder="DD/MM/AAAA" />
              </Flex>

              <Flex gap="1.5rem" alignItems="center" style={{ width: "100%" }}>
                <Flex
                  direction="column"
                  gap="0.5rem"
                  alignItems="flex-start"
                  style={{ width: "100%" }}
                >
                  <Typography
                    fontSize="1rem"
                    fontWeight="500"
                    color={colors.neutral[950]}
                  >
                    Timeframe
                  </Typography>
                  <Select
                    sx={{
                      width: "100%",
                      borderRadius: "0.75rem",
                      ".MuiOutlinedInput-notchedOutline": {
                        border: `2px solid ${colors.neutral[400]}`,
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: colors.neutral[300],
                      },
                    }}
                    id="demo-controlled-open-select"
                  >
                    <MenuItem value={1}>Opção 1</MenuItem>
                    <MenuItem value={2}>Opção 2</MenuItem>
                    <MenuItem value={3}>Opção 3</MenuItem>
                  </Select>
                </Flex>

                <Flex
                  direction="column"
                  gap="0.5rem"
                  alignItems="flex-start"
                  style={{ width: "100%" }}
                >
                  <Typography
                    fontSize="1rem"
                    fontWeight="500"
                    color={colors.neutral[950]}
                  >
                    Estratégia
                  </Typography>
                  <Select
                    sx={{
                      width: "100%",
                      borderRadius: "0.75rem",
                      ".MuiOutlinedInput-notchedOutline": {
                        border: `2px solid ${colors.neutral[400]}`,
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: colors.neutral[300],
                      },
                    }}
                    id="demo-controlled-open-select"
                  >
                    <MenuItem value={1}>Opção 1</MenuItem>
                    <MenuItem value={2}>Opção 2</MenuItem>
                    <MenuItem value={3}>Opção 3</MenuItem>
                  </Select>
                </Flex>
              </Flex>

              <Flex
                gap="0.5rem"
                direction="column"
                alignItems="center"
                style={{ width: "100%" }}
              >
                <Flex
                  gap="1.5rem"
                  alignItems="center"
                  style={{ width: "100%" }}
                >
                  <Input label="Resultado" placeholder="USD" />
                  <Input label="Risco / Retorno" placeholder="Ex: 4.00" />
                </Flex>

                <Flex
                  alignItems="center"
                  justifyContent="flex-start"
                  gap="0.5rem"
                  style={{ width: "100%" }}
                >
                  <Switch
                    checked={switchChecked}
                    onChange={() => setSwitchChecked(!switchChecked)}
                  />
                  <Typography
                    fontSize="1rem"
                    fontWeight="500"
                    color={colors.neutral[800]}
                  >
                    Ganho
                  </Typography>
                </Flex>
              </Flex>
            </Flex>

            <Input label="Observações" placeholder="Escreva aqui" />

            <Dropzone label="Imagem da operação" />

            <Button variant="solid" style={{ width: "100%" }}>
              Concluir
            </Button>
          </Modal>
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
            textColor={colors.neutral[950]}
          />
          <Card
            title="Trades Realizados"
            value="142"
            icon={<LuChartBar color="#9333ea" size={22} />}
            color="#F3E8FF"
            textColor={colors.neutral[950]}
          />
          <Card
            title="Maior Gain"
            value="+R$ 2.890"
            icon={<FaTrophy color="#f59e0b" size={23} />}
            color="#FEF9C3"
            textColor="#10B981"
          />
        </Flex>
        <OperationsList />
      </div>
    </StyledHomePage>
  );
}
