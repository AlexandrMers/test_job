import React, { FC, FormEvent, useCallback } from "react";
import styled from "styled-components/macro";

const StyledForm = styled.form``;

interface FormComponentPropsInterface {}

const Form: FC<FormComponentPropsInterface> = () => {
  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Форма отправлена епт");
  }, []);

  return (
    <StyledForm onSubmit={onSubmit}>
      <input type="text" placeholder="Введите" />
      <input type="text" placeholder="Введите" />
      <input type="text" placeholder="Введите" />
      <button>Отправить</button>
    </StyledForm>
  );
};

export default React.memo(Form);
