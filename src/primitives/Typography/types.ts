import { ReactNode } from "react";

export enum TypographyTypes {
  REGULAR_TITLE = "regular_title",
  BOLD_TITLE = "bold_title",
  REGULAR = "regular",
  BOLD = "bold"
}

export interface TypographyPropsComponentInterface {
  type: TypographyTypes;
  children: ReactNode;
}
