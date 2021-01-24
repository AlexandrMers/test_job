import React, { FC, FormEvent, useCallback } from "react";
import styled from "styled-components/macro";

import Block from "primitives/Block";

import Input, { InputTypes } from "../Input";

import { marginBottom } from "../../libs/styles";
import Button from "../../primitives/Button";
import Flex, { ALIGN_CONTENT } from "primitives/Flex";

const StyledForm = styled.form``;

interface FormComponentPropsInterface {
  stylesWrap?: any;
}

const Form: FC<FormComponentPropsInterface> = ({ stylesWrap }) => {
  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Форма отправлена епт");
  }, []);

  return (
    <StyledForm css={stylesWrap} onSubmit={onSubmit}>
      <Block styles={marginBottom(15)}>
        <Input
          name="surname"
          onChange={(value) => {
            console.log(value);
          }}
          type={InputTypes.TEXT}
          placeholder="Фамилия"
        />
      </Block>
      <Block styles={marginBottom(15)}>
        <Input
          name="name"
          onChange={(value) => {
            console.log(value);
          }}
          type={InputTypes.TEXT}
          placeholder="Имя"
        />
      </Block>

      <Block styles={marginBottom(15)}>
        <Input
          name="patronymic"
          onChange={(value) => {
            console.log(value);
          }}
          type={InputTypes.TEXT}
          placeholder="Отчество"
        />
      </Block>

      <Flex jc={ALIGN_CONTENT.END} ai={ALIGN_CONTENT.CENTER}>
        <Button
          htmlTypeBtn="submit"
          text="Сохранить"
          maxWidth="50%"
          typeDecoration="green"
        />
      </Flex>
    </StyledForm>
  );
};

export default React.memo(Form);
