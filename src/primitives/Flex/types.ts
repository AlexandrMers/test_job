import { ReactNode } from "react";
import { ALIGN_CONTENT } from "./index";

export interface FlexComponentPropsInterface {
  jc?: ALIGN_CONTENT;
  ai?: ALIGN_CONTENT;
  flexWrap?: boolean;
  children: ReactNode;
  styles?: any;
}
