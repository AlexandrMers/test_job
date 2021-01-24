import React, { FC, ChangeEvent, memo, useCallback } from "react";
import styled from "styled-components/macro";

import { getColor } from "libs/colors";
import { inputDecoratedStyles } from "libs/styles";

const InputStyled = styled.input`
  ${inputDecoratedStyles};

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
}

const Input: FC<InputComponentPropsInterface> = ({
  onChange: onChangeProps,
  name,
  type = InputTypes.TEXT,
  placeholder,
  styles
}) => {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChangeProps(e.target.value);
    },
    [onChangeProps]
  );

  return (
    <InputStyled
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
      css={styles}
    />
  );
};

export default memo(Input);
