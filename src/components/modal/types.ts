// Libs
import type { HTMLAttributes, ReactNode } from "react";

export type ModalProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
