//Components
import { Flex } from "../../components/flex";
import { Input } from "../../components/input";
import { Typography } from "../../components/typography";

//Styles
import { StyledLoginPage } from "./styles";

export function LoginPage() {
  return (
    <StyledLoginPage>
      <div className="login__container">
        <Flex gap="2rem" direction="column">
          <Typography fontSize="1.5rem" fontWeight="600">
            Olá, bem-vindo
          </Typography>

          <Flex>
            <button>Login</button>
            <button>Criar conta</button>
          </Flex>
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

          <button>Enviar</button>
        </Flex>
      </div>
    </StyledLoginPage>
  );
}
