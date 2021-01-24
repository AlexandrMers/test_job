import styled from "styled-components";

import { getColor } from "../../libs/colors";
import { ButtonComponentPropsInterface } from "./types";

export const StyledButton = styled.button`
  font-size: 14px;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  padding: 15px;
  text-align: center;
  color: ${getColor("colorWhite")};
  background-color: ${({ typeDecoration = "green" }) =>
    getColor(typeDecoration)};
  text-decoration: none;
  border-radius: 3px;
  border: none;
  outline: none;
  box-shadow: none;
  width: 100%;
  max-width: ${({
    maxWidth
  }: Omit<ButtonComponentPropsInterface, "text" | "htmlTypeBtn">) =>
    maxWidth ?? "100%"};
  cursor: pointer;
  text-transform: uppercase;
  transition: all ease 0.3s;
  &:hover {
    transition: all ease 0.3s;
    box-shadow: 0 3px 6px 0 ${getColor("greyLight2")};
  }
`;
