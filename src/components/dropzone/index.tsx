// Libs
import { useTheme } from "styled-components";
import { BsImages } from "react-icons/bs";

// Components
import { Flex } from "../flex";
import { Typography } from "../typography";

// Styles
import { StyledDropzone } from "./styles";

// Types
import type { DropzoneProps } from "./types";

export function Dropzone({ label }: DropzoneProps) {
  const { colors } = useTheme();

  return (
    <StyledDropzone>
      <Typography fontSize="1rem" fontWeight="500" color={colors.neutral[950]}>
        {label}
      </Typography>

      <div className="dropzone-container">
        <input className="dropzone-input" type="file" accept="image/*" />

        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap="1.5rem"
        >
          <BsImages size={65} color={colors.neutral[300]} />
          <Flex direction="column" alignItems="center" gap="0.25rem">
            <Typography
              fontSize="1rem"
              fontWeight="500"
              color={colors.neutral[900]}
            >
              Selecione ou arraste uma imagem
            </Typography>

            <Typography
              fontSize="0.75rem"
              fontWeight="400"
              color={colors.neutral[700]}
            >
              Formatos aceitos: PNG, JPEG, JPG e SVG
            </Typography>
          </Flex>
        </Flex>
      </div>
    </StyledDropzone>
  );
}
