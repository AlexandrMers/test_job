import React, { FC, memo } from "react";

import Form from "components/Form";

import Block from "primitives/Block";
import Typography from "primitives/Typography";
import { TypographyTypes } from "primitives/Typography/types";

const FormPage: FC = () => {
  return (
    <Block>
      <Typography type={TypographyTypes.BOLD_TITLE}>
        Информация о сотруднике
      </Typography>
      <Form />
    </Block>
  );
};

export default memo(FormPage);
