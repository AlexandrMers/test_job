import React, { FC, memo, ReactNode } from "react";
import styled from "styled-components/macro";

const ContainerDiv = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

interface ContainerComponentInterface {
  styles?: any;
  children: ReactNode;
}

const Container: FC<ContainerComponentInterface> = ({ children, styles }) => {
  return <ContainerDiv css={styles}>{children}</ContainerDiv>;
};

export default memo(Container);
