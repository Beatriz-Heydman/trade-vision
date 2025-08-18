//Components
import { Flex } from "../../components/flex";
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

        <Flex direction="column" gap="98px">
          <Flex direction="column" gap="1rem">
            <Flex direction="column" gap="0.75rem">
              <Typography>Usuário</Typography>
              <input type="text" />
            </Flex>

            <Flex direction="column" gap="0.75rem">
              <Typography>Senha</Typography>
              <input type="password" />
            </Flex>
          </Flex>

          <button>Enviar</button>
        </Flex>
      </div>
    </StyledLoginPage>
  );
}
