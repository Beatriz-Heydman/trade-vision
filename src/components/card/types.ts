// Libs
import type { ReactNode } from "react";

export type CardProps = {
  title: string;
  value: string;
  icon: ReactNode;
  color: string;
  textColor: string;
};

export type StyledCardProps = {
  color: string;
  textColor: string;
};
