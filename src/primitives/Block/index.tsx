import React, { FC, memo, ReactNode } from "react";
import styled from "styled-components/macro";

const BlockStyled = styled.div``;

interface BlockComponentPropsInterface {
  children: ReactNode;
  styles?: any;
  onClick?: () => void;
}

const Block: FC<BlockComponentPropsInterface> = ({
  children,
  styles,
  onClick
}) => {
  return (
    <BlockStyled css={styles} onClick={onClick}>
      {children}
    </BlockStyled>
  );
};

export default memo(Block);
