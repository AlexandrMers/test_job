import React, { FC, memo } from "react";

import Form from "components/Form";

import Block from "primitives/Block";
import Typography from "primitives/Typography";
import { TypographyTypes } from "primitives/Typography/types";

import { marginTop, maxWidth, padding, width } from "../../libs/styles";

const FormPage: FC = () => {
  return (
    <Block styles={[width("100%"), maxWidth("500px"), padding("25px")]}>
      <Typography type={TypographyTypes.BOLD_TITLE}>
        Информация о сотруднике
      </Typography>
      <Form stylesWrap={marginTop(25)} />
    </Block>
  );
};

export default memo(FormPage);
