import styled from "styled-components/macro";

import { getColor } from "../../libs/colors";

import Icon from "./calendar.png";

export const ButtonPicker = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${getColor("green")};
  margin: 0 5px;
  cursor: pointer;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: initial;
  user-select: none;

  &:hover {
    transition: background-color 0.3s ease, color 0.3s ease;
    background: ${getColor("green")};
    color: ${getColor("colorWhite")};
  }
`;

export const DatePickerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  span.date-picker__icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    display: block;
    background-image: url(${Icon});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
