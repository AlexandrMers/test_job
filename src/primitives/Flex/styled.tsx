import styled from "styled-components";
import { FlexComponentPropsInterface } from "./types";

export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ jc }: FlexComponentPropsInterface) => jc};
  align-items: ${({ ai }) => ai};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? "wrap" : "nowrap")};
`;
