import React, { FC, memo } from "react";
import styled from "styled-components";

interface FlexComponentPropsInterface {}

const FlexDiv = styled.div`
  display: flex;
`;

const Flex: FC<FlexComponentPropsInterface> = ({ children }) => {
  return <FlexDiv>{children}</FlexDiv>;
};

export default memo(Flex);
