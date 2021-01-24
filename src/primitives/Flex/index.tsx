import React, { FC, memo } from "react";
import "styled-components/macro";

import { FlexDiv } from "./styled";

import { FlexComponentPropsInterface } from "./types";

export enum ALIGN_CONTENT {
  CENTER = "center",
  END = "flex-end",
  START = "flex-start",
  STRETCH = "stretch",
  BETWEEN = "space-between",
  AROUND = "space-around"
}

const Flex: FC<FlexComponentPropsInterface> = ({
  styles,
  children,
  ...restProps
}) => (
  <FlexDiv css={styles} {...restProps}>
    {children}
  </FlexDiv>
);

export default memo(Flex);
