import { ReactNode } from "react";

export interface ButtonComponentPropsInterface {
  text: string;
  htmlTypeBtn: "button" | "submit" | "reset";
  children?: ReactNode;
  onClick?: () => void;
  maxWidth?: string;
  styles?: any;
  typeDecoration?: "green" | "blue";
}
