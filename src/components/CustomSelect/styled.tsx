import styled, { css } from "styled-components/macro";

import { getColor } from "libs/colors";
import { inputDecoratedStyles } from "libs/styles";

import { DropdowItemInterface } from "./types";

export const DropdownListWrapper = styled.div`
  position: absolute;
  left: 0;
  top: ${({ bottomPosition }: { bottomPosition: number }) => bottomPosition}px;
  width: 100%;
  z-index: 3;
`;

export const SelectTopSign = styled.span`
  font-size: 10px;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  color: ${getColor("greyDarken1")};
`;

export const DropdownItem = styled.div`
  ${inputDecoratedStyles};
  background-color: ${getColor("colorWhite")};
  border: 1px solid ${getColor("greyLight2")};
  cursor: pointer;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    ${({ hoverable }: DropdowItemInterface) =>
      hoverable
        ? css`
            transition: background-color 0.3s ease, color ease 0.3s;
            background-color: ${getColor("green")};
            color: ${getColor("colorWhite")};
          `
        : null}
  }
`;
