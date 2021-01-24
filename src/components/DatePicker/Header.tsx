import React, { ReactNode } from "react";
import { format } from "date-fns";
import { registerLocale } from "react-datepicker";

import Flex, { ALIGN_CONTENT } from "primitives/Flex";

import { maxWidth } from "libs/styles";

import { ButtonPicker } from "./styled";

import es from "date-fns/locale/ru";

registerLocale("es", es);
function renderDatePickerDate(date: Date) {
  return (
    <>
      {format(new Date(date), "MMM yyyy", {
        locale: es
      })}
    </>
  );
}

export const renderHeaders = ({
  decreaseYear,
  decreaseMonth,
  increaseMonth,
  date,
  increaseYear
}: {
  decreaseYear: () => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  increaseYear: () => void;
  date: Date;
}): ReactNode => {
  return (
    <Flex jc={ALIGN_CONTENT.CENTER}>
      <Flex jc={ALIGN_CONTENT.BETWEEN} styles={maxWidth("80%")}>
        <Flex ai={ALIGN_CONTENT.CENTER}>
          <ButtonPicker onClick={decreaseYear}>&#171;</ButtonPicker>
          <ButtonPicker onClick={decreaseMonth}>&#8249;</ButtonPicker>
        </Flex>
        <div>{renderDatePickerDate(date)}</div>
        <Flex ai={ALIGN_CONTENT.CENTER} jc={ALIGN_CONTENT.END}>
          <ButtonPicker onClick={increaseMonth}>&#8250;</ButtonPicker>
          <ButtonPicker onClick={increaseYear}>&#187;</ButtonPicker>
        </Flex>
      </Flex>
    </Flex>
  );
};
