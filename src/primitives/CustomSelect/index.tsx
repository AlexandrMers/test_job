import React, { FC, useCallback, useState } from "react";
import styled from "styled-components/macro";

import Block from "primitives/Block";

import {
  display,
  fullWidth,
  inputDecoratedStyles,
  pointer,
  selectNone
} from "libs/styles";
import { getColor } from "libs/colors";

import Typography from "../Typography";

import { TypographyTypes } from "../Typography/types";
import ClickOutside from "../ClickOutside";

const StyledCustomSelect = styled.div``;

const SelectTopSign = styled.span`
  font-size: 10px;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  color: ${getColor("greyDarken1")};
`;

const DropdownItem = styled.div``;

interface CustomSelectComponentPropsInterface {}

const DropdownMenu = () => {
  return (
    <Block styles={fullWidth}>
      <DropdownItem>Мужской</DropdownItem>
      <DropdownItem>Женский</DropdownItem>
    </Block>
  );
};

const CustomSelect: FC<CustomSelectComponentPropsInterface> = () => {
  const [isShowLists, setIsShowList] = useState(false);

  const toggleShow = useCallback((isClose?: boolean) => {
    if (isClose) {
      return setIsShowList(false);
    }
    setIsShowList((prevShow) => !prevShow);
  }, []);

  return (
    <ClickOutside handleClickOut={() => toggleShow(true)}>
      <Block styles={selectNone}>
        <Block
          styles={[inputDecoratedStyles, pointer]}
          onClick={() => toggleShow()}
        >
          <SelectTopSign>Пол</SelectTopSign>
          <Typography type={TypographyTypes.REGULAR} styles={display("block")}>
            Не выбрано
          </Typography>
        </Block>

        {isShowLists && <DropdownMenu />}
      </Block>
    </ClickOutside>
  );
};

export default React.memo(CustomSelect);
