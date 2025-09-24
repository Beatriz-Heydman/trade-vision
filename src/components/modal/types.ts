// Libs
import type { HTMLAttributes } from "react";

export type ModalProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  onClose: () => void;
};
