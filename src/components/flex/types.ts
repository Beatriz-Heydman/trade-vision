export type FlexProps = {
  gap?: string;
  flexWrap?: "nowrap" | "wrap";
  direction?: "row" | "column";
  alignItems?: "center" | "flex-start" | "flex-end";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
};
