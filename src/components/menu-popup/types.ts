// Libs
import type { HTMLAttributes, ReactNode } from "react";

export type MenuPopupProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  trigger: ReactNode;
  isOpen?: boolean;
  onChange: (isOpen: boolean) => void;
};
