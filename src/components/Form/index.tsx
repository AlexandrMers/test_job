import React, { FC, FormEvent, useCallback } from "react";
import styled from "styled-components/macro";

import Block from "primitives/Block";

import Input, { InputTypes } from "../Input";

import { fullHeight, marginBottom, marginLeft, width } from "../../libs/styles";
import Button from "../../primitives/Button";
import Flex, { ALIGN_CONTENT } from "primitives/Flex";
import CustomSelect from "../CustomSelect";
import { SuggestInterface } from "../CustomSelect/types";

const StyledForm = styled.form``;

interface FormComponentPropsInterface {
  stylesWrap?: any;
}

const itemsSelect: SuggestInterface[] = [
  {
    title: "Мужской",
    code: "male"
  },
  {
    title: "Женский",
    code: "female"
  }
];

const Form: FC<FormComponentPropsInterface> = ({ stylesWrap }) => {
  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Форма отправлена епт");
  }, []);

  const onSelectSex = useCallback((item: SuggestInterface) => {
    console.log("selected sex item -> ", item);
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

      <Flex jc={ALIGN_CONTENT.BETWEEN}>
        <Block styles={width("calc(50% - 10px)")}>
          <CustomSelect
            onSelect={onSelectSex}
            items={itemsSelect}
            selectedItem={null}
          />
        </Block>

        <Block styles={[width("calc(50% - 10px)"), marginLeft(15)]}>
          <Input
            styles={fullHeight}
            placeholder="name"
            name="sdfsdf"
            onChange={() => {}}
            type={InputTypes.TEXT}
          />
        </Block>
      </Flex>

      <Flex jc={ALIGN_CONTENT.END} ai={ALIGN_CONTENT.CENTER}>
        <Button
          styles={width("calc(50% - 10px)")}
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
