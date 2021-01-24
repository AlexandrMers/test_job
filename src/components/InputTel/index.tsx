import Block from "primitives/Block";
import React, { ChangeEvent, FC, memo, useCallback } from "react";
import InputMask from "react-input-mask";
import "styled-components/macro";

import { fullHeight, inputDecoratedStyles } from "../../libs/styles";

interface InputTelComponentPropsInterface {
  name: string;
  onChange: (value: string) => void;
  placeholder?: string;
  wrapStyles?: any;
  mask: string;
  value?: string;
}

const InputTel: FC<InputTelComponentPropsInterface> = ({
  placeholder,
  onChange: onChangeProp,
  name,
  wrapStyles,
  mask,
  value: valueProp
}) => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onChangeProp(value);
    },
    [onChangeProp]
  );

  return (
    <Block styles={wrapStyles}>
      <InputMask
        width="100%"
        css={[inputDecoratedStyles, fullHeight]}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        mask={mask}
        value={valueProp}
      />
    </Block>
  );
};

export default memo(InputTel);
