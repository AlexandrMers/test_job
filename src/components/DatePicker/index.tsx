import React, { memo, useCallback, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import "styled-components/macro";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

import {
  border,
  errorFieldStyles,
  fullHeight,
  fullWidth,
  inputDecoratedStyles,
  pointer,
  position
} from "libs/styles";

import { getColor } from "libs/colors";

import { DatePickerWrapper } from "./styled";

import { renderHeaders } from "./Header";
import Block from "primitives/Block";

const DatePickerCmp = ({
  onChange,
  error
}: {
  onChange: (date: string) => void;
  error?: string;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const onDateChange = useCallback(
    (date: Date) => {
      setSelectedDate(date);
      onChange(date.toString());
    },
    [onChange]
  );

  const wrapBlockStyles = useMemo(
    () => [
      fullWidth,
      fullHeight,
      position("relative"),
      error && border(1, getColor("red"))
    ],
    [error]
  );

  return (
    <Block styles={wrapBlockStyles}>
      <DatePickerWrapper>
        <DatePicker
          renderCustomHeader={renderHeaders}
          locale="es"
          css={[inputDecoratedStyles, pointer]}
          onChange={onDateChange}
          placeholderText="Дата рождения"
          dayClassName={() => "date-picker-cmp__day-custom"}
          selected={selectedDate}
        />
        <span className="date-picker__icon" />
      </DatePickerWrapper>
      {error && <span css={errorFieldStyles}>{error}</span>}
    </Block>
  );
};

export default memo(DatePickerCmp);
