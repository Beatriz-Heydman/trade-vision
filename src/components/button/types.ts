// Libs
import type { HTMLAttributes } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: "ghost" | "outline" | "solid";
};
