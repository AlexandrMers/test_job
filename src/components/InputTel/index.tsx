import React, { ChangeEvent, FC, memo, useCallback } from "react";
import InputMask from "react-input-mask";
import "styled-components/macro";

import Block from "primitives/Block";

import {
  border,
  errorFieldStyles,
  fullHeight,
  inputDecoratedStyles,
  position
} from "libs/styles";
import { getColor } from "libs/colors";

interface InputTelComponentPropsInterface {
  name: string;
  onChange: (value: string) => void;
  placeholder?: string;
  wrapStyles?: any;
  mask: string;
  value?: string;
  error?: string;
}

const InputTel: FC<InputTelComponentPropsInterface> = ({
  placeholder,
  onChange: onChangeProp,
  name,
  wrapStyles,
  mask,
  value: valueProp,
  error
}) => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onChangeProp(value);
    },
    [onChangeProp]
  );

  return (
    <Block styles={[wrapStyles, position("relative")]}>
      <InputMask
        width="100%"
        css={[
          inputDecoratedStyles,
          fullHeight,
          error && border(1, getColor("red"))
        ]}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        mask={mask}
        value={valueProp}
      />
      {error && <span css={errorFieldStyles}>{error}</span>}
    </Block>
  );
};

export default memo(InputTel);
