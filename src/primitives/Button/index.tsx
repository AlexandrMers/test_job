import React, { FC } from "react";
import "styled-components/macro";

import { StyledButton } from "./styled";
import { ButtonComponentPropsInterface } from "./types";

const Button: FC<ButtonComponentPropsInterface> = ({
  text,
  htmlTypeBtn,
  onClick,
  maxWidth,
  styles,
  typeDecoration
}) => {
  return (
    <StyledButton
      type={htmlTypeBtn}
      onClick={onClick}
      maxWidth={maxWidth}
      typeDecoration={typeDecoration}
      css={styles}
    >
      {text}
    </StyledButton>
  );
};

export default React.memo(Button);
