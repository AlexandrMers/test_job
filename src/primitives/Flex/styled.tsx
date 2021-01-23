import styled from "styled-components";
import { FlexComponentPropsInterface } from "./types";

export const FlexDiv = styled.div`
  display: flex;
  justify-content: ${({ jc }: FlexComponentPropsInterface) => jc};
  align-items: ${({ ai }) => ai};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? "wrap" : "nowrap")};
`;
