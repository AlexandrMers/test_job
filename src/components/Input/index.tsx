import React, { FC, memo } from "react";
import styled from "styled-components";

const InputStyled = styled.input``;

const Input: FC = () => {
  return <InputStyled />;
};

export default memo(Input);
