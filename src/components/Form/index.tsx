import React, { FC } from "react";
import styled from "styled-components/macro";

import { fullHeight, fullWidth, position } from "libs/styles";

import InputTel from "components/InputTel";
import Input, { InputTypes } from "../Input";

import Block from "primitives/Block";
import Button from "primitives/Button";
import Flex, { ALIGN_CONTENT } from "primitives/Flex";

import CustomSelect from "../CustomSelect";
import { SuggestInterface } from "../CustomSelect/types";
import DatePickerCmp from "../DatePicker";
import { useFormik } from "formik";
import { validateForm } from "./validators";
import { MainFormInterface } from "./types";
import { useStyles } from "./useStyles";

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

const initialValues = {
  name: "",
  address: "",
  birthdate: null,
  email: "",
  patronymic: "",
  phone: "",
  sex: null,
  surname: "",
  workName: ""
};

const Form: FC<FormComponentPropsInterface> = ({ stylesWrap }) => {
  const {
    handleSubmit,
    handleChange,
    values,
    errors
  } = useFormik<MainFormInterface>({
    initialValues,
    validateOnChange: false,
    validate: validateForm,
    onSubmit: (values: MainFormInterface) => {
      console.log("values -> ", values);
      alert("Форма успешно отправлена!");
    }
  });

  const { marginBottom, marginLeft, width: widthCalculated } = useStyles({
    marginBottomValue: 15,
    marginLeftValue: 15,
    widthCalcValue: "calc(50% - 10px)"
  });

  return (
    <StyledForm css={stylesWrap} onSubmit={handleSubmit}>
      <Block styles={marginBottom}>
        <Input
          name="surname"
          onChange={handleChange("surname")}
          type={InputTypes.TEXT}
          placeholder="Фамилия"
          value={values.surname}
          error={errors.surname}
        />
      </Block>
      <Block styles={marginBottom}>
        <Input
          name="name"
          onChange={handleChange("name")}
          type={InputTypes.TEXT}
          placeholder="Имя"
          value={values.name}
          error={errors.name}
        />
      </Block>

      <Block styles={marginBottom}>
        <Input
          name="patronymic"
          onChange={handleChange("patronymic")}
          type={InputTypes.TEXT}
          placeholder="Отчество"
          value={values.patronymic}
        />
      </Block>

      <Flex styles={marginBottom} jc={ALIGN_CONTENT.BETWEEN}>
        <Block styles={widthCalculated}>
          <CustomSelect
            onSelect={(item) => handleChange("sex")(item.code)}
            items={itemsSelect}
            selectedItem={values.sex}
          />
        </Block>

        <Block styles={[widthCalculated, marginLeft, position("relative")]}>
          <DatePickerCmp
            onChange={handleChange("birthdate")}
            error={errors.birthdate}
          />
        </Block>
      </Flex>

      <Flex styles={marginBottom} jc={ALIGN_CONTENT.BETWEEN}>
        <Block styles={widthCalculated}>
          <InputTel
            onChange={handleChange("phone")}
            placeholder="Номер телефона"
            name="phone"
            mask="+7 (999) 999 99 99"
            error={errors.phone}
          />
        </Block>

        <Block styles={[widthCalculated, marginLeft]}>
          <Input
            styles={fullHeight}
            placeholder="Email"
            name="email"
            onChange={handleChange("email")}
            type={InputTypes.TEXT}
            error={errors.email}
          />
        </Block>
      </Flex>

      <Block styles={[fullWidth, marginBottom]}>
        <Input
          styles={fullHeight}
          placeholder="Адрес постоянной регистрации"
          name="address"
          onChange={handleChange("address")}
          type={InputTypes.TEXT}
        />
      </Block>

      <Block styles={[fullWidth, marginBottom]}>
        <Input
          styles={fullHeight}
          placeholder="Название работодателя"
          name="workName"
          onChange={handleChange("workName")}
          type={InputTypes.TEXT}
        />
      </Block>

      <Flex jc={ALIGN_CONTENT.END} ai={ALIGN_CONTENT.CENTER}>
        <Button
          styles={widthCalculated}
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
