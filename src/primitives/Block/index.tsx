import React, { FC, memo, ReactNode } from "react";
import styled from "styled-components/macro";

const BlockStyled = styled.div``;

interface BlockComponentPropsInterface {
  children: ReactNode;
  styles?: any;
}

const Block: FC<BlockComponentPropsInterface> = ({ children, styles }) => {
  return <BlockStyled css={styles}>{children}</BlockStyled>;
};

export default memo(Block);
