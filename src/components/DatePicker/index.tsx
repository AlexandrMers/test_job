import React, { memo, useCallback, useState } from "react";
import DatePicker from "react-datepicker";
import "styled-components/macro";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

import { inputDecoratedStyles, pointer } from "libs/styles";
import { DatePickerWrapper } from "./styled";

import { renderHeaders } from "./Header";

const DatePickerCmp = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const onDateChange = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  return (
    <DatePickerWrapper>
      <DatePicker
        renderCustomHeader={renderHeaders}
        locale="es"
        css={[inputDecoratedStyles, pointer]}
        onChange={onDateChange}
        placeholderText="Дата рождения"
        dayClassName={() => "date-picker-cmp__day-custom"}
        selected={selectedDate}
        scrollableYearDropdown
      />
      <span className="date-picker__icon" />
    </DatePickerWrapper>
  );
};

export default memo(DatePickerCmp);
