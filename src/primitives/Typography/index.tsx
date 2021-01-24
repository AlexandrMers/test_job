import React, { FC, useMemo } from "react";
import styled from "styled-components/macro";

import { TypographyPropsComponentInterface, TypographyTypes } from "./types";

import { fontSize, fontWeight, lineHeight } from "../../libs/styles";

export const TypographyTypesMap = {
  [TypographyTypes.REGULAR_TITLE]: [
    fontSize(18),
    fontWeight(400),
    lineHeight(20)
  ],
  [TypographyTypes.BOLD_TITLE]: [fontSize(18), fontWeight(600), lineHeight(20)],
  [TypographyTypes.REGULAR]: [fontSize(14), fontWeight(400), lineHeight(16)],
  [TypographyTypes.BOLD]: [fontSize(14), fontWeight(600), lineHeight(16)]
};

export const TypographyStyled = styled.span`
  font-family: "Open Sans", sans-serif;
`;

const Typography: FC<TypographyPropsComponentInterface> = ({
  children,
  type,
  styles
}) => {
  const typeTypography = useMemo(() => TypographyTypesMap[type], [type]);

  return (
    <TypographyStyled css={[typeTypography, styles]}>
      {children}
    </TypographyStyled>
  );
};

export default React.memo(Typography);
