import React, { FC, ChangeEvent, memo, useCallback } from "react";
import styled from "styled-components";
import { getColor } from "../../libs/colors";

const InputStyled = styled.input`
  background-color: ${getColor("greyLight")};
  width: 100%;
  display: block;
  padding: 15px;
  border-radius: 3px;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  line-height: 16px;
  font-weight: 400;
  color: ${getColor("colorBlack")};

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
}

const Input: FC<InputComponentPropsInterface> = ({
  onChange: onChangeProps,
  name,
  type = InputTypes.TEXT,
  placeholder
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
    />
  );
};

export default memo(Input);
