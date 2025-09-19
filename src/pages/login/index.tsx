// Libs
import { useTheme } from "styled-components";
import { useState } from "react";

//Components
import { Flex } from "../../components/flex";
import { Input } from "../../components/input";
import { SwitchOptions } from "../../components/switch-options";
import { Typography } from "../../components/typography";

//Styles
import { StyledLoginPage } from "./styles";
import { Button } from "../../components/button";

export function LoginPage() {
  const [isCreateAccount, setIsCreateAccount] = useState<boolean>(false);

  const { colors } = useTheme();

  return (
    <StyledLoginPage>
      <div className="login__container">
        <Flex style={{ width: "100%" }} gap="2rem" direction="column">
          <Typography
            fontSize="1.5rem"
            fontWeight="600"
            color={colors.neutral[50]}
          >
            Olá, bem-vindo
          </Typography>

          <SwitchOptions
            checked={isCreateAccount}
            onChange={(checked) => setIsCreateAccount(checked)}
            leftLabel="Login"
            rightLabel="Criar conta"
          />
        </Flex>

        <Flex style={{ width: "100%" }} direction="column" gap="98px">
          <Flex style={{ width: "100%" }} direction="column" gap="1rem">
            <Input
              label="Usuário"
              placeholder="Digite seu usuário"
              type="text"
            />
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
            />
          </Flex>

          <Button
            variant="solid"
            onClick={() => {
              console.log("cliquei em enviar");
            }}
          >
            Enviar
          </Button>
        </Flex>
      </div>
    </StyledLoginPage>
  );
}
