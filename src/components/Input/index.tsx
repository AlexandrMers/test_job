import React, { FC, ChangeEvent, memo, useCallback } from "react";
import styled, { css } from "styled-components/macro";

import { getColor } from "libs/colors";
import {
  errorFieldStyles,
  fullHeight,
  fullWidth,
  inputDecoratedStyles,
  position
} from "libs/styles";
import Block from "../../primitives/Block";

const InputStyled = styled.input`
  ${inputDecoratedStyles};
  
  ${({ error }: Omit<InputComponentPropsInterface, "onChange">) =>
    !!error &&
    css`
      border: 1px solid red;
    `};
  
  ::-webkit-input-placeholder {
    color: ${getColor("greyDarken1")};
  }
  ::-moz-placeholder {
    color: ${getColor("greyDarken1")};
  }
  :-moz-placeholder {
    color: ${getColor("greyDarken1")};
  :-ms-input-placeholder {
    color: ${getColor("greyDarken1")};
  }
`;

export enum InputTypes {
  TEXT = "text",
  NUMBER = "number",
  PASSWORD = "password",
  EMAIL = "email"
}

interface InputComponentPropsInterface {
  onChange: (value: string) => void;
  name: string;
  placeholder?: string;
  type?: InputTypes;
  styles?: any;
  value?: string;
  error?: string;
}

const Input: FC<InputComponentPropsInterface> = ({
  onChange: onChangeProps,
  name,
  type = InputTypes.TEXT,
  placeholder,
  styles,
  value,
  error
}) => {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChangeProps(e.target.value);
    },
    [onChangeProps]
  );

  return (
    <Block styles={[fullHeight, fullWidth, position("relative")]}>
      <InputStyled
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        css={styles}
        value={value}
        error={error}
      />
      {error && <span css={errorFieldStyles}>{error}</span>}
    </Block>
  );
};

export default memo(Input);
